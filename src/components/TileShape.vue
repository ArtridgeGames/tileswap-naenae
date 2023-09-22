<script setup>
import SpikeTile from './SpikeTileSVG.vue'
import Round from './RoundSVG.vue';
</script>

<template>
  <!--  -->
  <div>
    <SpikeTile v-if="shape==='SpikeTile'" :color="color"></SpikeTile>
    <Round v-else-if="shape==='Round'" :color="color"></Round>
  </div>
</template>

<script>
  export default {
    props: ['color', 'shape']
  }
</script>