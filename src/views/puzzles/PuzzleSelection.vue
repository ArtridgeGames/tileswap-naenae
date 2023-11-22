<script setup>
import LinkButton from '@/components/buttons/LinkButton.vue';
import PuzzleSelectionButton from '@/components/puzzles/PuzzleSelectionButton.vue';
</script>

<template>
  <main>
    <h1 class="title">Puzzles</h1>
    <!-- <LinkButton class="top right" text="back" to="/home" /> -->
    
    <div v-for="(category, i) in categories" :key="i">
      <div class="layouts">
        <PuzzleSelectionButton
          v-for="(puzzle, index) in category"
          :puzzle="puzzle"
          :key="index"
        ></PuzzleSelectionButton>
      </div>
      <hr v-if="i !== categories.length - 1" class="separator">
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
  margin-bottom: 20px;
}
</style>

<script>
import { Puzzle } from '../../assets/js/Puzzle.js';

export default {
  data() {
    return {
      categories: Puzzle.CATEGORIES,
    }
  }
}
</script>