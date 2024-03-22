<script setup>
import LinkButton from '../../components/buttons/LinkButton.vue';
import Button from '../../components/buttons/Button.vue';
import CSB from '../../components/challenges/ChallengeSelectionButton.vue';
import ChallengeCategoryButton from '../../components/challenges/ChallengeCategoryButton.vue';
import Separator from '../../components/Separator.vue';
import Modal from '../../components/Modal.vue';
</script>

<template>
  <div class="challenge-selection-container">
    <h1 class="title" v-if="!selectedChallengeGroup">Challenges</h1>
    <h1 class="title" v-else>{{ selectedChallengeGroup.title }}</h1>
    <!-- <LinkButton v-if="!categoryName" class="top right" text="back" to="/home" /> -->
    <Button v-if="selectedChallengeGroup" class="top right" text="back" @pressed="back" />

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

    <Modal v-model="showModal">
      <div v-html="selectedChallenge.description"></div>
      <Button black text="start!" @pressed="showModal = false; start();" />
    </Modal>

    <Modal v-model="showIntroductionModal">
      <h1>
        In this mode, you have to complete the pattern in the given time or
        moves. You can only swap the tiles in the pattern. The pattern will
        change after every successful completion. You can pause the game at any
        time.
      </h1>
      <Button black text="got it!" @pressed="showIntroductionModal = false" />
    </Modal>

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
import { Challenge } from '../../assets/js/challenges/Challenge.js';
import { CHALLENGES } from '../../assets/js/challenges/ChallengeData.js';

export default {
  data() {
    const store = useStore();
    const categories = new Array(new Set(CHALLENGES.map(group => group.unlockCategory)).size)
      .fill().map((_, i) => CHALLENGES.filter(group => group.unlockCategory === i));
    return {
      categories: categories.filter(category => category.length > 0),
      showModal: false,
      showIntroductionModal: false,
    }
  },
  computed: {
    selectedChallengeGroup() {
      const store = useStore();
      return store.selectedChallengeGroup;
    },
    selectedChallenge() {
      const store = useStore();
      return store.currentChallenge;
    }
  },
  methods: {
    start() {
      this.$router.push('/challengeGame');
    },
    selectChallenge(challenge) {
      
      if (!this.isUnlocked(challenge)) return;

      challenge.process.init();
      const store = useStore();
      store.setChallenge(challenge);

      setModulo(challenge.process.patternModulo);
      store.setLayout(challenge.process.currentPattern.layout);

      this.showModal = true;

    },
    selectChallengeGroup(group) {

      if (!this.isUnlocked(group)) return;

      const store = useStore();
      store.selectedChallengeGroup = group;

      if (!store.hasHadChallengeExplanationPopup) {
        this.showIntroductionModal = true;
        store.hasHadChallengeExplanationPopup = true;
      }
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
    },
    back() {
      const store = useStore();
      store.selectedChallengeGroup = null;
    }
  }
}
</script>
