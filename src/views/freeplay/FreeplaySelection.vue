<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import randomUrl from "/images/svg/random.svg";
</script>

<template>
  <main>
    <h1 class="title">Select a layout</h1>
    <LinkButton class="top right" text="back" to="/home" />
    <br>
    <div>
      <div class="text-center">
        <IconButton :icon="randomUrl" @click="startRandomFreeplay" />
      </div>
      <hr>
      <div v-for="(category, i) in categories" :key="i">
        <div class="layouts">
          <LayoutSelectionButton
            v-for="(layout, index) in category"
            :layout="layout"
            :completion="layout.id"
            :key="index"
          ></LayoutSelectionButton>
        </div>
        <hr class="separator">
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