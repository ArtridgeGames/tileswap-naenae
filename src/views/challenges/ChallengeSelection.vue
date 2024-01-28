<script setup>
import LinkButton from '../../components/buttons/LinkButton.vue';
import Button from '../../components/buttons/Button.vue';
import CSB from '../../components/challenges/ChallengeSelectionButton.vue';
import ChallengeCategoryButton from '../../components/challenges/ChallengeCategoryButton.vue';
import Separator from '../../components/Separator.vue';
</script>

<template>
  <div class="challenge-selection-container">
    <h1 class="title" v-if="!selectedChallengeGroup">Challenges</h1>
    <h1 class="title" v-else>{{ selectedChallengeGroup.title }}</h1>
    <!-- <LinkButton v-if="!categoryName" class="top right" text="back" to="/home" /> -->
    <Button v-if="selectedChallengeGroup" class="top right" text="back" @pressed="selectedChallengeGroup = null" />

    <Transition name="fade" mode="out-in">
      <div class="container" :key="selectedChallengeGroup">

        <div v-if="selectedChallengeGroup">
          <CSB
            v-for="challenge in selectedChallengeGroup.challenges"
            :key="challenge.id"
            :challenge="challenge"
            :locked="!isUnlocked(challenge)"
            @click="selectChallenge(challenge)"
          ></CSB>
        </div>
        <div v-else>
          <div v-for="(category, index) in categories" :key="index">
            <Separator :text="index + 1" />
            <ChallengeCategoryButton
              v-for="group in category"
              :key="group.title"
              :category="group"
              :locked="!isUnlocked(group)"
              @click="selectChallengeGroup(group)"
            />
          </div>
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
</style>

<script>
import { useStore } from '../../store/store.js';
import { setModulo } from '../../assets/js/LayoutShared.js';
// import { Challenge } from '../../assets/js/challenges/Challenge';
import { Challenge } from '../../assets/js/challenges/Challenge.js';
import { CHALLENGES } from '../../assets/js/challenges/ChallengeData.js';

export default {
  data() {
    const categories = new Array(new Set(CHALLENGES.map(group => group.unlockCategory)).size)
      .fill().map((_, i) => CHALLENGES.filter(group => group.unlockCategory === i));
    return {
      selectedChallengeGroup: null,
      categories
    }
  },
  methods: {
    selectChallenge(challenge) {
      
      if (!this.isUnlocked(challenge)) return;

      const store = useStore();

      store.setChallenge(challenge);

      challenge.process.reset();
      setModulo(challenge.process.patternModulo);
      store.setLayout(challenge.process.currentLayout)

      this.$router.push('/challengeGame');
    },
    selectChallengeGroup(group) {

      if (!this.isUnlocked(group)) return;

      this.selectedChallengeGroup = group;
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
