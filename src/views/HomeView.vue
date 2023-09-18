<script setup>
import ModeButton from '../components/ModeButton.vue';
import freeplayUrl from '/images/freeplay-transparent.png';
import puzzlesUrl from '/images/puzzles-transparent.png';
import challengesUrl from '/images/svg/challenges.svg';
import statsUrl from '/images/svg/stats.svg';
import settingsUrl from '/images/svg/settings.svg';
import taskUrl from '/images/svg/tasks.svg';
import tutorialUrl from '/images/svg/tutorial.svg';
import Button from '../components/buttons/Button.vue';
import IconButton from '../components/buttons/IconButton.vue';
import Modal from '../components/Modal.vue';
import Stats from '../components/Stats.vue';
import Settings from '../components/Settings.vue';
import TaskContainer from '../components/TaskContainer.vue';
import SplashScreen from '../components/SplashScreen.vue';
</script>

<template>
  <div class="container">

    <h1 class="main-title">Tile<span>Swap</span></h1>
  
      <main class="buttons">
      <ModeButton name="Freeplay" :image="freeplayUrl" path="/freeplaySelection" />
      <ModeButton name="Puzzles" :image="puzzlesUrl" path="/puzzleSelection" />
      <ModeButton name="Challenges" :image="challengesUrl" path="/challengeSelection" />
    </main>

    <div :class="{
      bottom: windowWidth > 600,
      center: windowWidth > 600,
      'text-center': windowWidth <= 600,
    }" style="width: max-content">
      <IconButton :icon="taskUrl" @click="showTasks = true" />
      <IconButton :icon="statsUrl" @click="showStats = true" />
      <IconButton :icon="settingsUrl" @click="showSettings = true" />
      <IconButton :icon="tutorialUrl" to="/tutorial" />
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

    <Modal v-model="showTasks">
      <h1>Tasks</h1>
      <TaskContainer />
      <Button black text="close" @click="showTasks = false" />
    </Modal>


    <Transition name="fade">
      <SplashScreen v-if="showSplash" />
    </Transition>


  </div>
</template>

<style scoped>
  main.buttons {
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
    main.buttons {
      flex-direction: column;
    }
    .container {
      overflow-y: scroll;
    }
  }
</style>

<script>
import { user, isSignedIn, signOut, signIn, authLoaded } from '../firebase/auth.js';
import { useWindow } from '../assets/js/window.js';
import { watch } from 'vue';

export default {
  data() {
    const { width: windowWidth } = useWindow();
    return {
      windowWidth,
      user, isSignedIn,
      showStats: false,
      showTasks: false,
      showSettings: false,
      showSplash: !authLoaded.value,
    };
  },
  methods: {
    signOut,
    signInForm() {
      signIn(prompt('Email'), prompt('Password'));
    },
  },
  mounted() {
    watch(authLoaded, val => {
      this.showSplash = false;
    });
  }
}
</script>