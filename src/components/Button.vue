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
  background-color: white;
  color: black;
  font-size: 25px;
  cursor: pointer;
  margin: 10px;
  display: inline-block;
  position: relative;
}
button:focus {
  outline: none;
}
</style>

<script>
export default {
  props: ['text']
}
</script>