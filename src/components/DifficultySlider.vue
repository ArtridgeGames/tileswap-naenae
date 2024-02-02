<script setup>

</script>

<template>
  <div class="diff">
    <h2>difficulty - {{ difficultyText }}</h2>
    <input type="range"
            min="2"
            :value="modelValue"
            @input="$emit('update:modelValue', parseInt($event.target.value))"
            :max="max">
  </div>
</template>

<script>
import { useStore } from '@/store/store.js'
import { modulo } from '../assets/js/LayoutShared.js';
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    const store = useStore();
    return {
      difficulties: ['very easy', 'easy', 'normal', 'hard', 'very hard'],
      max: (modulo.value-1)*(store.currentLayout.nTiles())
    }
  },
  computed: {
    difficultyText() {
      const diff = this.difficulties[Math.floor((this.modelValue - 1) / (this.max / this.difficulties.length))];
      return diff;
    }
  },
  mounted() {
    if (this.modelValue > this.max) {
      this.$emit('update:modelValue', this.max);
    }
  }
}

</script>

<style scoped>
.diff{
  margin:5px;
}
h2{
    margin: 10px 0 20px;
    font-size: 25px;
    text-align: center;
    white-space: nowrap;
}
</style>