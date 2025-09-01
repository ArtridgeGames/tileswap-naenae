<template>
  <Modal :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <h1>Category {{ currentCategory + 1 }} Unlocked!</h1>
    <h1>{{ newLayoutsCount }} New Layouts Unlocked!</h1>
    <!-- <div class="layouts-grid">
      <LayoutPreview 
        v-for="layout in unlockedLayouts" 
        :key="layout.id"
        :layout="layout"
        :size="80"
      />
    </div> -->
    <h1>{{ newPuzzlesCount }} New Puzzles Unlocked!</h1>
    <h1>{{ newChallengesCount }} New Challenges Unlocked!</h1>
    <ul>
        <li v-for="message in newChallengesNames" :key="message">
        {{ message }}
        </li>
    </ul>
    <slot></slot>
  </Modal>
</template>

<script>
import { useStore } from '../store/store.js';
import { Layout } from '../assets/js/Layout.js';
import { Puzzle } from '../assets/js/Puzzle.js';
import { CHALLENGES } from '../assets/js/challenges/ChallengeData.js';
import Modal from './Modal.vue';

export default {
  components: {
    Modal
  },
  setup() {
    const store = useStore();
    return {
      store
    };
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    currentCategory() {
      return this.store.currentCategory;
    },
    newLayoutsCount() {
      const categoryLayouts = Layout.CATEGORIES[this.currentCategory];
      return categoryLayouts ? categoryLayouts.length : 0;
    },
    newPuzzlesCount() {
      const categoryPuzzles = Puzzle.CATEGORIES[this.currentCategory];
      return categoryPuzzles ? categoryPuzzles.length : 0;
    },
    categoryChallenges() {
    return CHALLENGES.filter(
      challengeGroup => challengeGroup.unlockCategory === this.currentCategory
        );
    },
    newChallengesNames() {
        return this.categoryChallenges.map(challenge => challenge.title);
    },
    newChallengesCount() {
      return this.newChallengesNames.length;
    }
  }
}
</script>

<style scoped>

</style>