<script setup>
import MultiRangeSlider from "multi-range-slider-vue";
</script>

<template>
  <div class="diff">
    <h2>difficulty - {{ difficultyText }} ({{ minValue }} - {{ maxValue }})</h2>
    <!-- <input type="range"
            min="2"
            :value="modelValue"
            @input="$emit('update:modelValue', parseInt($event.target.value))"
            :max="max"> -->

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
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'max'],
  emits: ['update:modelValue'],
  data() {
    return {
      minValue: 3,
      maxValue: 5,
      difficulties: ['very easy', 'easy', 'normal', 'hard', 'very hard'],
    }
  },
  computed: {
    difficultyText() {
      const average = (this.minValue + this.maxValue) / 2;
      const diff = this.difficulties[Math.floor((average - 1) / (this.max / this.difficulties.length))];
      return diff;
    },
  },
  watch: {
    minValue() {
      this.$emit('update:modelValue', [this.minValue, this.maxValue]);
    },
    maxValue() {
      this.$emit('update:modelValue', [this.minValue, this.maxValue]);
    },
    max() {
      if (this.maxValue > this.max) {
        this.maxValue = this.max;
        if (this.minValue > this.maxValue) this.minValue = this.maxValue - 1;
      }
    }
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
      this.$emit('update:modelValue', [value.minValue, value.maxValue]);
    }
  }
}

</script>

<style>
.diff{
  margin:5px;
}
h2{
  margin: 10px 0 20px;
  font-size: var(--font-size-sm);
  text-align: center;
  white-space: nowrap;
}
.custom-slider {
  border: none;
  box-shadow: none;
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