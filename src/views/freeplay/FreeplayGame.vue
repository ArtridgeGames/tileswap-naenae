<script setup>
import { useStore } from "../../store/store.js";
import LayoutVue from "../../components/Layout.vue";
import Button from "../../components/buttons/Button.vue";
import DifficultySlider from "../../components/DifficultySlider.vue";
import ModuloSlider from "../../components/ModuloSlider.vue";
import Modal from "../../components/Modal.vue";
import DevMode from "../../components/DevMode.vue";
import Progress from "../../components/Progress.vue";
import BackButton from "../../components/buttons/BackButton.vue";
import WinModal from "../../components/WinModal.vue";
import CategoryUnlockModal from "../../components/CategoryUnlockModal.vue";

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
      
      <DifficultySlider v-model="difficultyRange" :max="max" @randomize="randomize" />
      
      <div class="buttons">
        <Button text="reset" @pressed="reset" />
        <Button text="hint" @pressed="hint" />
      </div>
    </div>

    <h2
      v-show="moves > 0"
      class="move-counter top center"
    >
      {{ moves }} move{{ moves > 1 ? "s" : "" }}
    </h2>

    <BackButton to="/home" class="top left" />
    <ModuloSlider class="top right" v-if="store.score >= store.categories[10]" v-model="internalModulo" />

    <main>
      <Transition name="fade" mode="out-in">
        <LayoutVue
          v-model="layout"
          @swap="handleClick"
          :key="modulo + layout.id"
          :solution="devMode ? solution : null"
          :highlighted-tiles="highlightedTiles"
        />
      </Transition>
    </main>

    <div
      class="open-dev left bottom"
      @click="
        setDevMode(true);
        showDevMode = true;
      "
      v-if="!devMode && windowWidth > 600"
    >
      v
    </div>

    <DevMode
      v-model:show="showDevMode"
      v-model:solution-index="solutionIndex"
      v-model:solve-on-click="solveOnClick"
      :solutions="solutions"
      :determinant="determinant"
      :zerows="zerows"
    />

    <WinModal v-model="showModal"
      :shouldShowCategoryModal="shouldShowCategoryModal"
      @update:shouldShowCategoryModal="shouldShowCategoryModal = $event"
      @showCategoryModal="showCategoryModal = $event"
    >
      <div v-if="modalPage === 0">
        <h1 style="margin: 0">you won in {{ moves }} move{{ moves > 1 ? "s" : "" }}!</h1>
        <div style="display: flex; align-items: center; gap: 8px; justify-content: center; font-size: var(--font-size-xs);">
          <p style="font-size: inherit;">+ {{ latestScore }} score</p>
          <p style="font-size: inherit;" v-if="hintCount > 0">
            ({{ layout.computeScore(latestDifficulty, 0)}} / {{ 2 ** hintCount }} | {{hintCount}} {{ hintCount > 1 ? "hints" : "hint" }})
          </p>
        </div>
        <Progress
          :value="store.score"
          :max="store.nextScore"
          :startValue="store.score - latestScore"
          barColor="#e58f65"
          style="border: 5px solid black; margin-bottom: 15px"
          :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
        />
        <Button v-if="!showOtherGameModesPopup"
          black
          text="yay!"
          @pressed="showModal = false; modalPage = 0; showCategoryModal = shouldShowCategoryModal; shouldShowCategoryModal = false;
          "
        />
        <Button v-else text="yay!" black @pressed="modalPage = 1;" />
      </div>
      <div v-else-if="modalPage === 1">
        <h1>So far you have only been playing in Freeplay, where you are free to choose your difficulty and have no constraints.</h1>
        <h1>Swipe to change menus and go to the Puzzles and Challenges gamemodes.</h1>
        <Button text="yay!" black @pressed="unlockOtherGameModes" />
      </div>
    </WinModal>

    <CategoryUnlockModal v-model="showCategoryModal">
      <Button black text="yay!" @pressed="showCategoryModal = false; showModal = false" />
    </CategoryUnlockModal>
  </div>
</template>

