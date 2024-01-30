<script setup>
import { useStore } from "@/store/store.js";
import lockURL from '/images/svg/lock.svg';
</script>

<template>
  <div
    class="container"
    @click="openGame"
    :class="{
      'is-task-target': isTaskTarget,
      'locked': !unlocked,
    }" 
  >
  <div v-if="unlocked">
    <div
      v-for="tile in includedTiles"
      :key="'t' + tile"
      class="tile"
      :style="{
        backgroundColor: (
          puzzle.solved ? puzzle.targetIsWhite(tile) : puzzle.baseIsWhite(tile)
        )
          ? 'var(--puzzle-white)'
          : 'var(--shadow-color)',
        transform: `translate(${
          tileSizePreview * ((tile % layout.width) - layout.width / 2) + 50
        }px, ${
          tileSizePreview *
            (Math.floor(tile / layout.width) - layout.height / 2) +
          50
        }px)`,
        width: `${tileSizePreview - 1}px`,
        height: `${tileSizePreview - 1}px`,
      }"
    ></div>
  </div>
  <div v-else>
    <img :src="lockURL">
  </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  display: inline-block;
  background-color: v-bind(buttonColor);
  border-radius: var(--sb-border-radius);
  width: var(--sb-size);
  height: var(--sb-size);
  margin: 6px;
  cursor: pointer;
}
.tile {
  position: absolute;
  border-radius: 2px;
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
import { setModulo } from "../../assets/js/LayoutShared.js";
import { Task } from "../../assets/js/Task";
export default {
  props: ["puzzle"],
  data() {
    const { width, height } = this.puzzle.target;
    return {
      tileSizePreview: (1 / Math.sqrt(width * height)) * 50,
    };
  },
  computed: {
    layout() {
      return this.puzzle.target;
    },
    includedTiles() {
      return new Array(this.layout.width * this.layout.height)
        .fill(0)
        .map((_, i) => i)
        .filter((i) => !this.layout.exclude.includes(i));
    },
    isTaskTarget() {
      return Task.isTaskTarget(this.puzzle.id, Task.TASK_TYPES.PUZZLE);
    },
    buttonColor() {
      const solutionL = this.puzzle.solution.length;
      const completionMoves = this.puzzle.completionMoves;
      return !this.puzzle.solved
        ? "var(--hl-color)"
        : (completionMoves <= solutionL
        ? "var(--success-color)"
        : completionMoves <= solutionL * 1.2
        ? "var(--silver-color)"
        : "var(--bronze-color)");
    },
    unlocked() {
      const store = useStore()
      return this.puzzle.unlockCategory <= store.unlockedCategoriesPZ;

    }
  },
  methods: {
    openGame() {
      if (!this.unlocked) return;
      const store = useStore();
      store.setPuzzle(this.puzzle);

      setModulo(this.puzzle.modulo);

      this.$router.push("/puzzleGame");
    },
  },
};
</script>