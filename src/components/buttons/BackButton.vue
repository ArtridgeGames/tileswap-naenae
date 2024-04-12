<template>
  <button @click="onClick">&lt;</button>
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
}
</style>

<script>
export default {
  props: ['to'],
  methods: {
    onClick() {
      if (this.to) this.$router.push(this.to);
    }
  }
}
</script>