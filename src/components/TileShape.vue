<template>
  <div>
    <component :is="shape" :color="color"></component>
  </div>
</template>

<script>

import SpikeTile from './tiles/Spike.vue'
import Round from './tiles/Round.vue';
import Squircle from './Tiles/Squircle.vue';
import Square from './Tiles/Square.vue';

export default {
  props: ['color', 'shape'],
  components: {
    SpikeTile,
    Round,
    Squircle,
    Square
  }
}
</script>