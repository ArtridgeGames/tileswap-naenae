<script setup>
import store from "../../store/store.js";
import Tile from "../../components/Tile.vue";
import Button from "../../components/Button.vue";
import Slider from "../../components/Slider.vue";
import Modal from "../../components/Modal.vue";
import LinkButton from "../../components/LinkButton.vue";
</script>

<template>
  <div>
    <div class="top-menu">
      <Button text="randomize" @click="randomize" />
      <Slider v-model="difficulty" />
    </div>

    <LinkButton class="top right" text="back" to="/freeplaySelection" />
    
    <main>
  
      <div class="row" v-for="(row, rowIndex) in matrix" :key="'row'+rowIndex">
        <Tile class="tile" 
          v-for="(tile, tileIndex) in row"
          :color="tile === 1 ? 'white' : 'black'"
          :visibility="tile === -1 ? 'hidden' : 'visible'" :key="rowIndex + '' + tileIndex"
          @click="onTileClick(rowIndex, tileIndex)" />
      </div>
  
    </main>

    <Modal v-model="showModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? 's' : '' }}!</h1>
      <Button black text="yay!" @click="showModal = false" />
    </Modal>
  </div>

</template>

<style scoped>
.top-menu{
  width: 240px;
  margin-left: 20px;
}
.row {
  white-space: nowrap;
}
main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
<script>
export default {
  data() {
    const { width, height, exclude } = store.currentLayout;
    const matrix = this.buildMatrix(width, height, exclude);
    return {
      matrix,
      width, height, exclude,
      difficulty: store.difficulty ?? 2,
      showModal: false,
      moves: 0
    };
  },
  watch: {
    difficulty() {
      store.difficulty = this.difficulty;
    },
    showModal() {
      if (!this.showModal) {
        this.randomize();
      }
    }
  },
  methods: {
    onTileClick(row, tile) {
      this.swapTiles(row, tile, this.matrix);
      this.moves++;
      this.checkWin();
    },
    swapTiles(row, tile, matrix) {
      const dirx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
      const diry = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
      
      for (const x of dirx) {
        for (const y of diry) {
          if (row + y >= 0 && row + y < matrix.length && tile + x >= 0 && tile + x < matrix[0].length
            && matrix[row+y][tile+x] !== -1)
            matrix[row+y][tile+x] = matrix[row+y][tile+x] ? 0 : 1;
        }
      }
    },
    generatePattern(iterations) {
      const matrix = this.buildMatrix(this.width, this.height, this.exclude);

      for (let i = 0; i < iterations; i++) {
        
        let row;
        let tile;

        do {
          row = Math.floor(Math.random() * this.height);
          tile = Math.floor(Math.random() * this.width);
        } while(store.currentLayout.exclude.includes(row*this.width+tile));
        
        this.swapTiles(row, tile, matrix);
      }

      // Regenerate if the matrix is already solved
      return matrix.every(row => row.every(tile => tile === 1 || tile === -1)) 
        ? this.generatePattern(iterations) 
        : matrix;
    },
    randomize() {
      this.moves = 0;
      this.matrix = this.generatePattern(this.difficulty);
    },
    checkWin() {
      if (this.matrix.every(row => row.every(tile => tile === 1 || tile === -1))) {
        this.showModal = true;
      }
    },
    buildMatrix(width, height, exclude) {
      const mat = new Array(height).fill(1).map(() => new Array(width).fill(1));
      for (const e of exclude) {
        mat[Math.floor(e / width)][e % width] = -1;
      }
      return mat;
    }
  },
  mounted() {
    this.randomize();
  }
}
</script>