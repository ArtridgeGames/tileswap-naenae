<template>
  <div>
    
    <Transition name="fade">
      <div v-show="modelValue" class="background" @click="close"></div>
    </Transition>

    <Transition name="zoom">
      <div class="modal" v-show="modelValue">
        <slot></slot>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: var(--popup-bg-trans);
  z-index: 999;
}
.modal {
  position: absolute;
  top: 50%; left: 50%;
  translate: -50% -50%;
  background-color: var(--hl-color);
  padding: 20px;
  text-align: center;
  border-radius: var(--popup-border-radius);
  z-index: 1000;
  color: var(--shadow-text-color);
  min-width: var(--popup-width)
}
@media screen and (max-width: 600px) {
  .modal {
    min-width: 95%;
  }
}
</style>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    }
  }
}
</script>