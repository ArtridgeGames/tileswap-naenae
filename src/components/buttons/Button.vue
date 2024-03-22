<template>
  <button :class="{ disabled: isDisabled }" @click="handleClick" :disabled="isDisabled">
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
  transition: transform 0.05s;
}
button:focus {
  outline: none;
}
button:not(.disabled):active {
  transform: scale(0.95);
}
button.center:not(.disabled):active {
  transform: scale(0.95) translateX(-50%);
}
button.middle:not(.disabled):active {
  transform: scale(0.95) translateY(-50%);
}
button.disabled {
  cursor: not-allowed;
  color: gray;
}
</style>

<script>
import { EVENTS } from '../../assets/js/events.js';

export default {
  props: ['text', 'black', 'event', 'trigger', 'disabled'],
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
    },
    isDisabled() {
      if (this.disabled === "") return true;
      return this.disabled !== undefined ? this.disabled : false;
    }
  },
  methods: {
    handleClick() {
      this.$emit('pressed');
    }
  }
}
</script>