<script setup>
import LayoutSelectionButton from "../../components/freeplay/LayoutSelectionButton.vue";
import LinkButton from "../../components/LinkButton.vue";
import { Layout } from "../../assets/js/Layout.js";
</script>

<template>
  <main>
    <h1 class="title">Select a layout</h1>
    <LinkButton class="top right" text="back" to="/" />
    
    <div class="layouts">
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
export default {
  data() {
    return {
      layouts: Layout.FILTERED_LAYOUTS
    }
  },
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>