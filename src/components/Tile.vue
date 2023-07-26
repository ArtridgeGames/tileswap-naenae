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
  export default {
    props: ['color', 'visibility'],
    data() {
      return {
        tileSize: ''
      }   
    },
    mounted() {
      const store = useStore();
      
      const resize = () => {
        this.tileSize = 1/Math.max(store.currentLayout.width,6)*450*Math.max(window.innerWidth/1500,1) + 'px';
      };
      
      resize();
      window.addEventListener('resize', resize);
    }
  }
</script>

<style scoped>
.tile{
  width: v-bind(tileSize);
  height: v-bind(tileSize);
  border-radius: 7px;
  margin: 7px;
  display: inline-block;
  visibility: v-bind(visibility);
  cursor: pointer;
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
</style>