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
        <h1>Now see what happens when tiles are missing.</h1>
      </div>
      <div v-if="modalPage == 2">
        <h1>You should be getting the hang of it</h1>
      </div>
    </Modal>

    <LayoutVue 
      class="center middle"
      v-model="layout"
    />

    <p class="top center">{{ text }}</p>
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

    const layouts = [
        {
          matrix: [[1,1,1,1,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,0,0,0,1],
                   [1,1,1,1,1]],
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,0,1,1],
                   [1,1,1,1,1],
                   [1,1,1,1,1]],
        },
        {
          matrix: [[0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [0,0,0,1,1,1],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0],
                   [1,1,1,0,0,0]],
        },
        {
          matrix: [[0,0,0,1,1,1,1],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [1,1,1,1,0,0,0],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1],
                   [1,0,0,0,1,1,1]],
        },
        {
          matrix: [[1,1,1,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,0,0,0],
                   [0,0,0,1,1,1,1],
                   [1,1,1,1,0,0,0],
                   [1,1,1,1,0,0,0],
                   [1,1,1,1,0,0,0]],
          showModal: true
        },
        {
          matrix: [[-1,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 0,0,0,1,1],
                   [ 1,1,1,1,1],
                   [ 1,1,1,1,1]]
        },
        {
          matrix: [[1,1,1, 1,1],
                   [1,1,1, 1,1],
                   [1,1,0, 0,0],
                   [1,1,0, 0,0],
                   [1,1,0,-1,0]]
        },
        {
          matrix: [[1,1, 1, 1,1],
                   [1,1, 1, 1,1],
                   [1,1, 0,-1,0],
                   [1,1,-1, 0,0],
                   [1,1, 0, 0,0]]
        },
        {
          matrix: [[1, 1, 1, 1,1],
                   [1, 0,-1, 0,1],
                   [1,-1, 0,-1,1],
                   [1, 0,-1, 0,1],
                   [1, 1, 1, 1,1]]
        },
        {
          matrix: [[ 1, 1,1,1,1],
                   [ 1, 1,1,1,1],
                   [ 0, 0,0,1,1],
                   [-1, 0,0,1,1],
                   [-1,-1,0,1,1]]
        },
        {
          matrix: [[ 1, 1, 1,1,1],
                   [ 1, 1, 1,1,1],
                   [-1, 0, 0,1,1],
                   [-1, 0, 0,1,1],
                   [-1,-1,-1,1,1]],
          showModal: true
        },
        {
          matrix: [[1,1,0,0],
                   [1,1,0,0],
                   [1,1,0,0],
                   [1,1,1,1]],
        },
        {
          matrix: [[1,1,0,0],
                   [1,1,0,0],
                   [1,1,1,1],
                   [1,1,1,1]],
        },
        {
          matrix: [[1,0,0],
                   [1,0,0],
                   [1,1,1]],
        },
        {
          matrix: [[1, 1,1],
                   [0,-1,1],
                   [0, 0,1]],
        },
        {
          matrix: [[1, 1,1],
                   [1,-1,0],
                   [1,-1,0]],
          showModal: true
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,0,1,1],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,0,0,0]],
        },
        {
          matrix: [[0,0,0,1,1],
                   [0,0,1,0,0],
                   [0,0,1,0,0],
                   [1,1,0,0,0],
                   [1,1,1,1,1]],
        },
        {
          matrix: [[0,0,1,0,0],
                   [0,0,1,0,0],
                   [0,0,1,0,0],
                   [1,1,1,1,1],
                   [1,1,1,1,1]],
        },
        {
          matrix: [[0,0,0],
                   [1,1,1],
                   [0,0,0],
                   [0,0,0]],
        },
        {
          matrix: [[0,1,0],
                   [0,1,0],
                   [1,1,1]],
        },
        {
          matrix: [[1,0,0],
                   [0,1,0],
                   [0,0,1]],
        }
      ].map(layout => {
        const res = new Layout({
          width: layout.matrix[0].length,
          height: layout.matrix.length,
          exclude: Layout.getExcludeFromMatrix(layout.matrix),
        });
        res.setMatrix(layout.matrix);
        return res;
      });

    const layout = layouts[0];

    return {
      showModal: true,
      text: 'Try it here!',
      modalPage: 0,
      layoutIndex: 0,
      layout,
      layouts,
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
    showModal() {
      this.modalPage++;
    }
  },
  mounted() {
    window.setInterval(() => {
      this.exampleLayout.swapTiles(2, 2, 1, 2, tilesToFlip.value);
    }, 2e3);
  }
}
</script>