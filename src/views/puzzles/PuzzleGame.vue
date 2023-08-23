<script setup>
import { useStore } from '../../store/store';
import LinkButton from "../../components/LinkButton.vue";
import Button from "../../components/Button.vue";
import Tile from "../../components/Tile.vue";
import Layout from '../../components/Layout.vue';
import Modal from "../../components/Modal.vue";
import { useWindow } from "../../assets/js/window.js";
</script>

<template>
  <div>
    <LinkButton class="top right" text="back" to="/puzzleSelection" />

    <div class="info center" :class="{
        top: windowWidth > 600,
        bottom: windowWidth <= 600
      }">
      <h1>{{ remainingMoves }} move{{ remainingMoves > 1 ? 's' : '' }} remaining</h1>
      <Button text="retry" @click="reset" />
    </div>

    <main>

      <Layout v-model="layout" :target="puzzle.target.matrix" @swap="handleClick" />
  
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
      <h1>you won in {{ moves }} move{{ moves > 1 ? 's' : '' }}!</h1>
      <Button black text="yay!" @click="showWinModal = false" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>no moves remaining!</h1>
      <Button black text="retry" @click="reset" />
      <LinkButton black text="back" to="/puzzleSelection" />
    </Modal>
  </div>
</template>

<style scoped>
main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 1;
}
.target {
  margin-left: 50px;
}
.info {
  text-align: center;
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
import { Task } from '../../assets/js/Task';
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
      remainingMoves: puzzle.moves,
      maxMoves: puzzle.moves,
      showWinModal: false,
      showLostModal: false
    }
  },
  computed: {
    moves() {
      return this.maxMoves - this.remainingMoves;
    }
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push('/puzzleSelection');
      }
    },
    showLostModal() {
      if (!this.showLostModal) {
        this.reset();
      }
    }
  },
  methods: {
    reset() {
      this.showLostModal = false;
      this.remainingMoves = this.maxMoves;
      this.layout.setMatrix(this.puzzle.base.matrix);
    },
    handleClick() {
      if (this.remainingMoves > 0) {
        const store = useStore();
        
        this.remainingMoves--;
        if (this.puzzle.isSolvedWith(this.layout)) {
          this.showWinModal = true;
          this.puzzle.completionMoves = this.moves;
          Task.advanceTasks(this.puzzle.id, Task.TASK_TYPES.PUZZLE, this.moves);

        } else if (this.remainingMoves === 0) {
          this.showLostModal = true;
        }
      }
    }
  }
}
</script>