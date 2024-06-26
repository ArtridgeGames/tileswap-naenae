<script setup>
import Button from '../../components/buttons/Button.vue';
import CSB from '../../components/challenges/ChallengeSelectionButton.vue';
import ChallengeCategoryButton from '../../components/challenges/ChallengeCategoryButton.vue';
import Separator from '../../components/Separator.vue';
import Modal from '../../components/Modal.vue';
import BackButton from '../../components/buttons/BackButton.vue';
</script>

<template>
  <main>
    <h1 class="title" v-if="!selectedChallengeGroup">Challenges</h1>
    <h1 class="title" v-else>{{ selectedChallengeGroup.title }}</h1>
    <BackButton v-if="selectedChallengeGroup" class="top left" @click="back" />

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
          <div v-for="(category, index) in categories"
            :key="index"
            :class="{ fade: index === categories.length - 1 && !isUnlocked(category[0]) }">
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
      <Button black text="back" @pressed="showModal = false" />
    </Modal>

    <Modal v-model="showIntroductionModal">
      <h1>In challenges, finish the given patterns under certain constraints. </h1>
      <h1>Finishing a challenge for the first time gives you extra score.</h1>
      <h1>Every challenge is different, click on a challenge to see what it has to offer.</h1>
      <Button black text="ok!" @pressed="showIntroductionModal = false" />
    </Modal>

  </main>
</template>

<style scoped>
div.container {
  text-align: center;
}
main {
  height: 100%;
  overflow-y: scroll;
  position: relative;
}
</style>

<script>
import { useStore } from '../../store/store.js';
import { setModulo } from '../../assets/js/LayoutShared.js';
import { Challenge } from '../../assets/js/challenges/Challenge.js';
import { CHALLENGES } from '../../assets/js/challenges/ChallengeData.js';

export default {
  data() {
    return {
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
    },
    categories() {
      const store = useStore();
      const categories = new Array(new Set(CHALLENGES.map(group => group.unlockCategory)).size)
      .fill().map((_, i) => CHALLENGES.filter(group => group.unlockCategory === i));
      return categories.filter(category => category.length > 0)
            .filter(e => {
              const challenge = e[0];
              return challenge.unlockCategory <= store.currentCategory + 1 || challenge.unlockCategory >= store.categories.length
            });
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
