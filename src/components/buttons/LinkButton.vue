<script setup>
import Button from './Button.vue';
</script>

<template>
  <Button :black="black" :text="text" @pressed="onClick" />
</template>

<script>
export default {
  props: ['text', 'to', 'black'],
  methods: {
    onClick() {
      this.$router.push(this.to);
    }
  }
}
</script>