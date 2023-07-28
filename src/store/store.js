import { defineStore } from 'pinia';
import { ref } from 'vue';
import { register } from '../firebase/database.js';

export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const difficulty = ref(2);
  const solvedPuzzles = ref([]);
  function setLayout(layout) {
    currentLayout.value = layout;
  }
  function setPuzzle(puzzle) {
    currentPuzzle.value = puzzle;
  }
  function solvePuzzle(id) {
    if (!solvedPuzzles.value.includes(id)) {
      solvedPuzzles.value.push(id);
    }
  }
  
  register(solvedPuzzles, 'solved-puzzles');
  register(difficulty, 'difficulty');

  return {
    currentLayout,
    currentPuzzle,
    difficulty,
    solvedPuzzles,
    setLayout,
    setPuzzle,
    solvePuzzle
  };
});