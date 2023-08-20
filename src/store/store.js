import { defineStore } from 'pinia';
import { ref } from 'vue';
import { register } from '../firebase/database.js';
import { INITIAL_STATS } from '../assets/js/Stats.js';
import { Challenge } from '../assets/js/Challenge.js';


export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const currentChallenge = ref({});
  const difficulty = ref(5);
  const unlockedCategoriesFP = ref(39);
  const unlockedCategoriesPZ = ref(1);

  const challenges = ref([
    new Challenge({
      timeLimit: 60,
      moveLimit: -1,
      totalClicks: 90,
      patternRange: [1, 1],
      nPatterns: 30,
      bigLayoutAdapt: false, 
      moveLimitPer: 3,
      name: "Think Fast"
    })
  ]);

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
    if (!stats.value.puzzlesCompleted.includes(id)) {
      stats.value.puzzlesCompleted.push(id);
    }
  }
  
  register(difficulty, 'difficulty');
  register(stats, 'stats');

  return {
    currentLayout,
    currentPuzzle,
    currentChallenge,
    difficulty,
    setLayout,
    setPuzzle,
    setChallenge,
    solvePuzzle,
    stats,
    challenges,
    unlockedCategoriesFP,
    unlockedCategoriesPZ
  };
});