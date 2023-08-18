<script setup>
import Layout from '../../components/Layout.vue';
import Modal from "../../components/Modal.vue";
import Button from '../../components/Button.vue';
</script>

<template>
  <div>
    <p class="info">{{ formattedTime }} {{ moves }} - {{ percentageCompleted }}</p>
    <main>
      <Layout v-model="layout" @swap="handleClick" />
    </main>
    <p class="moves">{{ movesPer }}</p>

    <Modal v-model="showWinModal">
      <h1>you won the challenge!</h1>
      <Button black text="yay!" @click="showWinModal = false" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>{{ modalText }}</h1>
      <Button black text="adnwkhu!" @click="showLostModal = false" />
    </Modal>
  </div>
</template>

<style scoped>
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.info {
  position: absolute;
  top: 20px;
  left: 50%;
  font-size: 30px;
  transform: translateX(-50%);
}
.moves {
  position:absolute;
  left: 50%;
  bottom: 5%;
  font-size: var(--font-size-lg);
}
</style>

<script>

import { useStore } from '../../store/store.js'
export default {
  data() {
    const { currentChallenge } = useStore();
    return {
      currentChallenge,
      time: currentChallenge.timeLimit,
      nMoves: currentChallenge.moveLimit,
      nMovesPer: currentChallenge.moveLimitPer,
      layout: currentChallenge.getCurrentLayout(),
      showWinModal: false,
      showLostModal: false,
      modalText: "",
      timerId: 0
    }
  },
  methods: {
    handleClick() {
      const store = useStore()
      this.nMoves -= 1
      this.nMovesPer -= 1
      if (this.layout.isSolved()) {
        store.stats.layoutsSolved++;
        this.nMovesPer = this.currentChallenge.moveLimitPer;
        if (this.currentChallenge.currentPattern === this.currentChallenge.nPatterns - 1) {
          this.showWinModal = true;
          this.currentChallenge.reset();
          window.clearInterval(this.timerId);
          return;
        }
        
        this.currentChallenge.nextLayout();
        this.layout = this.currentChallenge.getCurrentLayout()
      }
      if (this.nMoves == 0 || this.nMovesPer == 0) {
        this.modalText = "no moves left!";
        this.showLostModal = true;
        this.currentChallenge.reset();
        window.clearInterval(this.timerId);
      }
    }
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push('/challengeSelection');
      }
    },
    showLostModal() {
      if (!this.showLostModal) {
        this.$router.push('/challengeSelection');
      }
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.time / 60).toString();
      const seconds = (this.time % 60).toString()
    
      return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
    },
    percentageCompleted() {
      return Math.floor(this.currentChallenge.currentPattern / this.currentChallenge.nPatterns * 100) + '%';
    },
    moves() {
      return this.nMoves <= -1?"":"- "+this.nMoves
    },
    movesPer() {
      return this.nMovesPer <= -1?"":this.nMovesPer
    }
  },
  mounted() {
    this.timerId = window.setInterval(()=>{
      this.time -= 1;
      if (this.time <= 0) {
        this.modalText = "no time left!";
        this.showLostModal = true;
        this.currentChallenge.reset();
        window.clearInterval(this.timerId);
      }
    }, 1000);
  }
}
</script>
