<template>
  <ul>
    <li v-for="(stat, i) in list" :key="i">
      {{ stat }}
    </li>
  </ul>
</template>

<style scoped>
li {
  font-size: var(--font-size-sm);
  text-align: left;
}

@media screen and (max-width: 600px) {
  li {
    font-size: var(--font-size-md);
  }
} 
</style>

<script>
import { useStore } from '../store/store';
import { STATS_DATA } from '../assets/js/Stats.js';

export default {
  computed: {
    list() {
      const { stats } = useStore();
      return Object.keys(STATS_DATA).map(key => {
        const stat = STATS_DATA[key];
        return `${stat.name}: ${stat.display(stats[key])}`
      });
    }
  }
}
</script>