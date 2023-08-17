<script setup>
import { useStore } from '@/store/store.js'
</script>

<template>
    <div class="tile" :class="{ 'flipped-tile': flipped }">
      <div class="inner-tile">
        <div class="front"></div>
        <div class="back"></div>
      </div>
    </div>
</template>

<script>
import { watch } from 'vue';
import { modulo, gradient } from '../assets/js/Layout';
export default {
  props: ['tile', 'visible', 'small'],
  data() {
    return {
      tileSize: '30px',
      flipped: false,
      previousFront: 0,
      previousBack: 0,
      gradient
    }
  },
  watch: {
    tile() {
      this.flipped = !this.flipped;
    },
  },
  computed: {
    frontColor() {
      this.previousFront = this.gradient.indexOf(this.frontColor);
      if (this.flipped)
        return this.gradient[this.previousFront];
      return this.gradient[this.tile];
    },
    backColor() {
      this.previousBack = this.gradient.indexOf(this.backColor);
      if (!this.flipped)
        return this.gradient[this.previousBack];
      return this.gradient[this.tile];

    }
  },
  methods: {
    modulo(n) {
      return ((n % modulo.value) + modulo.value) % modulo.value;
    }
  },
  mounted() {
    const store = useStore();

    const resize = () => {
      const { width, height } = store.currentLayout;
      this.tileSize = ( 
        (1 / (Math.sqrt(width**2 + height**2) * (window.innerWidth > 600 ? 0.5 : 0.8))) *
        300 * (this.$props.small !== undefined ? 0.5 : 1)
      ) + 'px';
    };

    watch(() => store.currentLayout, resize, { deep: true, immediate: false });
    resize();
    window.addEventListener('resize', resize);
  }
}
</script>

<style scoped>
.tile{
  width: v-bind(tileSize);
  height: v-bind(tileSize);
  opacity: v-bind('visible ? 1 : 0');
  border-radius: 7px;
  margin: 7px;
  display: inline-block;
  cursor: v-bind('visible ? "pointer" : "default"');
}

.tile > .inner-tile {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 7px;
  transform-style: preserve-3d;
}

.flipped-tile > .inner-tile {
  transform: rotateX(-180deg);
}

.tile .front, .tile .back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 7px;
}
.tile .back {
  transform:rotateX(180deg) translateY(100%);
  position: absolute;
  width: 100%;
}

.flipped-tile {
  z-index: 3;
  padding: 0;
}

.front{
    background-color: v-bind('frontColor');
}
.back{
    background-color: v-bind('backColor');
}

@media screen and (max-width: 600px) {
  .tile {
    margin: 3px;
  }
}
</style>