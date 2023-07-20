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
  }
  img {
    width: 270px;
    height: 270px;
  }
  span {
    color: white;
    font-size: 50px;
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