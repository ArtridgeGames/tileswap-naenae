<script setup>
import LinkButton from "../components/buttons/LinkButton.vue";
</script>

<template>
  <main class="text-center center middle">
    <h1 class="main-title">Tile<br><span>Swap</span></h1>
    <LinkButton v-if="authLoaded" text="play" to="/home" />
    <p v-else>Loading...</p>
  </main>
</template>

<script>
import { authLoaded } from '../firebase/auth.js';
export default {
  data() {
    return {
      authLoaded
    }
  }
}
</script>