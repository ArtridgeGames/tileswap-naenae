<script setup>
import ModeButton from '../components/ModeButton.vue';
import freeplayUrl from '/images/freeplay-transparent.png';
import puzzlesUrl from '/images/puzzles-transparent.png';
import challengesUrl from '/images/challenges-transparent.png';
import Button from '../components/Button.vue';
import LinkButton from '../components/LinkButton.vue';
import Modal from '../components/Modal.vue';
import Stats from '../components/Stats.vue';
import Settings from '../components/Settings.vue';
import TaskContainer from '../components/TaskContainer.vue';
</script>

<template>
  <div class="container">

    <h1 class="main-title">Tile<span>Swap</span></h1>
  
    <main>
      <ModeButton name="Freeplay" :image="freeplayUrl" path="/freeplaySelection" />
      <ModeButton name="Puzzles" :image="puzzlesUrl" path="/puzzleSelection" />
      <ModeButton name="Challenges" :image="challengesUrl" path="/challengeSelection" />
    </main>

    <div :class="{
      bottom: windowWidth > 600,
      left: windowWidth > 600,
      'text-center': windowWidth <= 600,
    }">
      <Button v-if="windowWidth <= 600" text="tasks" @click="showTasks = true" />

      <Button text="stats" @click="showStats = true" />
      <Button text="settings" @click="showSettings = true" />
      <LinkButton text="tutorial" to="/tutorial" />
    </div>

    <div :class="{
      bottom: windowWidth > 600,
      right: windowWidth > 600,
      'text-center': windowWidth <= 600,
    }">
      <p v-if="isSignedIn" @click="signOut">
        You are logged in as {{ user.displayName }}
      </p>
      <p v-else @click="signInForm">
        You are not logged in
      </p>
    </div>



    <Modal v-model="showStats">
      <h1>Stats</h1>
      
      <Stats />

      <Button black text="close" @click="showStats = false" />
    </Modal>
    <Modal v-model="showSettings">
      <h1>Settings</h1>
      <Settings />
    </Modal>
    <Button v-if="windowWidth > 600" class="top right" text="tasks" @click="showTasks = true" />

    <Modal v-model="showTasks">
      <h1>Tasks</h1>
      <TaskContainer />
      <Button black text="close" @click="showTasks = false" />
    </Modal>


  </div>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  h1.main-title {
    text-align: center;
    font-size: var(--title-font-size);
    margin: 0;
    margin-bottom: 50px;
    padding-top: 50px;
  }
  .container > div > p {
    margin: 10px;
    cursor: pointer;
  }
  h1 > span {
    color:black;
  }
  .container {
    height: 100%;
    overflow-x: hidden;
  }

  @media screen and (max-width: 600px) {
    h1.main-title {
      font-size: var(--font-size-lg);
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
import { useWindow } from '../assets/js/window.js';

export default {
  data() {
    const { width: windowWidth } = useWindow();
    return {
      windowWidth,
      user, isSignedIn,
      showStats: false,
      showTasks: false,
      showSettings: false,
    };
  },
  methods: {
    signOut,
    signInForm() {
      signIn(prompt('Email'), prompt('Password'));
    },
  }
}
</script>