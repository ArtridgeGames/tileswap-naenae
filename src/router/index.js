import { createRouter, createMemoryHistory } from 'vue-router';
import FreeplaySelection from '../views/freeplay/FreeplaySelection.vue';
import PuzzleSelection from '../views/puzzles/PuzzleSelection.vue';
import ChallengeSelection from '../views/challenges/ChallengeSelection.vue';
import FreeplayGame from '../views/freeplay/FreeplayGame.vue';
import PuzzleGame from '../views/puzzles/PuzzleGame.vue';
import ChallengeGame from '../views/challenges/ChallengeGame.vue';
import TutorialViewAdvanced from '../views/tutorial/TutorialViewAdvanced.vue';
import TutorialFreeplayGame from '../views/tutorial/TutorialFreeplayGame.vue';
import TestView from '../views/TestView.vue';
import EditorView from '../views/EditorView.vue';
import LayoutEditorView from '../views/LayoutEditorView.vue';
import IntroView from '../views/IntroView.vue';
import SwipeView from '../views/SwipeView.vue';

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'intro',
      component: IntroView
    },
    {
      path: '/home',
      name: 'home',
      component: SwipeView
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: TutorialViewAdvanced
    },
    {
      path: '/tutorialFreeplayGame',
      name: 'tutorialFreeplayGame',
      component: TutorialFreeplayGame
    },
    {
      path: '/freeplaySelection',
      name: 'freeplaySelection',
      component: FreeplaySelection
    },
    {
      path: '/puzzleSelection',
      name: 'puzzleSelection',
      component: PuzzleSelection
    },
    {
      path: '/challengeSelection',
      name: 'challengeSelection',
      component: ChallengeSelection
    },
    {
      path: '/freeplayGame',
      name: 'freeplayGame',
      component: FreeplayGame
    },
    {
      path: '/puzzleGame',
      name: 'puzzleGame',
      component: PuzzleGame
    },
    {
      path: '/challengeGame',
      name: 'challengeGame',
      component: ChallengeGame
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorView
    },
    {
      path: '/layout-editor',
      name: 'layout-editor',
      component: LayoutEditorView
    }
  ]
});

export default router;