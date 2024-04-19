<script setup>
import pause from "/images/svg/pause.svg";
</script>

<template>
  <button @click="onClick">
    <img :src="pause" />
  </button>
</template>

<style scoped>
button {
  background-color: transparent;
  border: none;
  color: var(--text-color);
  font-size: var(--font-size-md);
  cursor: pointer;
  width: 75px;
  height: 75px;
  padding: 0;
  margin-top: 20px;
}
button img {
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  emits: ['pause'],
  methods: {
    onClick() {
      this.$emit('pause');
    }
  }
}
</script>