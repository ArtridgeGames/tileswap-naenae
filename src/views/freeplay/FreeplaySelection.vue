<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import randomUrl from "/images/svg/random.svg";
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
      <div class="layouts" v-for="(category, i) in categories" :key="i">
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
import { Layout } from "../../assets/js/Layout.js";

export default {
  data() {
    const { CATEGORIES } = Layout;
    return {
      categories: CATEGORIES,
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