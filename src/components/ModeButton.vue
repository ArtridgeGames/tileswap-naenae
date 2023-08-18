<template>

  <div @click="openMode">
    <span>{{ name }}</span>
    <img :src="image">
  </div>

</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    align-items: center;
  }
  img {
    width: 270px;
    height: 270px;
  }
  span {
    font-size: var(--font-size-md);
  }
</style>

<script>
export default {
  props: ['name', 'image', 'path'],
  methods: {
    openMode() {
      this.$router.push(this.$props.path);
    }
  }
}
</script>