<style scoped>
.top-menu {
  width: 240px;
  margin-left: 20px;
}
.top-menu .buttons {
  display: flex;
  width: 88%;
}
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.move-counter {
  font-size: var(font-size-sm);
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
    width: 100%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script>
import { solve, devMode, setDevMode } from "../../assets/js/solve/devmode";
import { modulo, setModulo, tilesToFlip } from "../../assets/js/LayoutShared.js";
import { Layout } from "../../assets/js/Layout.js";
import { watch } from "vue";
import { Task } from "../../assets/js/Task";
import { useWindow } from "../../assets/js/window.js";

export default {
  data() {
    const store = useStore();
    const layout = store.currentLayout;

    const { width: windowWidth } = useWindow();

    return {
      modalPage: 0,
      windowWidth,
      store,
      layout,
      savedMatrix: [],
      difficultyRange: [3, 5],
      difficulty: store.difficulty,
      latestDifficulty: store.difficulty,
      latestScore: 0,
      internalModulo: modulo.value,
      showModal: false,
      showDevMode: devMode.value,
      solutions: [],
      shortest: 0,
      highlightedTiles: [],
      solutionIndex: 0,
      determinant: 0,
      zerows: 0,
      moves: 0,
      solveOnClick: false,
      hintCount: 0,
      showCategoryModal: false,
      shouldShowCategoryModal: false
    };
  },
  watch: {
    difficulty() {
      this.store.difficulty = this.difficulty;
      this.randomize();
    },
    internalModulo(newVal) {
      setModulo(newVal);
      if (this.difficultyRange[1] > this.max) {
        this.difficultyRange[1] = this.max;
      }
      if (this.difficultyRange[0] > this.difficultyRange[1]) {
        this.difficultyRange[0] = this.difficultyRange[1] - 1;
      }
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
    showOtherGameModesPopup() {
      const store = useStore();
      return store.score >= 50 && !store.hasHadOtherGameModesPopup;
    },
    max() {
      return (modulo.value - 1) * (this.layout.nTiles() - this.zerows);
    },
  },
  methods: {
    handleClick(index, row, tile) {
      this.moves++;
      this.highlightedTiles = [];

      if (devMode.value && this.solveOnClick) {
        this.updateSolutions();
      } else {
        for (const solution of this.solutions) {
          solution.matrix[row][tile] =
            (((solution.matrix[row][tile] - 1) % modulo.value) +
              modulo.value) %
            modulo.value;
        }
      }

      if (this.layout.isSolved(modulo.value)) {
        this.store.stats.layoutsSolved++;
        this.showModal = true;
        this.latestScore = this.layout.computeScore(this.latestDifficulty, this.hintCount);
        this.store.score += this.latestScore;

        if (this.store.recentCategoryModalPopup < this.store.currentCategory) {
          this.store.recentCategoryModalPopup = this.store.currentCategory;
          this.shouldShowCategoryModal = true;
        }

        Task.advanceTasks(
          this.layout.id,
          Task.TASK_TYPES.FREEPLAY,
          this.store.difficulty
        );
      }
    },
    randomize() {
      this.moves = 0;
      this.hintCount = 0;
      const min = this.difficultyRange[0];
      const max = this.difficultyRange[1];
      this.latestDifficulty = Math.floor(Math.random() * (max - min + 1) + min) // + Math.round(Math.random() * (modulo.value - 1));
      this.layout = this.layout.generatePosition(
        this.latestDifficulty,
        modulo.value,
        tilesToFlip.value
      );
      this.savedMatrix = this.layout.matrix.map((row) => row.map((tile) => tile));
      this.$nextTick(() => {
        try {
          this.updateSolutions();
        } catch (e) {
          console.error(e);
          this.solution = this.layout.matrix.map((row) => row.map((tile) => 0));
        }
      });
    },
    reset() {
      this.moves = 0;
      this.layout.matrix = this.savedMatrix.map((row) => row.map((tile) => tile));
      if (devMode.value) {
        this.updateSolutions();
      }
    },
    updateSolutions() {
      const { solutions, shortest, determinant, zerows } = solve(this.layout.matrix);
      this.shortest = shortest;
      this.solutionIndex = shortest;
      this.solutions = solutions;
      this.determinant = determinant;
      this.zerows = zerows;
    },
    unlockOtherGameModes() {
      this.showModal = false;
      this.modalPage = 0;
      this.store.hasHadOtherGameModesPopup = true;
      this.$router.push("/home");
    },
    hint() {
      if (this.solutions.length === 0) return;
      const solution = this.solutions[this.shortest];
      
      if (solution.moveCount.length === 0) return;
      
      const width = solution.matrix[0].length;

      const index = solution.matrix.flat().findIndex(e => e >= 1);
      if (index < 0) return;

      const coords = [
        index % width, // x
        Math.floor(index / width)
      ];

      this.highlightedTiles.push(coords);

      this.hintCount++;
    }
  },
  mounted() {
    this.randomize();
    watch(devMode, (newVal) => {
      if (newVal) {
        this.updateSolutions();
      }
    });
    this.updateSolutions();
  },
};
</script>