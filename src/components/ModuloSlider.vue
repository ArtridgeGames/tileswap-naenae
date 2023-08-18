<script setup>

</script>

<template>
  <div class="diff">
    <h2>states - {{ moduloText }}</h2>
    <input type="range"
            min="2"
            :value="modelValue"
            @input="emit"
            max="5">
  </div>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    moduloText() {
      return this.modelValue;
    }
  },
  methods: {
    emit(event) {
      this.$emit('update:modelValue', parseInt(event.target.value));
    }
  }
}

</script>

<style scoped>
  h2 {
    text-align:center;
  }
</style>