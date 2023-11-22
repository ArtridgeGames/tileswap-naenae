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
        :text="score + ' / ' + 1000"
      />
    </div>
    <div class="position">
      <div
        v-for="(view, i) in views"
        :class="{ selected: i === index }"
        :key="i"
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
  height: 100px;
  text-align: center;
  background: var(--root-bg-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  background-color: rgba(0, 0, 0, 0.5);
}
.position > div {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.position > div.selected {
  background-color: rgba(255, 255, 255, 1);
}
</style>

<script>
import { useStore } from "../store/store.js";

export default {
  name: "BottomBar",
  props: {
    views: {
      type: Array,
      required: true,
    },
  },
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