<script setup>
import { useStore } from '@/store/store.js';

</script>

<template>
  <div :data-level="completion" class="container" @click="openGame">
    <div v-for="row in layout.height" :key="'row' + row" class="row">
      <div
        v-for="tile in layout.width"
        :key="'t' + tile"
        class="tile"
        :style="{
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
  background-color: white;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  margin: 6px;
  cursor: pointer;
}
.container::before {
  content: attr(data-level);
  position: absolute;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
  width: 10px;
  height: 10px;
  top: -3px;
  left: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container[data-level="30"]::before {
  background-color: #dac778;
}
.tile {
  background-color: black;
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
  props: ["layout", "completion"],
  data() {
    return {
      store: useStore(),
      tileSizePreview:
        (1 / Math.sqrt(this.$props.layout.height * this.$props.layout.width)) *
        50,
    };
  },
  methods: {
    openGame() {
      this.store.setLayout(this.$props.layout);
      this.$router.push("/freeplayGame");
    },
  }
};
</script>