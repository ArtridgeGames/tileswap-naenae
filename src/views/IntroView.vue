<script setup>
import LinkButton from "../components/buttons/LinkButton.vue";
import Button from "../components/buttons/Button.vue";
</script>

<template>
  <main class="text-center center middle">
    <h1 class="main-title">Tile<br><span>Swap</span></h1>
    <div v-if="authLoaded">
      <LinkButton text="tutorial" to="/tutorial" />
      <Button text="play" @pressed="play" />
    </div>
    <p v-else>Loading...</p>
  </main>
</template>

<script>
import { authLoaded } from '../firebase/auth.js';
import { useStore } from '../store/store.js';
export default {
  data() {
    return {
      authLoaded
    }
  },
  methods: {
    play() {
      const store = useStore();
      if (store.score === 0) store.score = 50;
      store.hasHadOtherGameModesPopup = true;
      this.$router.push('/home');
    }
  }
}
</script>