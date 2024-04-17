<template>
  <button @click="onClick">&#9616;&#9616;</button>
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
  padding-top: 10px;
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