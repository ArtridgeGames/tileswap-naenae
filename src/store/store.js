import { defineStore } from 'pinia';
import { ref } from 'vue';
import { register } from '../firebase/database.js';
import { INITIAL_STATS } from '../assets/js/Stats.js';
import { Challenge } from '../assets/js/Challenge.js'
export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const currentChallenge = ref({});
  const difficulty = ref(2);
  const solvedPuzzles = ref([]);

  const challenges = ref([new Challenge({
    timeLimit: 30,
    moveLimit: -1,
    totalClicks: 60,
    patternRange: [1,39],
    nPatterns: 30,
    bigLayoutAdapt: false, 
    moveLimitPer: 2})])

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
    stats,
    challenges
  };
});