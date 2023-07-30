<script setup>
import { useStore } from '@/store/store.js';

</script>

<template>
  <div class="container" @click="openGame">
    <div
      v-for="tile in includedTiles"
      :key="'t' + tile"
      class="tile"
      :style="{
        backgroundColor: layout.isWhite(tile) ? '#b5ab9e' : 'black',
        transform: `translate(${
          tileSizePreview * ((tile % layout.width) - layout.width / 2) + 50
        }px, ${tileSizePreview * (Math.floor(tile / layout.width) - layout.height / 2) + 50}px)`,
        width: `${tileSizePreview - 1}px`,
        height: `${tileSizePreview - 1}px`,
      }"
    ></div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  background-color: v-bind('solved ? "#DAC778" : "white"');
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin: 6px;
  cursor: pointer;
}
.tile {
  position: absolute;
  border-radius: 2px;
  display: inline-block;
}
.layout-preview {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  props: ["puzzle"],
  data() {
    const { width, height } = this.puzzle.target;
    return {
      tileSizePreview:
        (1 / Math.sqrt(width * height)) *
        50,
    };
  },
  computed: {
    layout() {
      return this.puzzle.target;
    },
    solved() {
      const store = useStore();
      return store.solvedPuzzles.includes(this.puzzle.id);
    },
    includedTiles() {
      return new Array(this.layout.width * this.layout.height)
        .fill(0)
        .map((_, i) => i)
        .filter(i => !this.layout.exclude.includes(i))
    }
  },
  methods: {
    openGame() {
      const store = useStore();
      store.setPuzzle(this.puzzle);
      store.setLayout(this.layout);
      this.$router.push("/puzzleGame");
    },
  }
};
</script>