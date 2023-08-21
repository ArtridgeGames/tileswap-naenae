<script setup>
import LinkButton from '../../components/LinkButton.vue';
import CSB from '../../components/challenges/ChallengeSelectionButton.vue';
</script>

<template>
  <div>
    <h1 class="title">Select a challenge</h1>
    <LinkButton class="top right" text="back" to="/" />
    <CSB v-for="(challenge,i) in challenges" :key="i" @click="selectChallenge(challenge)" :challenge="challenge"/>
  </div>
</template>

<script>
import { useStore } from '../../store/store.js';
import { setModulo } from '../../assets/js/Layout';
import { Challenge } from '../../assets/js/Challenge';

export default {
  data() {
    return {
      challenges: Challenge.CHALLENGES
    }
  },
  methods: {
    selectChallenge(challenge) {
      const store = useStore();
      store.setChallenge(challenge);
      store.setLayout(challenge.getCurrentLayout())

      setModulo(challenge.modulo);

      this.$router.push('/challengeGame');
    }
  }
}
</script>
