<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import IconButton from "../../components/buttons/IconButton.vue";
import Separator from "../../components/Separator.vue";
import randomUrl from "/images/svg/random.svg";
</script>

<template>
  <main>
    <h1 class="title">FreePlay</h1>
    <!-- <LinkButton class="top right" text="back" to="/home" /> -->
    <br>
    <div>
      <div class="text-center tools">
        <!-- <IconButton :icon="randomUrl" @pressed="startRandomFreeplay" /> -->
        <LinkButton v-if="showLayoutEditor" to="layout-editor" text="✎"></LinkButton>
      </div>
      <div v-for="(category, i) in categories"
        :key="i" :class="{ fade: i === categories.length - 1 && !isUnlocked(category[0]) }">
        <div class="layouts">
          <Separator :text="i + 1" />
          <LayoutSelectionButton
            v-for="(layout, index) in category"
            :layout="layout"
            :completion="layout.id"
            :key="index"
          ></LayoutSelectionButton>
        </div>
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
div.tools {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
div.tools > button {
  width: 100px;
  height: 100px;
  font-size: 48px;
  display: inline-block;
}
</style>

<script>
import { useStore } from '../../store/store.js';
import { Layout } from "../../assets/js/Layout.js";

export default {
  computed: {
    showLayoutEditor() {
      return process.env.NODE_ENV === 'development';
    },
    categories() {
      const store = useStore();
      const { CATEGORIES } = Layout;
      return CATEGORIES.filter(e => e.length > 0)
              .filter(e => {
                const layout = e[0];
                return layout.unlockCategory <= store.unlockedCategoriesFP + 1 || layout.unlockCategory >= store.categories.length
              });
          // .slice(negativeCategories + 1, CATEGORIES.length)
          // .concat(CATEGORIES.slice(0, negativeCategories + 1))
    },
    categoriesLength() {
      const { CATEGORIES } = Layout;
      return CATEGORIES.filter(e => e.length > 0).length;
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
    },
    isUnlocked(layout) {
      const store = useStore();
      return layout.unlockCategory <= store.unlockedCategoriesFP || layout.unlockCategory >= store.categories.length;
    }
  }
};
</script>