<template>
  <div>
    
    <!-- <Transition name="fade">
      <div v-show="modelValue" class="background" @[clickEvent]="close"></div>
    </Transition> -->

    <Transition name="fade">
      <div class="modal" v-show="modelValue">
        <div>
          <slot></slot>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: white;  /* var(--popup-bg-trans); */
  z-index: 999;
}
.modal {
  position: absolute;
  top: 0; left: 0;
  background-color: var(--hl-color);
  padding: 20px;
  text-align: center;
  border-radius: var(--popup-border-radius);
  z-index: 1000;
  color: var(--shadow-text-color);
  min-width: var(--popup-width);
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal > div {
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
}

@media screen and (max-width: 600px) {
  .modal {
    min-width: 95%;
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