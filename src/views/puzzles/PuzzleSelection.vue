<script setup>
import LinkButton from '@/components/buttons/LinkButton.vue';
import PuzzleSelectionButton from '@/components/puzzles/PuzzleSelectionButton.vue';
import { Puzzle } from '../../assets/js/Puzzle.js';
</script>

<template>
  <main>
    <h1 class="title">Select a puzzle</h1>
    <LinkButton class="top right" text="back" to="/" />
    
    <div class="layouts">
      <PuzzleSelectionButton
        v-for="(puzzle, index) in puzzles"
        :puzzle="puzzle"
        :key="index"
      ></PuzzleSelectionButton>
    </div>

  </main>
</template>

<style scoped>
main {
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
.layouts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  h1 {
    padding-top: 60px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      puzzles: Puzzle.FILTERED_PUZZLES
    }
  }
}
</script>