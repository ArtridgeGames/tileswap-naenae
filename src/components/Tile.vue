<script setup>
import { useStore } from '@/store/store.js'
</script>

<template>
    <div class="tile" :class="{'flipped-tile': color === 'black'}">
      <div class="inner-tile">
        <div class="front"></div>
        <div class="back"></div>
      </div>
    </div>
</template>

<script>
import { watch } from 'vue';
export default {
  props: ['color', 'visible', 'small'],
  data() {
    return {
      tileSize: '30px'
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
  transition: all 0.5s ease;
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
    background-color: white
}
.back{
    background-color: black
}

@media screen and (max-width: 600px) {
  .tile {
    margin: 3px;
  }
}
</style>