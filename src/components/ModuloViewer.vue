<template>
  <div class="modulo">
      <div class="balls">
        <div
        v-for="i in modulo"
        :key="i"
        :style="{
          backgroundColor: getGradient(modulo)[i - 1]
        }"
        ></div>
      </div>
      <h2>{{ modulo }}</h2>
    </div>
</template>

<style scoped>
.modulo {
  margin: 20px;
  width: fit-content;
  display: flex;
  gap: 5px;
}
.modulo .balls {
  display: flex;
  align-items: center;
}
.modulo .balls > div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 3px;
}
.modulo > h2 {
  font-size: var(--font-size-sm);
  margin: 0;
}
</style>

<script>
import { getGradient } from '../assets/js/LayoutShared.js';
export default {
  props: ['modulo'],
  methods: {
    getGradient
  }
}
</script>