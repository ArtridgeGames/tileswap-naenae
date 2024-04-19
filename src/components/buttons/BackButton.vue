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
  width: 55px;
  height: 55px;
  padding: 0;
  padding-top: 10px;
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