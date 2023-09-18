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
    <br>
    
    <div>

      <div class="text-center">
        <IconButton :icon="randomUrl" @click="startRandomFreeplay" />
      </div>
      <div class="layouts" v-for="(category, i) in layouts" :key="i">
        <LayoutSelectionButton
          v-for="(layout, index) in category"
          :layout="layout"
          :completion="layout.id"
          :key="index"
        ></LayoutSelectionButton>
      </div>

    </div>

  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
div.text-center {
  margin-bottom: 20px;
}
.layouts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
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
    const categories = new Set(Layout.FILTERED_LAYOUTS.map(e => e.unlockCategory)).size;
    const layouts = new Array(categories).fill(0).map((_, i) => {
      return Layout.FILTERED_LAYOUTS.filter(e => e.unlockCategory === i + 1);
    });
    console.log(layouts);
    return {
      layouts,
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