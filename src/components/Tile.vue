<script setup>
import TileShape from "./TileShape.vue";
</script>

<template>
  <div style="display: inline-block; position: relative">
    <Transition :name="animation.name" :mode="animation.mode">
      <div :key="tile" style="position: absolute">
        <TileShape :color="gradient[tile]" :shape="tileSVG"></TileShape>
      </div>
    </Transition>

    <div class="flip-enter-active"></div>
    <div class="flip-leave-active"></div>
  </div>
</template>

<!-- <div class="inner-tile">
  <div
    class="front"
    :style="{
      background: 'rgba(0,0,0,0)',
    }"
  >
    <TileShape :color="frontColor" :shape="tileSVG"></TileShape>
  </div>

  <div
    class="back"
    :style="{
      background: 'rgba(0,0,0,0)',
    }"
  >
    <TileShape :color="backColor" :shape="tileSVG"></TileShape>
  </div>
</div> -->

<script>
import { watch } from "vue";
import {
  modulo,
  gradient,
  outlineGradient,
  highlightGradient,
} from "../assets/js/LayoutShared.js";
import { SETTINGS_DATA } from "../assets/js/Settings";
export default {
  props: ["tile", "visible", "small", "position", "layout"],
  data() {
    return {
      tileSize: "30px",
      borderRadius: this.small === '' ? "7px" : "15px",
      flipped: false,
      frontColor: gradient.value[this.tile],
      backColor: gradient.value[this.mod(this.tile + 1)],
      frontOutline: outlineGradient.value[this.tile],
      backOutline: outlineGradient.value[this.mod(this.tile + 1)],
      frontHighlight: highlightGradient.value[this.tile],
      backHighlight: highlightGradient.value[this.mod(this.tile + 1)],
      tileSVG: SETTINGS_DATA.tilesSVG.value,
      animation: SETTINGS_DATA.tileAnimation.value,
      gradient,
      outlineGradient,
      highlightGradient,
    };
  },
  watch: {
    tile(newVal) {
      this.flipped = !this.flipped;
      if (this.flipped) {
        this.backColor = this.gradient[newVal];
        this.backOutline = this.outlineGradient[newVal];
        this.backHighlight = this.highlightGradient[newVal];
      } else {
        this.frontColor = this.gradient[newVal];
        this.frontOutline = this.outlineGradient[newVal];
        this.frontHighlight = this.highlightGradient[newVal];
      }
    },
  },
  methods: {
    mod(n) {
      return ((n % modulo.value) + modulo.value) % modulo.value;
    },
  },
  mounted() {
    const resize = () => {
      const { width, height } = this.layout.actualSize();

      const size =
        (1 /
          (Math.sqrt(width ** 2 + height ** 2) *
            (window.innerWidth > 600 ? 0.5 : 0.8))) *
        250 *
        (this.$props.small !== undefined ? 0.5 : 1);
      this.tileSize = size + "px";
    };

    watch(() => this.layout, resize, { deep: true, immediate: false });
    resize();
    window.addEventListener("resize", resize);

    this.$nextTick(resize);
    window.addEventListener("orientationchange", resize);
  },
};
</script>

  <style scoped>
.tile {
  width: v-bind(tileSize);
  height: v-bind(tileSize);
  opacity: v-bind("visible ? 1 : 0");
  border-radius: v-bind(borderRadius);
  margin: 7px;
  display: inline-block;
  cursor: v-bind('visible ? "pointer" : "default"');
  /* overflow: hidden; */
  outline: solid 5px v-bind("frontOutline");
}

.tile > .inner-tile {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--tile-swap-time) ease;
  border-radius: v-bind(borderRadius);
  transform-style: preserve-3d;
}

.flipped-tile > .inner-tile {
  transform: rotateX(-180deg);
}

.tile .front,
.tile .back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: v-bind(borderRadius);
}
.tile .back {
  transform: rotateX(180deg) translateY(100%);
  position: absolute;
  width: 100%;
}

.flipped-tile {
  z-index: 3;
  padding: 0;
}
/*
.front {
  background-color: v-bind("frontColor");
}
.back {
  background-color: v-bind("backColor");
}*/

@media screen and (max-width: 600px) {
  .tile {
    margin: 3px;
  }
}
</style>