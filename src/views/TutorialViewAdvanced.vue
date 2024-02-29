<script setup>
import LayoutVue from '../components/Layout.vue';
import Modal from '../components/Modal.vue';
import Button from '../components/buttons/Button.vue';
</script>

<template>
  <main>
    <Modal v-model="showModal">
      <div v-if="modalPage == 0">
        <h1>Welcome to TileSwap</h1>
        <h1>To win the game, turn all the tiles white</h1>
        <h1>Clicking on a tile swaps the color of <span style="color: var(--success-color)">this tile</span> and all its neighbors</h1>
        <LayoutVue class="example-layout" small disabled v-model="exampleLayout" :highlightedTiles="[[2,2]]" />
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
      <div v-if="modalPage == 1">
        <h1>You've won!</h1>
        <h3>You're free to continue experimenting. Continue when you're ready.</h3>
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
      <div v-if="modalPage == 2">
        <h1>Now see what happens when tiles are missing.</h1>
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
      <div v-if="modalPage == 3">
        <h1>You should be getting the hang of it</h1>
        <h1>Let's make this a bit interesting</h1>
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
      <div v-if="modalPage == 4">
        <h1>Everything so far could be solved in a single click</h1>
        <h1>However as you might have seen when experimenting, things get complicated very fast</h1>
        <h1>For example when 2 clicks overlap</h1>
        <h1>[INSERT ANIMATION]</h1>
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
    </Modal>

    <!-- <LayoutVue 
      class="center middle"
      v-model="stage.layout"
    /> -->

    <h1 class="text-center" :class="{ shake }" v-if="showWrong">Wrong tile!</h1>

    <LayoutVue
      class="center middle"
      v-model="stage.layout"
      :class="{ shake }"
      :disabled="disabled"
      @swap="handleClick"
    />

    <p class="top center">{{ text }}</p>

    <Button class="bottom center" v-if="enableNext" text="Next" @pressed="next" />
  </main>
</template>

<style scoped>
.example-layout {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background: var(--root-bg-color);
}
</style>

<script>
import { Layout } from '../assets/js/Layout.js';

