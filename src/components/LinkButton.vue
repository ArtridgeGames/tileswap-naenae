<script setup>
import Button from './Button.vue';
</script>

<template>
  <Button :text="text" @click="onClick" />
</template>

<script>
export default {
  props: ['text', 'to'],
  methods: {
    onClick() {
      this.$router.push(this.to);
    }
  }
}
</script>