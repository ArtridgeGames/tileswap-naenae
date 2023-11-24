<template>
  <button @[clickEvent]="handleClick">
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
import { EVENTS } from '../../assets/js/events.js';

export default {
  props: ['text', 'black', 'event', 'trigger'],
  emits: ['pressed'],
  computed: {
    backgroundColor() {
      return this.black !== undefined ? 'var(--shadow-color)' : 'var(--hl-color)';
    },
    color() {
      return this.black !== undefined ? 'var(--hl-text-color)' : 'var(--shadow-text-color)';
    },
    clickEvent() {
      return this.trigger !== undefined ? this.trigger : EVENTS.TOUCHEND;
    }
  },
  methods: {
    handleClick() {
      this.$emit('pressed');
    }
  }
}
</script>