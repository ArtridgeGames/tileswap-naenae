<script setup>
import Layout from '../../components/Layout.vue';
import Modal from "../../components/Modal.vue";
import Button from '../../components/buttons/Button.vue';
import Progress from '../../components/Progress.vue';
</script>

<template>
  <div>

    <Button class="top right" text="back" @click="showPauseModal = true" />

    <div v-if="hasStarted">
      <h2 class="info center"> {{ formattedTime }} {{ moves }} - {{ percentageCompleted + '%' }}</h2>
      <h2 class="moves center">{{ movesPer }}</h2>
    </div>
    <h2 class="info center" v-else>Click To Start The Challenge !</h2>
    <Progress class="center progress" :value="percentageCompleted" :max="100" />
    <main>
      <Transition name="fade" mode="out-in">
        <Layout :key="currentChallenge.currentPattern" v-model="layout" @swap="handleClick" />
      </Transition>
    </main>

    <Modal v-model="showWinModal">
      <h1>you won the challenge!</h1>
      <Button black text="yay!" @click="showWinModal = false" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>{{ modalText }}</h1>
      <Button black text="adnwkhu!" @click="showLostModal = false" />
    </Modal>

    <Modal v-model="showPauseModal">
      <h1>Are you sure you want to go back?</h1>
      <Button black text="resume" @click="resume" />
      <Button black text="quit" @click="quit" />
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
  font-size: var(--font-size-md);
  white-space: nowrap;
}
.moves {
  position:absolute;
  bottom: 5%;
  font-size: var(--font-size-lg);
  pointer-events: none;
}

.progress {
  width: 50%;
  top: 150px;
  height: 20px;
  background-color: var(--hl-color);
}

@media screen and (max-width: 600px)  {
  .progress {
    width: 90%;
  }
}
</style>

<script>

import { useStore } from '../../store/store.js'
import { Task } from '../../assets/js/Task';
import { formatTime } from '../../assets/js/Format';
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
      showPauseModal: false,
      modalText: "",
      timerId: 0,
      hasStarted: false
    }
  },
  methods: {
    handleClick() {
      const store = useStore()
      this.nMoves -= 1
      this.nMovesPer -= 1
      this.hasStarted = true;
      if (this.layout.isSolved()) {
        store.stats.layoutsSolved++;
        this.nMovesPer = this.currentChallenge.moveLimitPer;
        if (this.currentChallenge.currentPattern === this.currentChallenge.nPatterns - 1) {
          this.showWinModal = true;
          this.currentChallenge.minTime = Math.min(this.currentChallenge.timeLimit - this.time, this.currentChallenge.minTime);
          this.currentChallenge.maxPercent = 100;
          Task.advanceTasks(this.currentChallenge.id, Task.TASK_TYPES.CHALLENGE, this.currentChallenge.timeLimit - this.time);
          window.clearInterval(this.timerId);
          return;
        }
        
        this.currentChallenge.nextLayout();
        this.layout = this.currentChallenge.getCurrentLayout()
      }
      if (this.nMoves == 0 || this.nMovesPer == 0) {
        this.modalText = "no moves left!";
        this.currentChallenge.maxPercent = Math.max(this.percentageCompleted, this.currentChallenge.maxPercent);
        this.showLostModal = true;
        window.clearInterval(this.timerId);
      }
    },
    resume() {
      this.showPauseModal = false;
    },
    quit() {
      this.showPauseModal = false;
      window.clearInterval(this.timerId);
      this.currentChallenge.reset();
      this.$router.push('/challengeSelection');
    }
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push('/challengeSelection');
        this.currentChallenge.reset();
      }
    },
    showLostModal() {
      if (!this.showLostModal) {
        this.$router.push('/challengeSelection');
        this.currentChallenge.reset();
      }
    }
  },
  computed: {
    formattedTime() {
      return formatTime(this.time);
    },
    percentageCompleted() {
      return Math.floor(this.currentChallenge.currentPattern / this.currentChallenge.nPatterns * 100);
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
      this.time -= 1 * this.hasStarted * !this.showPauseModal;
      if (this.time <= 0) {
        this.modalText = "no time left!";
        this.currentChallenge.maxPercent = Math.max(this.percentageCompleted, this.currentChallenge.maxPercent);
        this.showLostModal = true;
        window.clearInterval(this.timerId);
      }
    }, 1000);
  }
}
</script>
