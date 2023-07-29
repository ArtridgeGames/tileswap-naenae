import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FreeplaySelection from '../views/freeplay/FreeplaySelection.vue'
import PuzzleSelection from '../views/puzzles/PuzzleSelection.vue'
import ChallengeSelection from '../views/challenges/ChallengeSelection.vue'
import FreeplayGame from '../views/freeplay/FreeplayGame.vue'
import PuzzleGame from '../views/puzzles/PuzzleGame.vue'
import ChallengeGame from '../views/challenges/ChallengeGame.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    }
  ]
})

export default router;