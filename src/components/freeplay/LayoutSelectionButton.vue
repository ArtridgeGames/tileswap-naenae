<script setup>
import lockUrl from '/images/svg/lock.svg'
</script>

<template>
  <div 
    @click="openGame"
    :data-level="completion"
    class="container"
    :class="{
      'is-task-target': isTaskTarget,
      'locked': !unlocked,
    }"
    :title="`${layout.width}x${layout.height} - ${layout.exclude.length} (id: ${layout.id})`">
      <div v-if="unlocked">
        <div
          v-for="tile in includedTiles"
          :key="'t' + tile"
          class="tile"
          :style="{
            transform: `translate(${
              tileSizePreview * ((tile % layout.width) - layout.width / 2) + 50
            }px, ${tileSizePreview * (Math.floor(tile / layout.width) - layout.height / 2) + 50}px)`,
            width: `${tileSizePreview - 1}px`,
            height: `${tileSizePreview - 1}px`,
          }"
        ></div>
      </div>
      <div v-else>
        <img :src="lockUrl" />
      </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  background-color:var(--hl-color);
  border-radius: var(--sb-border-radius);
  width: var(--sb-size);
  height: var(--sb-size);
  margin: 6px;
  cursor: pointer;
}
.container::before {
  content: attr(data-level);
  position: absolute;
  background-color: var(--shadow-color);
  padding: 5px;
  border-radius: calc(var(--sb-border-radius)/2);
  width: 10px;
  height: 10px;
  top: -3px;
  left: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container:active {
  transform: scale(0.95);
}
.container[data-level="30"]::before {
  background-color: var(--bg-color);
}
.tile {
  background-color: var(--shadow-color);
  position: absolute;
  border-radius: calc(var(--tile-border-radius)/10);
  display: inline-block;
}
.layout-preview {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.container.locked {
  background: #ddd;
}
img {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 20%;
  left: 20%;
}
</style>

<script>
import { Task } from '../../assets/js/Task.js';
import { useStore } from '@/store/store.js';

export default {
  props: ["layout", "completion"],
  data() {  
    return {
      tileSizePreview:
        (1 / Math.sqrt(this.layout.height * this.layout.width)) *
        50,
    };
  },
  computed: {
    includedTiles() {
      return new Array(this.layout.width * this.layout.height)
        .fill(0)
        .map((_, i) => i)
        .filter(i => !this.layout.exclude.includes(i))
    },
    isTaskTarget() {
      return Task.isTaskTarget(this.layout.id, Task.TASK_TYPES.FREEPLAY);
    },
    unlocked() {
      const store = useStore();
      return this.layout.unlockCategory <= store.unlockedCategoriesFP || this.layout.unlockCategory >= store.categories.length;
    }
  },
  methods: {
    openGame() {
      if (!this.unlocked) return;
      const store = useStore();
      store.isRandomFreeplay = false;
      store.setLayout(this.layout);
      this.$router.push("/freeplayGame");
    }
  }
};
</script>