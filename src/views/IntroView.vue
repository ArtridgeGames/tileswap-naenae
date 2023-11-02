<script setup>
import LinkButton from "../components/buttons/LinkButton.vue";
</script>

<template>
  <main class="text-center center middle">
    <h1 class="main-title">Tile<br><span>Swap</span></h1>
    <LinkButton text="play" to="/home" />
  </main>
</template>

<style scoped>
h1.main-title > span {
  color: black;
}
h1.main-title {
  line-height: 0.65;
  margin-bottom: 50px;
  font-size: 140px;
}
</style>