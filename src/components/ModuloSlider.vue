<script setup>
</script>

<template>
  <div class="modulo">
    <!-- <h2>states - {{ moduloText }}</h2> -->
    <!-- <input type="range" min="2" :value="modelValue" @input="emit" max="5" /> -->
    <button class="pressable" @click="openPrompt">{{ modelValue }}</button>
    <Transition name="fade">
      <div v-if="opened" class="options">
        <button
          v-for="i in 4"
          class="pressable"
          :class="{ selected: modelValue === i + 1 }"
          @click="select(i + 1)"
          :key="i">
          {{ i + 1 }}
        </button>
      </div>
    </Transition>

    <Transition name="fade">
      <div class="balls" v-if="!opened">
        <div :style="{
          backgroundColor: gradient[i - 1]
        }" v-for="i in modelValue" :key="i"></div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
.modulo {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
button {
  border: none;
  background: white;
  color: black;
  border-radius: var(--button-border-radius);
  padding: 10px;
  width: 50px;
  height: 50px;
  font-size: var(--font-size-xs);
}
.options {
  position: absolute;
  top: 0;
  background: white;
  border-radius: var(--button-border-radius);
  width: 50px;
}
.selected {
  color: #bbb;
}
.balls {
  width: 30px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.balls > div {
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
}
</style>

<script>
import { gradient } from '../assets/js/LayoutShared.js';
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      opened: false,
      gradient
    }
  },
  methods: {
    emit(event) {
      this.$emit("update:modelValue", parseInt(event.target.value));
    },
    openPrompt() {
      this.opened = true;
    },
    select(value) {
      this.$emit("update:modelValue", value);
      this.opened = false;
    },
  },
  mounted() {
    document.addEventListener("click", event => {
      if (!this.$el.contains(event.target)) {
        this.opened = false;
      }
    });
  }
};
</script>