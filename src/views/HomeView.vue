<script setup>
import ModeButton from '../components/ModeButton.vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';
</script>

<template>
  <div>
    <h1>Tile<span>Swap</span></h1>
  
    <main>
      <ModeButton name="Freeplay" image="/images/freeplay.png" path="/freeplaySelection" />
      <ModeButton name="Puzzles" image="/images/puzzles.png" path="/puzzleSelection" />
      <ModeButton name="Challenges" image="/images/challenges.png" path="/challengeSelection" />
    </main>

  </div>
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
  }
  h1 > span {
    color:black;
  }
</style>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
}
</script>