<script setup>
import Button from './Button.vue';
</script>

<template>
  <Button :black="black" :text="text" @pressed="onClick" :disabled="disabled" />
</template>

<script>
export default {
  props: ['text', 'to', 'black', 'disabled'],
  methods: {
    onClick() {
      this.$router.push(this.to);
    }
  }
}
</script>