export default {
  data() {

    const stages = [
        {
          matrix: [[1,1,1,1,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,1,1,1,1]],
          solution: [12],
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,0,1,1],
                   [1,1,1,1,1],
                   [1,1,1,1,1]],
          solution: [6]
        },
        {
          matrix: [[0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0]],
          solution: [7,28]
        },
        {
          matrix: [[0,0,0,1,1,1,1],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [1,1,1,1,0,0,0],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1]],
          solution: [8,19,37]
        },
        {
          matrix: [[1,1,1,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,1,1,1],
                   [1,1,1,1,0,0,0],
                   [1,1,1,1,0,0,0],
                   [1,1,1,1,0,0,0]],
          solution: [12,15,47],
          showModal: true
        },
        {
          matrix: [[-1,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 1,1,1,1,1],
                   [ 1,1,1,1,1]],
          solution: [6]
        },
        {
          matrix: [[1,1,1, 1,1],
                   [1,1,1, 1,1],
                   [1,1,0, 0,0],
                   [1,1,0, 0,0],
                   [1,1,0,-1,0]],
          solution: [18]
        },
        {
          matrix: [[1,1, 1, 1,1],
                   [1,1, 1, 1,1],
                   [1,1, 0,-1,0],
                   [1,1,-1, 0,0],
                   [1,1, 0, 0,0]],
          solution: [18]
        },
        {
          matrix: [[1, 1, 1, 1,1],
                   [1, 0,-1, 0,1],
                   [1,-1, 0,-1,1],
                   [1, 0,-1, 0,1],
                   [1, 1, 1, 1,1]],
          solution: [12]
        },
        {
          matrix: [[ 1, 1,1,1,1],
                   [ 1, 1,1,1,1],
                   [ 0, 0,0,1,1],
                   [-1, 0,0,1,1],
                   [-1,-1,0,1,1]],
          solution: [16]
        },
        {
          matrix: [[ 1, 1, 1,1,1],
                   [ 1, 1, 1,1,1],
                   [-1, 0, 0,1,1],
                   [-1, 0, 0,1,1],
                   [-1,-1,-1,1,1]],
          solution: [16],
          showModal: true
        },
        {
          matrix: [[1,1,0,0],
                   [1,1,0,0],
                   [1,1,0,0],
                   [1,1,1,1]],
          solution: [7]
        },
        {
          matrix: [[1,1,0,0],
                   [1,1,0,0],
                   [1,1,1,1],
                   [1,1,1,1]],
          solution: [3]
        },
        {
          matrix: [[1,0,0],
                   [1,0,0],
                   [1,1,1]],
          solution: [2]
        },
        {
          matrix: [[1, 1,1],
                   [0,-1,1],
                   [0, 0,1]],
          solution: [6]
        },
        {
          matrix: [[1, 1,1],
                   [1,-1,0],
                   [1,-1,0]],
          solution: [8],
          showModal: true
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,0,0,0]],
          solution: [6,18]
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,1,0,0],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,1,1,1]],
          solution: [6,13]
        },
        {
          matrix: [[0,0,1,0,0],
                   [0,0,1,0,0],
                   [0,0,1,0,0],
                   [1,1,1,1,1],
                   [1,1,1,1,1]],
          solution: [6, 8]
        },
        {
          matrix: [[0,0,0],
                   [1,1,1],
                   [0,0,0],
                   [0,0,0]],
          solution: [1,7]
        },
        {
          matrix: [[0,1,0],
                   [0,1,0],
                   [1,1,1]],
          solution: [0,2]
        },
        {
          matrix: [[1,0,0],
                   [0,1,0],
                   [0,0,1]],
          solution: [2, 6]
        }
      ].map(stage => {
        const res = new Layout({
          width: stage.matrix[0].length,
          height: stage.matrix.length,
          exclude: Layout.getExcludeFromMatrix(stage.matrix),
        });
        res.setMatrix(stage.matrix);
        return {
          layout: res,
          showModal: stage.showModal,
          solution: stage.solution,
          modulo: stage.modulo,
        }
      });

    return {
      showModal: true,
      text: 'Try it here!',
      modalPage: -1,
      stageIndex: 0,
      stages,
      shake: false,
      showWrong: false,
      disabled: undefined,
      enableNext: false,
      exampleLayout: (() => {
        const layout =  new Layout({
          width: 5,
          height: 5,
          id: 'tutorial'
        });
        layout.setAllTiles(0);
        return layout;
      })()
    }
  },
  watch: {
    showModal: {
      handler(newVal) {
        if (newVal) this.modalPage++;
      },
      immediate: true
    }
  },
  mounted() {
    window.setInterval(() => {
      this.exampleLayout.swapTiles(2, 2, 1, 2, tilesToFlip.value);
    }, 2e3);
  },
  computed: {
    stage() {
      return this.stages[this.stageIndex];
    }
  },
  methods: {
    handleClick(tileIndex, row, tile) {
      if (this.stage.solution && !this.disabled && !this.enableNext) {
        if (!this.stage.solution.includes(tileIndex)) {
          this.disabled = true;
          setTimeout(() => {
            this.stage.layout.swapTiles(row, tile, -1, this.stage.modulo ?? 2);
            this.shake = true
            this.showWrong = true;
            this.disabled = undefined;
            setTimeout(() => {
              this.showWrong = false;
            }, 2e3);
            setTimeout(() => {
              this.shake = false
            }, 900);
          }, 500);
          return;
        } else {
          this.stages[this.stageIndex].solution.splice(this.stages[this.stageIndex].solution.indexOf(tileIndex), 1);
        }
      }

      if (this.stage.layout.isSolved(this.stage.modulo ?? 2) && !this.enableNext) {
        if (this.modalPage === 0) {
          this.showModal = true;
        }
        this.enableNext = true;
      }
    },
    next() {
      if (this.stage.showModal) {
        this.showModal = true;
      }
      this.enableNext = false;
      this.stageIndex++;
    }
  }
}
</script>