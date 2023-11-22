<script setup>
import { useStore } from "../../store/store";
import LinkButton from "../../components/buttons/LinkButton.vue";
import Button from "../../components/buttons/Button.vue";
import Layout from "../../components/Layout.vue";
import Modal from "../../components/Modal.vue";
import { useWindow } from "../../assets/js/window.js";
import tutorialUrl from "/images/svg/tutorial.svg";
import IconButton from "../../components/buttons/IconButton.vue";
</script>

<template>
  <div>
    <LinkButton class="top right" text="back" to="/home" />
    <IconButton
      class="top left"
      :icon="tutorialUrl"
      @click="showExplanationModal = true"
    />

    <div
      class="info center"
      :class="{
        top: windowWidth > 600,
        bottom: windowWidth <= 600,
      }"
    >
      <h1>{{ completionMoves }}</h1>
      <h1>{{ nextMedal }}</h1>
      <Button text="retry" @click="reset" />
    </div>

    <main class="puzzle-container">
      <Layout
        v-model="layout"
        :target="puzzle.target.matrix"
        @swap="handleClick"
      />
    </main>

    <!-- <div class="target" :class="{
        left: windowWidth > 600,
        middle: windowWidth > 600,
        top: windowWidth <= 600,
        center: windowWidth <= 600
      }">

      <Layout v-model="puzzle.target" disabled small />

    </div> -->

    <Modal v-model="showWinModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? "s" : "" }}!</h1>
      <Button black text="yay!" @click="showWinModal = false" />
    </Modal>

    <Modal v-model="showExplanationModal">
      <h1>you gotta do what do be do</h1>

      <div class="explanation">
        <Layout small v-model="puzzle.base" disabled />
        <p>→</p>
        <Layout small v-model="puzzle.target" disabled />
      </div>

      <Button black text="close" @click="showExplanationModal = false" />
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
}

.explanation {
  display: flex;
  align-items: center;
  justify-content: center;
}
.explanation > p {
  font-size: 32px;
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
  main {
    margin-top: 40px;
  }
}
</style>

<script>
import { Task } from "../../assets/js/Task";
export default {
  data() {
    const store = useStore();
    const puzzle = store.currentPuzzle;
    const layout = puzzle.base.copy();

    const { width: windowWidth } = useWindow();
    return {
      windowWidth,
      layout,
      puzzle,
      moves: 0,
      maxMoves: puzzle.moves,
      showWinModal: false,
      showExplanationModal: true,
    };
  },
  computed: {
    completionMoves() {
      return this.puzzle.completionMoves === -1
        ? ""
        : `current best: ${this.puzzle.completionMoves} moves`;
    },
    nextMedal() {
      if (this.puzzle.completionMoves === -1) return "next medal: finish the puzzle";
      return this.puzzle.completionMoves <= this.puzzle.solution.length
        ? ""
        : `next medal: ${
            this.puzzle.completionMoves <= this.puzzle.solution.length * 1.2
              ? this.puzzle.solution.length
              : Math.floor(this.puzzle.solution.length * 1.2)
          } moves`;
    },
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push("/home");
      }
    },
  },
  methods: {
    reset() {
      this.moves = 0;
      this.layout.setMatrix(this.puzzle.base.matrix);
    },
    handleClick() {
      this.moves++;
      if (this.puzzle.isSolvedWith(this.layout)) {
        this.showWinModal = true;
        this.puzzle.completionMoves = this.moves;
        Task.advanceTasks(this.puzzle.id, Task.TASK_TYPES.PUZZLE, this.moves);
      }
    },
  },
};
</script>