<script setup>
import SpikeTile from './SpikeTileSVG.vue'
import Round from './RoundSVG.vue';
// import Squircle from './SquircleSVG.vue';
</script>

<template>
  <!--  -->
  <div>
    <SpikeTile v-if="shape==='SpikeTile'" :color="color"></SpikeTile>
    <Round v-else-if="shape==='Round'" :color="color"></Round>
    <!-- <Squircle v-else :color="color"></Squircle> -->
  </div>
</template>

<script>
  export default {
    props: ['color', 'shape']
  }
</script>