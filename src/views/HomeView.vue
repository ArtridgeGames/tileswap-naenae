<script setup>
import ModeButton from '../components/ModeButton.vue';

import freeplayUrl from '/images/freeplay.png';
import puzzlesUrl from '/images/puzzles.png';
import challengesUrl from '/images/challenges.png';
</script>

<template>
  <div>
    <h1>Tile<span>Swap</span></h1>
  
    <main>
      <ModeButton name="Freeplay" :image="freeplayUrl" path="/freeplaySelection" />
      <ModeButton name="Puzzles" :image="puzzlesUrl" path="/puzzleSelection" />
      <ModeButton name="Challenges" :image="challengesUrl" path="/challengeSelection" />
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