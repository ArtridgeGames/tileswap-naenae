<script setup>
import MultiRangeSlider from "multi-range-slider-vue";
import dice from "/images/svg/dice.svg";
</script>

<template>
  <div class="diff">
    <h2 class="difficulty-text">difficulty - {{ difficultyText }} ({{ minValue }} - {{ maxValue }})</h2>

    <div class="slider">
      <MultiRangeSlider
        baseClassName="multi-range-slider custom-slider"
        :min="2"
        :max="max"
        :step="1"
        :ruler="false"
        :label="false"
        :minValue="minValue"
        :maxValue="maxValue"
        :minCaption="''"
        :maxCaption="''"
        :labels="[]"
        @input="updateValue"
      />
      <button class="pressable randomize" @click="pressed">
        <img :src="dice" />
      </button>
    </div>

  </div>
</template>

<style scoped>
.randomize {
  background: none;
  width: fit-content;
  height: fit-content;
  border: none;
  width: 55px;
  height: 55px;
  flex: 1;
}
.randomize img {
  width: 100%;
  height: 100%;
}
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.diff {
  width: 88%;
}
</style>

<script>
export default {
  props: ["modelValue", "max"],
  emits: ["update:modelValue", "randomize"],
  data() {
    return {
      minValue: 3,
      maxValue: 5,
      difficulties: ["very easy", "easy", "normal", "hard", "very hard"],
    };
  },
  computed: {
    difficultyText() {
      const average = (this.minValue + this.maxValue) / 2;
      const diff =
        this.difficulties[
          Math.floor((average - 1) / (this.max / this.difficulties.length))
        ];
      return diff;
    },
  },
  watch: {
    minValue() {
      this.$emit("update:modelValue", [this.minValue, this.maxValue]);
    },
    maxValue() {
      this.$emit("update:modelValue", [this.minValue, this.maxValue]);
    },
    max() {
      if (this.maxValue > this.max) {
        this.maxValue = this.max;
        if (this.minValue > this.maxValue) this.minValue = this.maxValue - 1;
      }
    },
  },
  mounted() {
    if (this.maxValue > this.max) {
      this.maxValue = this.max;
      if (this.minValue > this.maxValue) this.minValue = this.maxValue - 1;
    }
  },
  methods: {
    updateValue(value) {
      this.minValue = value.minValue;
      this.maxValue = value.maxValue;
      this.$emit("update:modelValue", [value.minValue, value.maxValue]);
    },
    pressed() {
      this.$emit("randomize");
    },
  },
};
</script>

<style>
.diff {
  margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.difficulty-text {
  margin: 10px 0;
  font-size: var(--font-size-sm);
  text-align: center;
  white-space: nowrap;
}
.custom-slider {
  border: none;
  box-shadow: none;
  flex: 4;
}
.multi-range-slider .bar {
  position: relative;
}
.custom-slider .bar-left {
  box-shadow: none;
}
.custom-slider .bar-right {
  box-shadow: none;
}
.multi-range-slider .bar-inner {
  background-color: black;
  box-shadow: none;
  border: none;
  height: 20px;
}
.multi-range-slider .thumb::before {
  box-shadow: none;
  background-color: black;
  height: 33px;
  width: 33px;
  border: none;
  pointer-events: all;
}
.multi-range-slider input:active + .thumb::before {
  transform: scale(1.1);
}
.multi-range-slider .caption {
  display: none !important;
}
.multi-range-slider .thumb-right::before {
  margin: -7px -22px;
}
.multi-range-slider .thumb-left::before {
  margin: -7px -14px;
}
</style>