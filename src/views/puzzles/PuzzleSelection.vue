<script setup>
import LinkButton from '@/components/buttons/LinkButton.vue';
import PuzzleSelectionButton from '@/components/puzzles/PuzzleSelectionButton.vue';
import Separator from '@/components/Separator.vue';
</script>

<template>
  <main>
    <h1 class="title">Puzzles</h1>
    <!-- <LinkButton class="top right" text="back" to="/home" /> -->
    
    <div v-for="(category, i) in categories" :key="i">
      <Separator :text="i + 1" />
      <div class="layouts">
        <PuzzleSelectionButton
          v-for="(puzzle, index) in category"
          :puzzle="puzzle"
          :key="index"
        ></PuzzleSelectionButton>
      </div>
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
</style>

<script>
import { Puzzle } from '../../assets/js/Puzzle.js';

export default {
  data() {
    return {
      categories: Puzzle.CATEGORIES.filter(category => category.length > 0),
    }
  }
}
</script>