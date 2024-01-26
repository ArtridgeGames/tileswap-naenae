<script setup>
import LinkButton from '../../components/buttons/LinkButton.vue';
import Button from '../../components/buttons/Button.vue';
import CSB from '../../components/challenges/ChallengeSelectionButton.vue';
import ChallengeCategoryButton from '../../components/challenges/ChallengeCategoryButton.vue';
</script>

<template>
  <div class="challenge-selection-container">
    <h1 class="title">Challenges</h1>
    <!-- <LinkButton v-if="!categoryName" class="top right" text="back" to="/home" /> -->
    <Button v-if="categoryName" class="top right" text="back" @pressed="categoryName = ''; challenges = Challenge.CHALLENGES" />

    <h3 class="name">
      {{ categoryName }}
    </h3>

    <Transition name="fade" mode="out-in">
      <div class="container" :key="categoryName">
        <div v-for="challenge in challenges" :key="challenge.id">
          <CSB v-if="(challenge instanceof Challenge)" @click="selectChallenge(challenge)" :challenge="challenge" :locked="!isUnlocked(challenge)" />
          <ChallengeCategoryButton v-else @click="selectCategory(challenge)" :category="challenge" :locked="!isUnlocked(challenge)" />
        </div>
      </div>
    </Transition>

  </div>
</template>

<style scoped>
div.container {
  text-align: center;
}
div.challenge-selection-container {
  height: 100%;
  overflow-y: scroll;
}
h3.name {
  text-align: center;
}
</style>

<script>
import { useStore } from '../../store/store.js';
import { setModulo } from '../../assets/js/LayoutShared.js';
import { Challenge } from '../../assets/js/challenges/Challenge';

export default {
  data() {
    return {
      challenges: Challenge.CHALLENGES,
      categoryName: ''
    }
  },
  methods: {
    selectChallenge(challenge) {
      
      if (!this.isUnlocked(challenge)) return;

      const store = useStore();

      challenge.generateLayouts();

      store.setChallenge(challenge);
      store.setLayout(challenge.getCurrentLayout())

      setModulo(challenge.modulo);

      this.$router.push('/challengeGame');
    },
    selectCategory(category) {

      if (!this.isUnlocked(category)) return;

      this.challenges = category.challenges;
      this.categoryName = category.name;
    },
    isUnlocked(category) {
      const { unlockedChallenges } = useStore();
      if (category instanceof Challenge) {
        return unlockedChallenges.includes(category.id);
      }
      for (let i = 0; i < category.challenges.length; i++){
        if (unlockedChallenges.includes(category.challenges[i].id)) return true;
      }
      return false;
    }
  }
}
</script>
