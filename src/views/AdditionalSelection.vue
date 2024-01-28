<script setup>
import IconButton from "../components/buttons/IconButton.vue";
import Modal from "../components/Modal.vue";
import Stats from "../components/Stats.vue";
import Settings from "../components/Settings.vue";
import statsUrl from "/images/svg/stats.svg";
import settingsUrl from "/images/svg/settings.svg";
import taskUrl from "/images/svg/tasks.svg";
import tutorialUrl from "/images/svg/tutorial.svg";
import Button from "../components/buttons/Button.vue";
import TaskContainer from "../components/TaskContainer.vue";
</script>

<template>
  <div>
    <main class="center middle">
      <div
        :class="{
          bottom: windowWidth > 600,
          right: windowWidth > 600,
          'text-center': windowWidth <= 600,
        }"
      >
        <p v-if="isSignedIn" @click="signOut">
          You are logged in as {{ user.displayName }}
        </p>
        <p v-else @click="signInForm">You are not logged in</p>
      </div>
      <IconButton :icon="taskUrl" @pressed="showTasks = true" />
      <IconButton :icon="statsUrl" @pressed="showStats = true" />
      <IconButton :icon="settingsUrl" @pressed="showSettings = true" />
      <IconButton :icon="tutorialUrl" @pressed="$router.push('/tutorial')" />

      <p class="text-center" @click="unlock">unlock all</p>
    </main>
  
    <Modal v-model="showStats">
      <h1>Stats</h1>
  
      <Stats />
      <Button black text="close" @pressed="showStats = false" />
    </Modal>
  
    <Modal v-model="showSettings">
      <h1>Settings</h1>
      <Settings />
      <Button black text="close" @pressed="showSettings = false" />
    </Modal>
  
    <Modal v-model="showTasks">
      <h1>Tasks</h1>
      <TaskContainer />
      <Button black text="close" @pressed="showTasks = false" />
    </Modal>
  </div>
</template>

<style scoped>
main {
  width: 230px;
  text-align: center;
}
</style>

<script>
import { user, isSignedIn, signIn, signOut } from "../firebase/auth.js";
import { useWindow } from "../assets/js/window.js";
import { useStore } from "../store/store.js";
export default {
  data() {
    const { width: windowWidth } = useWindow();
    return {
      windowWidth,
      showStats: false,
      showSettings: false,
      showTasks: false,
    };
  },
  methods: {
    signOut,
    signInForm() {
      signIn(prompt("Email"), prompt("Password"));
    },
    unlock() {
      const store = useStore();
      store.unlockAll();
    }
  },
};
</script>