<script setup>
import Button from './buttons/Button.vue';
</script>

<template>
  <ul>
    <li v-for="(stat, i) in list" :key="i">
      {{ stat }}
    </li>
  </ul>

  <Button v-if="isSignedIn" @pressed="erase" text="Reset stats" black />
</template>

<style scoped>
li {
  font-size: var(--font-size-sm);
  text-align: left;
}
</style>

<script>
import { useStore } from '../store/store';
import { STATS_DATA } from '../assets/js/Stats.js';
import { remove } from '../firebase/database.js';
import { user, isSignedIn } from '../firebase/auth.js';

export default {
  computed: {
    list() {
      const { stats } = useStore();
      return Object.keys(STATS_DATA).map(key => {
        const stat = STATS_DATA[key];
        return `${stat.name}: ${stat.display(stats[key])}`
      });
    }
  },
  methods: {
    async erase() {
      await remove(`users/${user.value.uid}/game-data/tileswap-naenae/`);
      window.location.reload();
    }
  }
}
</script>