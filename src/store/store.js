import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { register } from '../firebase/database.js';
import { INITIAL_STATS } from '../assets/js/Stats.js';
import { INITIAL_SETTINGS, SETTINGS_DATA } from '../assets/js/Settings.js';

export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const currentChallenge = ref({});
  const difficulty = ref(5);
  const unlockedCategoriesFP = ref(17);
  const unlockedCategoriesPZ = ref(52);
  const unlockedChallenges = ref([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])
  const currentTasks = ref([0,1,2]);
  const maxTask = ref(2);
  const isRandomFreeplay = ref(false);
  
  function setTask(index, task) {
    currentTasks.value.splice(index, 1);
    currentTasks.value.push(task);
  }

  const settings = ref({ ...INITIAL_SETTINGS });

  watch(settings, _ => {
    for (const setting of Object.keys(settings.value)) {
      SETTINGS_DATA[setting].onChange(settings.value[setting]);
    }
  }, { deep: true });

  const stats = ref({ ...INITIAL_STATS });
  
  setInterval(() => {
    stats.value.timePlayed += 10;
  }, 10e3);
  
  function setLayout(layout) {
    currentLayout.value = layout;
  }
  function setPuzzle(puzzle) {
    currentPuzzle.value = puzzle;
  }
  function setChallenge(challenge) {
    currentChallenge.value = challenge;
  }
  function setMaxTask(n) {
    maxTask.value = n
  }
  
  register(difficulty, 'difficulty');
  register(stats, 'stats');
  register(settings, 'settings');

  return {
    currentLayout,
    currentPuzzle,
    currentChallenge,
    isRandomFreeplay,
    difficulty,
    setLayout,
    setPuzzle,
    setChallenge,
    unlockedChallenges,
    stats,
    currentTasks,
    maxTask,
    setTask,
    setMaxTask,
    unlockedCategoriesFP,
    unlockedCategoriesPZ,
    settings
  };
});