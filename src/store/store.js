import { defineStore } from 'pinia';
import { ref } from 'vue';
import { register } from '../firebase/database.js';
import { INITIAL_STATS } from '../assets/js/Stats.js';

export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const currentChallenge = ref({});
  const difficulty = ref(2);
  const solvedPuzzles = ref([]);

  const stats = ref({ ...INITIAL_STATS });

  setInterval(() => {
    stats.value.timePlayed++;
  }, 1e3);
  
  function setLayout(layout) {
    currentLayout.value = layout;
  }
  function setPuzzle(puzzle) {
    currentPuzzle.value = puzzle;
  }
  function setChallenge(challenge) {
    currentChallenge.value = challenge;
  }
  function solvePuzzle(id) {
    if (!solvedPuzzles.value.includes(id)) {
      solvedPuzzles.value.push(id);
      stats.value.puzzlesCompleted++;
    }
  }
  
  register(solvedPuzzles, 'solved-puzzles');
  register(difficulty, 'difficulty');
  register(stats, 'stats');

  return {
    currentLayout,
    currentPuzzle,
    currentChallenge,
    difficulty,
    solvedPuzzles,
    setLayout,
    setPuzzle,
    setChallenge,
    solvePuzzle,
    stats
  };
});