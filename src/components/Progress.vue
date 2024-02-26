<template>
  <div class="container">
    <div class="progress"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 40px;
  background: var(--hl-color);
  /* border: 1px solid var(--shadow-color); */
  border-radius: 20px;
  overflow: hidden;
}
.progress {
  width: v-bind(progress);
  height: 100%;
  background: v-bind(barColorOrDefault);
  transition: width 0.5s ease-in-out;
}
.container > .text {
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  font-size: var(--font-size-xs);
  color: var(--shadow-text-color);
}
</style>

<script>
export default {
  props: ['value', 'max', 'text', 'barColor', 'backgroundColor'],
  computed: {
    progress() {
      if (this.max == 0) return "100%";
      return (this.value / this.max * 100) + "%";
    },
    barColorOrDefault() {
      return this.barColor ?? 'var(--root-bg-color)';
    }
  }
}
</script>