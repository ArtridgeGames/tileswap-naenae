import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { register } from '../firebase/database.js';
import { INITIAL_STATS } from '../assets/js/Stats.js';
import { INITIAL_SETTINGS, SETTINGS_DATA } from '../assets/js/Settings.js';
import { CHALLENGES } from '../assets/js/challenges/ChallengeData.js';
import { Layout } from '../assets/js/Layout.js';

export const useStore = defineStore('store', () => {
  const currentLayout = ref({});
  const currentPuzzle = ref({});
  const currentChallenge = ref({});
  const difficulty = ref(2);
  const currentTasks = ref([]); // ref([0,1,2]);
  const maxTask = ref(2);
  const isRandomFreeplay = ref(false);
  const menuViewIndex = ref(0);
  const savedMenuScroll = ref(0);
  const score = ref(0);

  const hasHadOtherGameModesPopup = ref(false);
  const hasHadPuzzleExplanationPopup = ref(false);
  const hasHadChallengeExplanationPopup = ref(false);
  const recentCategoryModalPopup = ref(0);

  const selectedChallengeGroup = ref(null);
  const allowScroll = ref(true);

  if (globalThis.window && !window.hasOwnProperty('score')) {
    Object.defineProperty(window, 'score', {
      get: () => score.value,
      set: value => {
        score.value = value;
      },
    });
  }

  const categories = [
    50,
    60, //750
    2500, // + 2k
    7000, // + 3k
    15000, // + 4k
    50000, // + 5k
    120000, // + 6k
    300000, // + 7k
    800000, // + 8k
    3e6, // + 9k
    2e7, // + 10k
    9e7, // + 11k
    4e8, // + 12k
    2e9, // + 13k
    1e10, // + 14k
    5e10, // + 15k
    2.5e11, // + 16k
    4e11, // + 17k
    8e11, // + 18k
  ];

  const nextScore = computed(() => {
    const index = categories.findIndex(e => e > score.value);
    return index === -1 ? 0 : categories[index];
  });

  //! currentCategory is zero-based
  const currentCategory = computed(() => {
    const index = categories.findIndex(e => e > score.value);
    // Adjust index to skip first category
    return index === -1
      ? categories.length - 1
      : index >= 1
      ? index - 1
      : index;
  });

  const unlockedCategoriesFP = computed(() => {
    return currentCategory.value;
  });
  const unlockedCategoriesPZ = computed(() => {
    return currentCategory.value;
  });
  const unlockedChallenges = computed(() => {
    return CHALLENGES.filter(
      e => e.unlockCategory <= currentCategory.value
    ).flatMap(e => {
      if (e.allUnlocked) return e.challenges.map(e => e.id);
      return e.challenges
        .filter((_, i) => {
          if (i === 0) return true;
          const completed =
            stats.value.challengesCompleted.hasOwnProperty(
              e.challenges[i - 1].id
            ) &&
            stats.value.challengesCompleted[e.challenges[i - 1].id].completed;
          return completed;
        })
        .map(e => e.id);
    });
  }); // ref([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])

  function unlockAll() {
    score.value = categories[categories.length - 1];
    hasHadOtherGameModesPopup.value = true;
  }

  // if (process.env.NODE_ENV === 'development') {
  //   unlockAll();
  // }

  function setTask(index, task) {
    currentTasks.value.splice(index, 1);
    currentTasks.value.push(task);
  }

  const settings = ref({ ...INITIAL_SETTINGS });

  watch(
    settings,
    _ => {
      for (const setting of Object.keys(settings.value)) {
        SETTINGS_DATA[setting].onChange(settings.value[setting]);
      }
    },
    { deep: true }
  );

  const stats = ref({ ...INITIAL_STATS });

  setInterval(() => {
    stats.value.timePlayed += 10;
  }, 10e3);

  function setLayout(layout) {
    currentLayout.value = layout;
  }
  setLayout(Layout.fromId(0));
  function setPuzzle(puzzle) {
    currentPuzzle.value = puzzle;
  }
  function setChallenge(challenge) {
    currentChallenge.value = challenge;
  }
  function setMaxTask(n) {
    maxTask.value = n;
  }

  register(difficulty, 'difficulty');
  register(stats, 'stats');
  register(settings, 'settings');
  register(score, 'score');

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
    settings,
    menuViewIndex,
    savedMenuScroll,
    score,
    nextScore,
    currentCategory,
    unlockAll,
    categories,
    hasHadOtherGameModesPopup,
    hasHadPuzzleExplanationPopup,
    hasHadChallengeExplanationPopup,
    recentCategoryModalPopup,
    selectedChallengeGroup,
    allowScroll,
  };
});
