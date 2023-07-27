<script setup>
import ModeButton from '../components/ModeButton.vue';
import freeplayUrl from '/images/freeplay.png';
import puzzlesUrl from '/images/puzzles.png';
import challengesUrl from '/images/challenges.png';

import { getCurrentUser, isSignedIn } from '../firebase/auth.js';

</script>

<template>
  <div class="container">
    <h1>Tile<span>Swap</span></h1>
  
    <main>
      <ModeButton name="Freeplay" :image="freeplayUrl" path="/freeplaySelection" />
      <ModeButton name="Puzzles" :image="puzzlesUrl" path="/puzzleSelection" />
      <ModeButton name="Challenges" :image="challengesUrl" path="/challengeSelection" />
    </main>

    <p class="bottom right" v-if="isSignedIn()">
      You are logged in as {{ user.displayName }}
    </p>
    <p class="bottom right" v-else>
      You are not logged in
    </p>

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
  p {
    margin-right: 10px;
  }
  h1 > span {
    color:black;
  }
  .container {
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 80px;
    }
    main {
      flex-direction: column;
    }
    .container {
      overflow-y: scroll;
    }
  }
</style>

<script>
export default {
  data() {
    const user = getCurrentUser();
    return {
      user,
    }
  }
}
</script>