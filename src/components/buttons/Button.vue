<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: var(--button-default-w);
  padding: var(--button-padding);
  border: none;
  border-radius: var(--button-border-radius);
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  font-size: var(--font-size-sm);
  cursor: pointer;
  margin: 10px;
  display: inline-block;
}
button:focus {
  outline: none;
}
</style>

<script>
export default {
  props: ['text', 'black'],
  computed: {
    backgroundColor() {
      return this.black !== undefined ? 'var(--shadow-color)' : 'var(--hl-color)';
    },
    color() {
      return this.black !== undefined ? 'var(--hl-text-color)' : 'var(--shadow-text-color)';
    }
  }
}
</script>