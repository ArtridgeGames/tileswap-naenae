<script setup>
import { useStore } from "../../store/store";
import LinkButton from "../../components/buttons/LinkButton.vue";
import Button from "../../components/buttons/Button.vue";
import Layout from "../../components/Layout.vue";
import Modal from "../../components/Modal.vue";
import { useWindow } from "../../assets/js/window.js";
import tutorialUrl from "/images/svg/tutorial.svg";
import IconButton from "../../components/buttons/IconButton.vue";
import Progress from "../../components/Progress.vue";
</script>

<template>
  <div>

    <LinkButton class="top right" text="back" to="/home" />
    <IconButton
      class="top left"
      :icon="tutorialUrl"
      @pressed="showExplanationModal = true"
    />

    <div
      class="info center"
      :class="{
        top: windowWidth > 600,
        bottom: windowWidth <= 600,
      }"
    >
      <p v-show="moves > 0">{{ moves }} move{{ moves > 1 ? "s" : "" }}</p>
      <h1>{{ completionMoves }}</h1>
      <h1>{{ nextMedal }}</h1>
      <Button text="retry" @pressed="reset" />
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
      <h1>{{ nextMedal }}</h1>
      <Progress
        :value="store.score"
        :max="store.nextScore"
        barColor="#e58f65"
        style="border: 5px solid black;"
        :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
      />
      <Button black text="yay!" @pressed="goMenu" />
      <Button  black text="retry" @pressed="restart" />
    </Modal>

    <Modal v-model="showExplanationModal">
      <h1>you gotta do what do be do be doo</h1>

      <div class="explanation">
        <Layout small v-model="puzzle.base" disabled />
        <p v-if="windowWidth > windowHeight">→</p>
        <p v-else>↓</p>
        <Layout small v-model="puzzle.target" disabled />
      </div>

      <Button black text="close" @pressed="showExplanationModal = false" />
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
    };
  },
  computed: {
    completionMoves() {
      return this.puzzle.completionMoves === -1
        ? ""
        : `current best: ${this.puzzle.completionMoves} moves`;
    },
    nextMedal() {
      const { medal, movesRequiredForNextMedal } = this.puzzle.medalFromMoves(this.puzzle.completionMoves);
      if (medal === Puzzle.MEDALS.NOT_COMPLETED) return "";
      if (medal === Puzzle.MEDALS.GOLD) return "";
      if (medal === Puzzle.MEDALS.SILVER) return `next medal: ${movesRequiredForNextMedal} moves`;
      if (medal === Puzzle.MEDALS.BRONZE) return `next medal: ${movesRequiredForNextMedal} moves`;
    },
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
        this.showWinModal = true;
        this.puzzle.completionMoves = this.moves;
        Task.advanceTasks(this.puzzle.id, Task.TASK_TYPES.PUZZLE, this.moves);
      }
    },
    restart() {
      this.showWinModal = false;
      this.reset();
    },
    goMenu() {
      this.showWinModal = false;
      this.$router.push("/home");
    }
  },
};
</script>