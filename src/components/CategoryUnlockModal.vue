<template>
  <Modal :modelValue="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <h1>Category {{ currentCategory + 1 }} Unlocked!</h1>
    <h2>{{ newLayoutsCount }} New Layouts Unlocked!</h2>
    <!-- <div class="layouts-grid">
      <LayoutPreview 
        v-for="layout in unlockedLayouts" 
        :key="layout.id"
        :layout="layout"
        :size="80"
      />
    </div> -->
    <h2>{{ newPuzzlesCount }} New Puzzles Unlocked!</h2>
    <h2>{{ newChallengesCount }} New Challenges Unlocked!</h2>
    
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
    newChallengesCount() {
      const categoryChallenges = CHALLENGES.filter(
        challengeGroup => challengeGroup.unlockCategory === this.currentCategory
      );
      return categoryChallenges.reduce((total, group) => total + group.challenges.length, 0);
    }
  }
}
</script>

<style scoped>

</style>