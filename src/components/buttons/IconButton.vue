<template>
  <main class="icon-container" @[EVENTS.TOUCHEND]="handleClick">
    <div>
      <img :src="icon" />
    </div>
  </main>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
  color: var(--color);
  font-size: var(--font-size-sm);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  height: 90%;
}
main.icon-container {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 6px;
  border: none;
  border-radius: var(--button-border-radius);
  background-color: var(--hl-color);
  padding: var(--button-padding);
  overflow: hidden;
}
</style>

<script>
import { EVENTS } from '../../assets/js/events.js';
export default {
  props: ['icon'],
  emits: ['pressed'],
  data() {
    return { EVENTS }
  },
  methods: {
    handleClick() {
      this.$emit('pressed');
    }
  }
}
</script>