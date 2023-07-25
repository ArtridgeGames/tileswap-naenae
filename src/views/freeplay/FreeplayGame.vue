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
  
      <div class="row" v-for="(row, rowIndex) in layout.matrix" :key="'row'+rowIndex">
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
    const layout = store.currentLayout;
    return {
      layout,
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
      this.layout.swapTiles(row, tile);
      this.moves++;
      
      if (this.layout.isSolved()) {
        this.showModal = true;
      }
    },
    randomize() {
      this.moves = 0;
      this.layout = this.layout.generatePosition(this.difficulty);
    }
  },
  mounted() {
    this.randomize();
  }
}
</script>