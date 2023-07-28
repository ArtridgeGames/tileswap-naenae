<script setup>
import ModeButton from '../components/ModeButton.vue';
import freeplayUrl from '/images/freeplay.png';
import puzzlesUrl from '/images/puzzles.png';
import challengesUrl from '/images/challenges.png';
</script>

<template>
  <div class="container">
    <h1>Tile<span>Swap</span></h1>
  
    <main>
      <ModeButton name="Freeplay" :image="freeplayUrl" path="/freeplaySelection" />
      <ModeButton name="Puzzles" :image="puzzlesUrl" path="/puzzleSelection" />
      <ModeButton name="Challenges" :image="challengesUrl" path="/challengeSelection" />
    </main>

    <p class="bottom right" v-if="isSignedIn" @click="signOut">
      You are logged in as {{ user.displayName }}
    </p>
    <p class="bottom right" v-else @click="signInForm">
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
    cursor: pointer;
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
import { user, isSignedIn, signOut, signIn } from '../firebase/auth.js';
export default {
  data() {
    return { user, isSignedIn };
  },
  methods: {
    signOut,
    signInForm() {
      signIn(prompt('Email'), prompt('Password'));
    },
  }
}
</script>