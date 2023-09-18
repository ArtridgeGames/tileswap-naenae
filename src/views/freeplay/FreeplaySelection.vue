<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import randomUrl from "../../../public/images/svg/tutorial.svg";
import { Layout } from "../../assets/js/Layout.js";
</script>

<template>
  <main>
    <h1 class="title">Select a layout</h1>
    <LinkButton class="top right" text="back" to="/" />
    
    <div class="layouts">

      <IconButton :icon="randomUrl" @click="startRandomFreeplay" />

      <LayoutSelectionButton
        v-for="(layout, index) in layouts"
        :layout="layout"
        :completion="layout.id"
        :key="index"
      ></LayoutSelectionButton>
    </div>

  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.layouts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  h1 {
    padding-top: 60px;
  }
}
</style>

<script>
import { useStore } from '../../store/store.js';

export default {
  data() {
    return {
      layouts: Layout.FILTERED_LAYOUTS
    }
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    startRandomFreeplay() {
      const store = useStore();
      store.isRandomFreeplay = true;
      store.setLayout(Layout.getRandomLayout());
      this.$router.push("/freeplayGame");
    }
  }
};
</script>