<script setup>
import LayoutVue from '../components/Layout.vue';
import Modal from '../components/Modal.vue';
import Button from '../components/buttons/Button.vue';
</script>

<template>
  <div>
    <Modal v-model="showModal">
      <div v-if="stage === -1">
        <h1>Welcome to TileSwap</h1>
        <h1>To win the game, turn all the tiles white</h1>
        <h1>Clicking on a tile swaps the color of <span style="color: var(--success-color)">this tile</span> and all its neighbors</h1>
        <LayoutVue class="example-layout" small disabled v-model="exampleLayout" :highlightedTiles="[[2,2]]" />
        <Button black text="ok!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 0">
        <h1>Nice! Try it again!</h1>
        <Button black text="gotcha!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 1">
        <h1>Great! Now see what happens in the sides</h1>
        <Button black text="sure!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 2">
        <h1>Or when tiles are missing</h1>
        <Button black text="yeah!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 3">
        <h1>And can you figure this next one out?</h1>
        <Button black text="obviously!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 4">
        <h1>What about this one?</h1>
        <Button black text="of course!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 5">
        <h1>we're not helping you on this one</h1>
        <Button black text="roger that!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 6">
        <h1>You're getting the hang of it! Let's make it a bit harder</h1>
        <Button black text="you bet!" @pressed="showModal = false" />
      </div>
      <div v-else-if="stage === 7">
        <h1>last one!</h1>
        <Button black text="Let's embark on this endeavor posthaste, shall we?" @pressed="showModal = false" />
      </div>
      <div v-else>
        <h1>You're ready to go!</h1>
        <Button black text="go to freeplay" @pressed="showModal = false" />
      </div>
    </Modal>

    <h1 class="text-center">{{ text }}</h1>
    <h1 class="text-center" :class="{ shake }" v-if="showWrong">Wrong tile!</h1>
    <Button v-if="stage >= 6" text="retry" class="center" @pressed="reset" />

    <LayoutVue :class="{ shake }" :disabled="disabled" class="center middle" v-model="layout" @swap="handleClick" />

  </div>
</template>

<style scoped>
div > h1.text-center {
  margin-top: 50px;
}
.example-layout {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background: var(--root-bg-color);
}
</style>

<script>
import { tilesToFlip } from '../assets/js/LayoutShared.js';
import { Layout } from '../assets/js/Layout.js';
import { useStore } from '../store/store.js';
export default {
  data() {
    const examples = [
      {
        matrix: [[1,1,1,1,1],
                 [1,0,0,0,1],
                 [1,0,0,0,1],
                 [1,0,0,0,1],
                 [1,1,1,1,1]],
        solution: [12],
        text: 'Try it here!'
      },
      {
        matrix: [[0,0,0,1,1,1,1],
                 [0,0,0,1,0,0,0],
                 [0,0,0,1,0,0,0],
                 [1,1,1,1,0,0,0],
                 [1,0,0,0,1,1,1],
                 [1,0,0,0,1,1,1],
                 [1,0,0,0,1,1,1]],
        solution: [8,19,37],
        text: 'Try it again!'
      },
      {
        matrix: [[ 1,1,0, 0],
                 [ 1,1,0, 0],
                 [ 1,1,0, 0],
                 [ 1,1,1, 1]],
        solution: [7],
        text: 'See what happens in the sides'
      },
      {
        matrix: [[ 1, 1,  1, 1],
                 [ 0,-1,  0, 1],
                 [ 0, 0, -1, 1],
                 [ 0, 0,  0, 1]],
        solution: [9],
        text: 'Or when tiles are missing'
      },
      {
        matrix: [[0,0,0,1,1],
                 [0,0,1,0,0],
                 [0,0,1,0,0],
                 [1,1,0,0,0],
                 [1,1,1,1,1]],
        solution: [6,13],
        text: 'And can you figure this next one out?'
      },
      {
        matrix: [[0,1,1],
                 [0,1,1],
                 [0,1,1]],
        solution: [4,5],
        text: 'What about this one?'
      },
      {
        matrix: [[0,1,1],
                 [1,0,0],
                 [0,1,1]],
        text: 'we\'re not helping you on this one'
      },
      {
        matrix: [[1,0,1],
                 [1,1,0],
                 [0,1,1]],
        text: 'you\'re getting the hang of it! let\'s make it a bit harder'
      },
      {
        matrix: [[1,1,1],
                 [1,0,1],
                 [0,1,0]],
        text: 'one last!'
      }
    ].map(obj => {
      const { matrix, solution, text } = obj;
      const layout = new Layout({
        width: matrix[0].length,
        height: matrix.length,
        id: 'tutorial'
      });
      layout.setMatrix(matrix);
      return { layout, solution, text };
    });
    
    const layout = examples[0].layout.copy();
    return {
      layout,
      examples,
      showModal: true,
      shake: false,
      stage: -1,
      text: 'Try it here!',
      showWrong: false,
      disabled: undefined,
      exampleLayout: (() => {
        const layout =  new Layout({
          width: 5,
          height: 5,
          id: 'tutorial'
        });
        layout.setAllTiles(0);
        return layout;
      })()
    };
  },
  watch: {
    showModal(val) {
      if (!val) {

        if (this.stage + 1 >= this.examples.length) {
          const store = useStore();
          store.setLayout(Layout.fromId(0));
          this.$router.push('/freeplayGame');
          return;
        }

        this.layout = this.examples[this.stage + 1].layout.copy();

        this.text = this.examples[this.stage + 1].text;

        setTimeout(() => {
          this.stage++;
        }, 100);
      }
    }
  },
  methods: {
    handleClick(tileIndex, row, tile) {
      if (this.examples[this.stage].solution) {
        if (!this.examples[this.stage].solution.includes(tileIndex)) {
          this.disabled = true;
          setTimeout(() => {
            this.layout.swapTiles(row, tile, 1, modulo.value, tilesToFlip.value);
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
          this.examples[this.stage].solution.splice(this.examples[this.stage].solution.indexOf(tileIndex), 1);
        }
      }

      if (this.layout.isSolved(modulo.value)) {
        this.disabled = true;
        setTimeout(() => {
          this.showModal = true;
          this.disabled = undefined;
        }, 500);
      }
    },
    reset() {
      if (!this.examples[this.stage].solution) {
        this.layout = this.examples[this.stage].layout.copy();
      }
    }
  },
  mounted() {
    window.setInterval(() => {
      this.exampleLayout.swapTiles(2, 2, 1, modulo.value, tilesToFlip.value);
    }, 2e3);
  }
}
</script>