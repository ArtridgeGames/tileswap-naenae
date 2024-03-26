<template>
  <div>
    <hr class="separator" :data-text="text">
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: v-bind(margin);
}

div {
  position: relative;
}

hr::after {
  content: attr(data-text);
  color: var(--hl-text-color);
  display: v-bind(display);
  position: absolute;
  background: var(--bg-dark-color);
  width: 41px;
  height: 27px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -12px);
}
</style>

<script>
export default {
  props: ['text'],
  computed: {
    display() {
      return this.text ? 'flex' : 'none';
    },
    margin() {
      return this.text ? '10px 0' : '0';
    }
  }
}
</script>