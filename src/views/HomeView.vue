<script setup>
import ModeButton from '../components/ModeButton.vue';
</script>

<template>
  <h1>Tile<span>Swap</span></h1>

  <main>
    <ModeButton name="Freeplay" image="src/assets/images/freeplay.png" path="/freeplaySelection" />
    <ModeButton name="Puzzles" image="src/assets/images/puzzles.png" path="/puzzleSelection" />
    <ModeButton name="Challenges" image="src/assets/images/challenges.png" path="/challengeSelection" />
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  h1 {
    text-align: center;
    font-size: 120px;
    color:white;
  }
  h1 > span {
    color:black;
  }
</style>