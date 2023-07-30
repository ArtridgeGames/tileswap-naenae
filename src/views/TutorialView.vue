<script setup>
import LayoutVue from '../components/Layout.vue';
import Modal from '../components/Modal.vue';
import Button from '../components/Button.vue';
</script>

<template>
  <div>
    <h1 class="title">how to play</h1>

    <Modal v-model="showModal">
      <div v-if="stage === -1">
        <h1>When you click on a tile , that tile and all its neighbours toggle color .</h1>
        <h1>Try to get all the tiles to be white!</h1>
        <Button black text="ok!" @click="showModal = false" />
      </div>
      <div v-else-if="stage === 0">
        <h1>Nice! Now observe what happens at the corners</h1>
        <Button black text="let's go!" @click="showModal = false" />
      </div>
      <div v-else-if="stage === 1">
        <h1>Well done! Okay one last , a bit harder</h1>
        <Button black text="sure!" @click="showModal = false" />
      </div>
      <div v-else>
        <h1>Great job! Ready to play?</h1>
        <Button black text="go to freeplay" @click="showModal = false" />
      </div>
    </Modal>

    <h1 class="text-center">Try it here!</h1>

    <LayoutVue :class="{ shake }" class="center middle" v-model="layout" @swap="handleClick" />

  </div>
</template>

<script>
import { useStore } from '../store/store.js';
import { Layout } from '../assets/js/Layout.js';
export default {
  data() {
    const store = useStore();

    const examples = [
      {
        matrix: [[0,0,0],
                 [0,0,0],
                 [0,0,0]],
        solution: [4]
      },
      {
        matrix: [[1,1,0,0],
                 [1,1,0,0],
                 [1,1,1,1],
                 [1,1,1,1]],
        solution: [3]
      },
      {
        matrix: [[ 1,1,1,-1],
                 [ 1,1,0, 0],
                 [ 1,0,1, 1],
                 [-1,0,1, 1]],
        solution: [11, 14]
      }
    ].map(obj => {
      const { matrix, solution } = obj;
      const layout = new Layout({
        width: matrix[0].length,
        height: matrix.length
      });
      layout.setMatrix(matrix);
      return { layout, solution };
    });
    
    const layout = examples[0].layout.copy();
    store.setLayout(layout);
    return {
      layout,
      examples,
      store,
      showModal: true,
      shake: false,
      stage: -1
    };
  },
  watch: {
    showModal(val) {
      if (!val) {

        if (this.stage + 1 >= this.examples.length) {
          this.store.setLayout(this.layout);
          this.$router.push('/freeplayGame');
          return;
        }

        this.layout = this.examples[this.stage + 1].layout.copy();
        this.store.setLayout(this.layout);

        setTimeout(() => {
          this.stage++;
        }, 100);
      }
    }
  },
  methods: {
    handleClick(tileIndex, row, tile) {
      if (!this.examples[this.stage].solution.includes(tileIndex)) {
        this.layout.swapTiles(row, tile);
        this.shake = true
        setTimeout(() => {
          this.shake = false
        }, 900);
        return;
      }

      if (this.layout.isSolved()) {
        this.showModal = true;
      }
    },
  }
}
</script>