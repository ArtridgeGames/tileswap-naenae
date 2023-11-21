<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import randomUrl from "/images/svg/random.svg";
</script>

<template>
  <main>
    <h1 class="title">FreePlay</h1>
    <!-- <LinkButton class="top right" text="back" to="/home" /> -->
    <br>
    <div>
      <div class="text-center">
        <IconButton :icon="randomUrl" @click="startRandomFreeplay" />
      </div>
      <hr class="separator">
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
</style>

<script>
import { useStore } from '../../store/store.js';
import { Layout } from "../../assets/js/Layout.js";

export default {
  data() {
    const { CATEGORIES } = Layout;
    const negativeCategories = CATEGORIES.reduce((acc, cat) => {
      return cat.some(layout => layout.unlockCategory < 0) ? acc + 1 : acc;
    }, 0);
    return {
      categories: CATEGORIES
        .slice(negativeCategories + 1, CATEGORIES.length)
        .concat(CATEGORIES.slice(0, negativeCategories + 1))
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