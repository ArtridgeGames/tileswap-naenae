<script setup>
import Progress from "./Progress.vue";
</script>

<template>
  <main>
    <div class="progress">
      <Progress
        :value="score"
        :max="1000"
        barColor="#e58f65"
        :text="Math.floor(score) + ' / ' + 1000"
      />
    </div>
    <div class="position">
      <!-- <div class="left-click" @[EVENTS.TOUCHSTART]="$emit('swipe', { delta: -1 })"></div>
      <div class="right-click" @[EVENTS.TOUCHSTART]="$emit('swipe', { delta: 1 })"></div> -->
      <div
        v-for="(view, i) in views"
        class="dot"
        :class="{ selected: i === index }"
        :key="i"
        @[EVENTS.TOUCHSTART]="$emit('swipe', { page: i })"
      ></div>
    </div>
  </main>
</template>

<style scoped>
main {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 125px;
  text-align: center;
  background: var(--root-bg-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding-top: 15px;
}

main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 93%;
  height: 10px;
  background: var(--bg-darker-color);
  border-radius: 10px;
  z-index: 0;
  transform: translateX(-50%);
}


main > div.progress {
  width: 70%;
  margin-top: 9px;
}

.position {
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  padding: 10px;
  border-radius: 15px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
}
.position > .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.position > .dot.selected {
  background-color: rgba(255, 255, 255, 1);
}
.position > .left-click, .position > .right-click {
  position: absolute;
  height: 100%;
  width: 50%;
}
.position > .left-click {
  left: 0;
}
.position > .right-click {
  right: 0;
}
</style>

<script>
import { useStore } from "../store/store.js";
import { EVENTS } from '../assets/js/events.js';

export default {
  name: "BottomBar",
  props: {
    views: {
      type: Array,
      required: true,
    },
  },
  emits: ['swipe'],
  computed: {
    index() {
      const store = useStore();
      return store.menuViewIndex;
    },
    score() {
      const store = useStore();
      return store.score;
    },
  },
  components: { Progress },
};
</script>