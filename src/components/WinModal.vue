<template>
  <div>
    <Transition name="slide-up">
      <div class="win-modal-overlay" v-show="modelValue" @click="close">
        <div class="win-modal" @click.stop>
          <div class="win-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.win-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.win-modal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: var(--popup-border-radius) var(--popup-border-radius) 0 0;
  z-index: 999;
  color: var(--shadow-text-color);
  max-height: 80vh;
  overflow-y: auto;
}

.win-content {
  width: 100%;
  margin: 0 auto;
}

.slide-up-enter-active {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-up-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-up-enter-from {
  transform: translateY(100%);
}

.slide-up-leave-to {
  transform: translateY(100%);
}

@media screen and (max-width: 600px) {
  .win-modal {
    padding: 20px;
    max-height: 85vh;
  }
}
</style>

<script>
import { useStore } from '../store/store.js';

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    }
  },
  watch: {
    modelValue(val) {
      const store = useStore();
      store.allowScroll = !val;
    }
  }
}
</script>
