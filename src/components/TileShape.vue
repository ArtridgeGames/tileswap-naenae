<template>
  <div>
    <component :is="shape" :color="color" :borderColor="borderColor"></component>
  </div>
</template>

<script>

import SpikeTile from './tiles/Spike.vue'
import Round from './tiles/Round.vue';
import Squircle from './tiles/Squircle.vue';
import Square from './tiles/Square.vue';

export default {
  props: ['color', 'shape', 'border-color'],
  components: {
    SpikeTile,
    Round,
    Squircle,
    Square
  }
}
</script>