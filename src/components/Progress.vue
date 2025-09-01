<template>
  <div class="container">
    <div class="progress"></div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 40px;
  background: var(--hl-color);
  /* border: 1px solid var(--shadow-color); */
  border-radius: 20px;
  overflow: hidden;
}
.progress {
  width: v-bind(progress);
  height: 100%;
  background: v-bind(barColorOrDefault);
  transition: width 0.5s ease;
}
.container > .text {
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  font-size: var(--font-size-xs);
  color: var(--shadow-text-color);
}
</style>

<script>
export default {
  props: ['value', 'max', 'text', 'barColor', 'backgroundColor', 'startValue', 'duration'],
  data() {
    return {
      animatedValue: this.startValue ?? this.value
    }
  },
  watch: {
    value(newValue) {
      if (this.startValue !== undefined) {
        this.animateToValue(newValue);
      } else {
        this.animatedValue = newValue;
      }
    }
  },
  computed: {
    progress() {
      if (this.max == 0) return "100%";
      return (this.animatedValue / this.max * 100) + "%";
    },
    barColorOrDefault() {
      return this.barColor ?? 'var(--root-bg-color)';
    }
  },
  methods: {
    animateToValue(targetValue) {
      const startValue = this.animatedValue;
      const duration = this.duration ?? 500;
      const startTime = performance.now();
      
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        
        this.animatedValue = startValue + (targetValue - startValue) * easedProgress;
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          this.animatedValue = targetValue;
        }
      };
      
      requestAnimationFrame(animate);
    }
  },
  mounted() {
    if (this.startValue !== undefined && this.startValue !== this.value) {
      this.animateToValue(this.value);
    }
  }
}
</script>