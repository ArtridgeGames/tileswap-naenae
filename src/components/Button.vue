<template>
  <button>
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width:210px;
  padding: 15px;
  border: none;
  border-radius: 7px;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
  font-size: 25px;
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
      return this.black !== undefined ? 'black' : 'white';
    },
    color() {
      return this.black !== undefined ? 'white' : 'black';
    }
  }
}
</script>