<script setup>
import { useStore } from "../../store/store";
import Button from "../../components/buttons/Button.vue";
import Layout from "../../components/Layout.vue";
import Modal from "../../components/Modal.vue";
import { useWindow } from "../../assets/js/window.js";
import tutorialUrl from "/images/svg/tutorial.svg";
import BackButton from "../../components/buttons/BackButton.vue";
import Progress from "../../components/Progress.vue";
import ModuloViewer from "../../components/ModuloViewer.vue";
</script>

<template>
  <div>

    <BackButton class="top left" to="/home" />

    <div class="top center medals">
      <h2 v-if="completionMoves !== -1">
        your best:
        <span class="medal" :style="{
          backgroundColor: color(completionMoves)
        }">
          {{ completionMoves }}
        </span>
      </h2>
      <h2 v-if="nextMedal !== -1">
        next medal: 
        <span class="medal" :style="{
          backgroundColor: color(nextMedal)
        }">
          {{ nextMedal }}
        </span>
      </h2>
    </div>

    <ModuloViewer class="top right" :modulo="puzzle.modulo" v-if="store.score >= store.categories[10] || modulo > 2" />
    
    <div
      class="info center"
      :class="{
        top: windowWidth > 600,
        bottom: windowWidth <= 600,
      }"
    >
      <h1 v-show="moves > 0">{{ moves }} move{{ moves > 1 ? "s" : "" }}</h1>
      <div>
        <Button text="retry" @pressed="reset" />
        <button class="explanation pressable" @click="showExplanationModal = true">
          <img :src="tutorialUrl" />
        </button>
      </div>
    </div>

    <main class="puzzle-container">
      <Layout
        v-model="layout"
        :target="puzzle.target.matrix"
        @swap="handleClick"
      />
    </main>

    <Modal v-model="showWinModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? "s" : "" }}!</h1>
      <h1 v-if="nextMedal !== -1">next medal: {{ nextMedal }}</h1>
      <p style="font-size: var(--font-size-xs); margin: 14px 0">+ {{ puzzle.latestAddedScore }} score</p>
      <Progress
        :value="store.score"
        :max="store.nextScore"
        barColor="#e58f65"
        style="border: 5px solid black;"
        :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
      />
      <Button black text="yay!" @pressed="showWinModal = false; 
        if (shouldShowCategoryModal) { showCategoryModal = true; shouldShowCategoryModal = false; }
        else { quit(); }" />
      <Button v-if="!hasGold & !shouldShowCategoryModal" black text="retry" @pressed="restart" />
    </Modal>

    <Modal v-model="showExplanationModal">
      <div class="explanation">
        <Layout small v-model="puzzle.base" disabled />
        <p v-if="windowWidth > windowHeight">→</p>
        <p v-else>↓</p>
        <Layout small v-model="puzzle.target" disabled />
      </div>

      <Button black text="close" @pressed="showExplanationModal = false" />
    </Modal>

    <Modal v-model="showIntroductionModal">
      <h1>In puzzles, get from the initial state to the final state in as few moves as possible.</h1>
      <h1>Finishing with the best solution gives you a         medal. Finishing close to the best solution gives you a         medal. Simply finishing gives you a        medal</h1>
      <h1>Better medal = more score</h1>
      <Button black text="close" @pressed="showIntroductionModal = false" />
    </Modal>

    <Modal v-model="showCategoryModal">
      <h1>NEW CATEGORY JUST DROPPED</h1>
      <Button black text="close" @pressed="showCategoryModal = false; quit()" />
    </Modal>
  </div>
</template>

<style scoped>
main.puzzle-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  margin-top: 30px;
}
.target {
  margin-left: 50px;
}
.info {
  text-align: center;
  width: max-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}
.info > div {
  display: flex;
}
.info .explanation {
  margin: 10px;
  background: white;
  border-radius: var(--button-border-radius);
  border: none;
  width: 55px;
  height: 55px;
}
.info .explanation img {
  width: 30px;
  height: 30px;
}
.info > h1 {
  margin: 0;
}
.info > h1:last-of-type {
  margin-bottom: 15px;
}

.medals {
  margin-top: 50px;
  text-align: center;
}
.medals > h2 {
  font-size: var(--font-size-xs);
  margin: 5px 0;
}

.medals .medal {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: inline-block;
  align-content: center;
}

.explanation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.explanation > p {
  font-size: 32px;
  margin: 0;
}
.explanation > div {
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background: var(--root-bg-color);
}

@media screen and (max-width: 600px) {
  .target {
    margin-left: 0;
    margin-top: 80px;
  }
  .explanation {
    flex-direction: column;
  }
  main {
    margin-top: 40px;
  }
}
</style>

<script>
import { Task } from "../../assets/js/Task";
import { Puzzle } from "../../assets/js/Puzzle";
import { gradient } from '../../assets/js/LayoutShared.js';
import CategoryUnlockModal from "../../components/CategoryUnlockModal.vue";
export default {
  data() {
    const store = useStore();
    const puzzle = store.currentPuzzle;
    const layout = puzzle.base.copy();

    const { width: windowWidth, height: windowHeight } = useWindow();
    return {
      store,
      windowWidth,
      windowHeight,
      layout,
      puzzle,
      moves: 0,
      maxMoves: puzzle.moves,
      showWinModal: false,
      showExplanationModal: true,
      showCategoryModal: false,
      shouldShowCategoryModal: false,
      showIntroductionModal: !store.hasHadChallengeExplanationPopup,
    };
  },
  computed: {
    completionMoves() {
      return this.puzzle.completionMoves === -1
        ? -1
        : this.puzzle.completionMoves;
    },
    nextMedal() {
      const { medal, movesRequiredForNextMedal } = this.puzzle.medalFromMoves(this.puzzle.completionMoves);
      if (medal === Puzzle.MEDALS.NOT_COMPLETED) return -1;
      if (medal === Puzzle.MEDALS.GOLD) return -1;
      if (medal === Puzzle.MEDALS.SILVER) return movesRequiredForNextMedal;
      if (medal === Puzzle.MEDALS.BRONZE) return movesRequiredForNextMedal;
    },
    hasGold() {
      return this.puzzle.completionMoves <= this.puzzle.solution.length;
    },
  },
  watch: {
    showIntroductionModal(val) {
      if (!val) {
        this.store.hasHadChallengeExplanationPopup = true;
      }
    }
  },
  methods: {
    reset() {
      this.moves = 0;
      this.layout.setMatrix(this.puzzle.base.matrix);
      // this.layout = this.layout.copy();
    },
    handleClick() {
      this.moves++;
      if (this.puzzle.isSolvedWith(this.layout)) {
        this.puzzle.completionMoves = this.moves;
        this.showWinModal = true;
        this.$nextTick(() => {
          if (this.store.recentCategoryModalPopup < this.store.currentCategory) {
            this.store.recentCategoryModalPopup = this.store.currentCategory;
            this.shouldShowCategoryModal = true;
          }
          Task.advanceTasks(this.puzzle.id, Task.TASK_TYPES.PUZZLE, this.moves);
        })
      }
    },
    restart() {
      this.showWinModal = false;
      this.reset();
    },
    quit() {
      this.$router.push("/home");
    },
    color(moves) {
      const solutionLength = this.puzzle.solution.length;
      return !this.puzzle.solved
        ? "var(--hl-color)"
        : (moves <= solutionLength
        ? "var(--success-color)"
        : moves <= this.puzzle.silverMoves
        ? "var(--silver-color)"
        : "var(--bronze-color)");
    }
  },
};
</script>