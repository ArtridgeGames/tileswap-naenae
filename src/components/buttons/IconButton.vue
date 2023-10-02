<template>
  <main class="icon-container" @click="handleClick">
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
export default {
  props: ['icon', 'to'],
  methods: {
    handleClick() {
      if (this.to) {
        this.$router.push(this.to);
      }
    }
  }
}
</script>