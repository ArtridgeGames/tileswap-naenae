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
    align-items: center;
  }
  h1 {
    text-align: center;
    font-size: 120px;
    margin: 0;
    margin-bottom: 50px;
    padding-top: 50px;
  }
  h1 > span {
    color:black;
  }
  div {
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 80px;
    }
    main {
      flex-direction: column;
    }
    div {
      overflow-y: scroll;
    }
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