<script setup>
import { useStore } from "@/store/store.js";
import LayoutVue from "../../components/Layout.vue";
import Button from "../../components/buttons/Button.vue";
import DifficultySlider from "../../components/DifficultySlider.vue";
import ModuloSlider from "../../components/ModuloSlider.vue";
import Modal from "../../components/Modal.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
import DevMode from "../../components/DevMode.vue";
</script>

<template>
  <div>
    <div class="top-menu">
      <div
        class="devmode"
        v-if="devMode && windowWidth < 600"
        @click="showDevMode = !showDevMode"
      >
        <span> DEV </span>
      </div>

      <Button text="randomize" @pressed="randomize" />
      <DifficultySlider v-model="difficulty" />
    </div>

    <p
      v-show="moves > 0"
      class="move-counter top"
      :class="{
        left: windowWidth < 600,
        center: windowWidth >= 600,
      }"
    >
      {{ moves }} move{{ moves > 1 ? "s" : "" }}
    </p>

    <div class="top right">
      <LinkButton text="back" to="/home" />
      <ModuloSlider v-model="internalModulo" />
    </div>

    <main>
      <Transition name="fade" mode="out-in">
        <LayoutVue
          :key="modulo + layout.id"
          v-model="layout"
          :solution="devMode ? solution : null"
          @swap="handleClick"
        />
      </Transition>
    </main>

    <div
      class="open-dev left bottom"
      @click="
        setDevMode(true);
        showDevMode = true;
      "
      v-if="!devMode"
    >
      v
    </div>

    <DevMode
      v-model:show="showDevMode"
      v-model:solution-index="solutionIndex"
      v-model:solve-on-click="solveOnClick"
      :solutions="solutions"
      :determinant="determinant"
    />

    <Modal v-model="showModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? "s" : "" }}!</h1>
      <h3>Score: {{ store.score - latestScore }} + {{ latestScore }}</h3>
      <Button black text="yay!" @pressed="showModal = false" />
    </Modal>
  </div>
</template>

<style scoped>
.top-menu {
  width: 240px;
  margin-left: 20px;
}
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.move-counter {
  font-size: 30px;
}

.open-dev {
  background-color: black;
  color: red;
  border-radius: 5px;
  outline: 2px solid red;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
  padding-top: 3px;
  margin-left: 10px;
  margin-bottom: 10px;
}

.top-menu .devmode span {
  font-family: monospace;
  margin: 10px;
}
.top-menu .devmode:has(span) {
  padding: 5px;
  margin: 0 auto;
  color: var(--devmode-color);
  background-color: #000;
  font-size: var(--font-size-sm);
  width: max-content;
}
.cursor {
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .top-menu {
    position: absolute;
    bottom: 0;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    margin-bottom: 10px;
  }
  .move-counter {
    margin-left: 20px;
  }
}
</style>
<script>
import { solve, devMode, setDevMode } from "../../assets/js/solve/devmode";
import { modulo, setModulo, tilesToFlip } from "../../assets/js/LayoutShared.js";
import { Layout } from "../../assets/js/Layout.js";
import { watch } from "vue";
import { Task } from "../../assets/js/Task";
import { useWindow } from "@/assets/js/window.js";

export default {
  data() {
    const store = useStore();
    const layout = store.currentLayout;

    const { width: windowWidth } = useWindow();

    return {
      windowWidth,
      store,
      layout,
      difficulty: store.difficulty,
      latestDifficulty: store.difficulty,
      latestScore: 0,
      internalModulo: modulo.value,
      showModal: false,
      showDevMode: devMode.value,
      solutions: [],
      solutionIndex: 0,
      determinant: 0,
      moves: 0,
      solveOnClick: false,
    };
  },
  watch: {
    difficulty() {
      this.store.difficulty = this.difficulty;
      this.randomize();
    },
    internalModulo(newVal) {
      setModulo(newVal);
      this.randomize();
    },
    showModal() {
      if (!this.showModal) {
        if (this.store.isRandomFreeplay) {
          this.store.setLayout(Layout.getRandomLayout());
          this.layout = this.store.currentLayout;
        }
        this.randomize();
      }
    },
  },
  computed: {
    solution() {
      if (this.solutions.length === 0) return null;
      return this.solutions[this.solutionIndex].matrix;
    },
  },
  methods: {
    handleClick(index, row, tile) {
      this.moves++;

      if (devMode.value) {
        if (this.solveOnClick) {
          this.updateSolutions();
        } else {
          for (const solution of this.solutions) {
            solution.matrix[row][tile] =
              (((solution.matrix[row][tile] - 1) % modulo.value) +
                modulo.value) %
              modulo.value;
          }
        }
      }

      if (this.layout.isSolved(modulo.value)) {
        this.store.stats.layoutsSolved++;
        this.showModal = true;
        this.latestScore = this.layout.computeScore(this.latestDifficulty);
        this.store.score += this.latestScore;
        Task.advanceTasks(
          this.layout.id,
          Task.TASK_TYPES.FREEPLAY,
          this.store.difficulty
        );
      }
    },
    randomize() {
      this.moves = 0;
      this.latestDifficulty = this.difficulty + Math.round(Math.random() * (modulo.value - 1));
      this.layout = this.layout.generatePosition(
        this.latestDifficulty,
        modulo.value,
        tilesToFlip.value
      );
      this.$nextTick(() => {
        try {
          if (devMode.value) {
            this.updateSolutions();
          }
        } catch (e) {
          console.error(e);
          this.solution = this.layout.matrix.map((row) => row.map((tile) => 0));
        }
      });
    },
    updateSolutions() {
      const { solutions, shortest, determinant } = solve(this.layout.matrix);
      this.solutionIndex = shortest;
      this.solutions = solutions;
      this.determinant = determinant;
    },
  },
  mounted() {
    this.randomize();
    // console.log(this.layout.computeMaxDifficulty());

    watch(devMode, (newVal) => {
      if (newVal) {
        this.updateSolutions();
      }
    });
  },
};
</script>