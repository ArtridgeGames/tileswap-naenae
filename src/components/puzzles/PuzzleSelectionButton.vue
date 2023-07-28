<script setup>
import { useStore } from '@/store/store.js';

</script>

<template>
  <div class="container" @click="openGame">
    <div v-for="row in layout.height" :key="'row' + row" class="row">
      <div
        v-for="tile in layout.width"
        :key="'t' + tile"
        class="tile"
        :style="{
          backgroundColor: layout.isWhite(row - 1, tile - 1) ? '#b5ab9e' : 'black',
          visibility: layout.isTile(row - 1, tile - 1)
            ? 'visible'
            : 'hidden',
          transform: `translate(${
            tileSizePreview * (tile - 1 - layout.width / 2) + 50
          }px, ${tileSizePreview * (row - 1 - layout.height / 2) + 50}px)`,
          width: `${tileSizePreview - 1}px`,
          height: `${tileSizePreview - 1}px`,
        }"
      ></div>
    </div>
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
    const { width, height } = this.$props.puzzle.target;
    return {
      tileSizePreview:
        (1 / Math.sqrt(width * height)) *
        50,
    };
  },
  computed: {
    layout() {
      return this.$props.puzzle.target;
    },
    solved() {
      const store = useStore();
      return store.solvedPuzzles.includes(this.$props.puzzle.id);
    }
  },
  methods: {
    openGame() {
      const store = useStore();
      store.setPuzzle(this.$props.puzzle);
      store.setLayout(this.$props.puzzle.target);
      this.$router.push("/puzzleGame");
    },
  }
};
</script>