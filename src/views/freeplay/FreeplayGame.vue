<script setup>
import store from "../../store/store.js";
import Tile from "../../components/Tile.vue";
import Button from "../../components/Button.vue";
import Slider from "../../components/Slider.vue";
</script>

<template>

  <div class="top-menu">
    <Button text="randomize" @click="this.matrix = randomize(difficulty)" />
    <Slider v-model="difficulty" />
  </div>
  
  <main>

    <div class="row" v-for="row in store.currentLayout.height" :key="'row'+row">
      <Tile class="tile" 
        v-for="tile in store.currentLayout.width"
        :color="matrix[row-1][tile-1] ? 'white' : 'black'"
        :visibility="store.currentLayout.exclude.includes((row-1) * store.currentLayout.width + tile - 1) ? 'hidden' : 'visible'" :key="row + '' + tile"
        @click="onTileClick(row-1, tile-1)"></Tile>
    </div>

  </main>

</template>

<style scoped>
.top-menu{
  width: 240px;
  margin-left: 20px;
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
    const { width, height } = store.currentLayout;
    const matrix = this.buildMatrix(width, height);
    return {
      matrix,
      width, height,
      difficulty: 2
    };
  },
  methods: {
    onTileClick(row, tile) {
      this.swapTiles(row, tile, this.matrix)
    },
    swapTiles(row, tile, matrix) {
      const dirx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
      const diry = [-1, 0, 1, -1, 0, 1, -1, 0, 1];
      
      for (const x of dirx) {
        for (const y of diry) {
          if (row + y >= 0 && row + y < matrix.length && tile + x >= 0 && tile + x < matrix[0].length)
            matrix[row+y][tile+x] = matrix[row+y][tile+x]?0:1;
        }
      }
    },
    randomize(number) {
      console.log(number);
      const matrix = this.buildMatrix(this.width, this.height);

      for (let i = 0; i < number; i++) {
        
        let row;
        let tile;

        do {
          row = Math.floor(Math.random() * this.height);
          tile = Math.floor(Math.random() * this.width);
        } while(store.currentLayout.exclude.includes(row*this.width+tile));
        
        this.swapTiles(row, tile, matrix);
      }

      return matrix;
    },
    buildMatrix(width, height) {
      return new Array(height).fill(1).map(() => new Array(width).fill(1));
    }
  },
  mounted() {
    this.matrix = this.randomize(this.difficulty);
  }
}
</script>