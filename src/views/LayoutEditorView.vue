<script setup>
import LinkButton from "../components/buttons/LinkButton.vue";
import LayoutVue from "../components/Layout.vue";
import Button from "../components/buttons/Button.vue";
</script>


<template>
  <main>
    <LinkButton text="back" to="/home" class="top right" />

    <Button :text="mode" @click="mode = mode === 'edit' ? 'play' : 'edit'" class="top left" />

    <div class="bottom center">
      <Button text="export" @click="exportLayout" />
      <input type="range" min="1" max="13" step="1" v-model="width" />
      <input type="range" min="1" max="13" step="1" v-model="height" />
    </div>

    <LayoutVue :disabled="enableClickOnHiddenTiles" :enableClickOnHiddenTiles="enableClickOnHiddenTiles" @tileClick="handleClick" class="center middle" v-model="layout"></LayoutVue>

  </main>
</template>

<style scoped>
main {
  height: 100%;
}
div.bottom.center {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 90%;
}
</style>


<script>
import { Layout } from "../assets/js/Layout.js";
export default {
  data() {
    const layout = new Layout({
      width: 3,
      exclude: [],
      height: 3,
      unlockCategory: 0,
      id: 0,
    });

    return {
      width: 3,
      height: 3,
      exclude: [],
      layout,
      mode: "edit",
    };
  },
  computed: {
    enableClickOnHiddenTiles() {
      return this.mode === "edit";
    },
  },
  watch: {
    width(newVal) {
      this.layout = new Layout({
        width: parseInt(newVal),
        height: parseInt(this.height),
        exclude: this.exclude,
        unlockCategory: 0,
        id: 0,
      });
    },
    height(newVal) {
      this.layout = new Layout({
        width: parseInt(this.width),
        height: parseInt(newVal),
        exclude: this.exclude,
        unlockCategory: 0,
        id: 0,
      });
    },
  },
  methods: {
    handleClick(tile, row, col) {

      if (this.mode === "play") {
        return;
      }

      if (this.exclude.includes(tile)) {
        this.exclude = this.exclude.filter((t) => t !== tile);
      } else {
        this.exclude.push(tile);
      }
      this.layout = new Layout({
        width: parseInt(this.width),
        height: parseInt(this.height),
        exclude: this.exclude,
        unlockCategory: 0,
        id: 0,
      });
    },
    exportLayout() {
      console.log(JSON.stringify({
        width: parseInt(this.width),
        height: parseInt(this.height),
        exclude: this.exclude,
      }, null, 2));
    },
  },
};
</script>