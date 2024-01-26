<script setup>
import Layout from '../../components/Layout.vue';
import Modal from "../../components/Modal.vue";
import Button from '../../components/buttons/Button.vue';
import Progress from '../../components/Progress.vue';
</script>

<template>
  <div>

    <Button class="top right" text="back" @pressed="showPauseModal = true" />

    <div v-if="hasStarted">
      <h2 class="info center"> {{ formattedTime }} {{ moves }} {{ percentageCompleted + '%' }}</h2>
      <h2 class="per center">{{ movesPer }} {{ formattedTimePer }}</h2>
      <Progress class="center progress" :value="percentageCompleted" :max="100" />
    </div>
    <h2 class="info center" v-else>Click To Start The Challenge !</h2>
    <main>
      <Transition name="fade" mode="out-in">
        <Layout :key="currentChallenge.process.patternIndex" v-model="currentChallenge.process.currentLayout" @swap="handleClick" />
      </Transition>
    </main>

    <Modal v-model="showWinModal">
      <h1>you won the challenge!</h1>
      <Button black text="yay!" @pressed="showWinModal = false" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>{{ modalText }}</h1>
      <Button black text="adnwkhu!" @pressed="showLostModal = false" />
    </Modal>

    <Modal v-model="showPauseModal">
      <h1>Are you sure you want to go back?</h1>
      <Button black text="resume" @pressed="resume" />
      <Button black text="quit" @pressed="quit" />
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
.per {
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
import { modulo, setModulo } from '../../assets/js/LayoutShared.js';
import { ChallengeProcess } from '../../assets/js/challenges/ChallengeNew';

export default {
  data() {
    const { currentChallenge } = useStore();
    return {
      currentChallenge,
      showWinModal: false,
      showLostModal: false,
      showPauseModal: false,
      modalText: "",
      hasStarted: false
    }
  },
  methods: {
    handleClick() {

      if (!this.hasStarted) {
        this.currentChallenge.process.start();
      }
      this.hasStarted = true;

      this.currentChallenge.process.handleClick();

      if (this.currentChallenge.process.state === ChallengeProcess.STATE.WON) {
        this.showWinModal = true;
        Task.advanceTasks(this.currentChallenge.id, Task.TASK_TYPES.CHALLENGE, this.currentChallenge.settings.timeLimit - this.currentChallenge.process.currentTime);
        this.currentChallenge.process.reset();
        return;
      }

      if (this.currentChallenge.process.state === ChallengeProcess.STATE.LOST) {
        this.modalText = "no moves left!";
        this.showLostModal = true;
        this.currentChallenge.process.reset();
        return;
      }

      setModulo(this.currentChallenge.process.patternModulo);
      
      const store = useStore()
      store.setLayout(this.currentChallenge.process.currentLayout);

    },
    /*
    handleClick() {
      const store = useStore()
      this.nMoves -= 1
      this.nMovesPer -= 1
      this.hasStarted = true;

      if (this.layout.isSolved(modulo.value)) {
        store.stats.layoutsSolved++;
        this.nMovesPer = this.currentChallenge.moveLimitPer;
        this.timePer = this.currentChallenge.timeLimitPer;
        if (this.currentChallenge.currentPattern === this.currentChallenge.nPatterns - 1) {
          this.showWinModal = true;
          this.currentChallenge.minTime = Math.min(this.currentChallenge.timeLimit - this.time, this.currentChallenge.minTime);
          this.currentChallenge.maxPercent = 100;
          this.currentChallenge.minMoves = Math.min(this.currentChallenge.moveLimit - this.nMoves, this.currentChallenge.minMoves)
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
    },*/
    resume() {
      this.showPauseModal = false;
    },
    quit() {
      // window.clearInterval(this.timerId);
      // this.currentChallenge.reset();
      this.$router.push('/home');
    }
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push('/home');
        // this.currentChallenge.reset();
      }
    },
    showLostModal() {
      if (!this.showLostModal) {
        this.$router.push('/home');
        // this.currentChallenge.reset();
      }
    }
  },
  computed: {
    formattedTime() {
      return this.currentChallenge.process.currentTime !== -1 
        ? formatTime(this.currentChallenge.process.currentTime) + "- " : '';
    },
    formattedTimePer() {
      return this.currentChallenge.process.currentPatternTime !== -1
        ? formatTime(this.currentChallenge.process.currentPatternTime) :'';
    },
    percentageCompleted() {
      console.log(this.currentChallenge.process.patternIndex, this.currentChallenge.settings.patternCount)
      return Math.floor(this.currentChallenge.process.patternIndex / this.currentChallenge.settings.patternCount * 100);
    },
    moves() {
      return this.currentChallenge.process.totalClicks === -1?"":this.currentChallenge.process.totalClicks+" -"
    },
    movesPer() {
      return this.currentChallenge.process.patternClicks <= -1?"":(this.currentChallenge.process.patternClicks + (this.currentChallenge.process.currentPatternTime===-1?"":" - "))
    }
  },
  mounted() {
    // this.timerId = window.setInterval(()=>{
    //   if (this.currentChallenge.timeLimit !== -1){
    //     this.time -= 1 * this.hasStarted * !this.showPauseModal;
    //     if (this.time <= 0) {
    //       this.modalText = "no time left!";
    //       this.currentChallenge.maxPercent = Math.max(this.percentageCompleted, this.currentChallenge.maxPercent);
    //       this.showLostModal = true;
    //       window.clearInterval(this.timerId);
    //     }
    //   } if (this.currentChallenge.timeLimitPer !== -1) {
    //     this.timePer -= 1 * this.hasStarted * !this.showPauseModal;
    //     if (this.timePer <= 0) {
    //       this.modalText = "no time left!";
    //       this.currentChallenge.maxPercent = Math.max(this.percentageCompleted, this.currentChallenge.maxPercent);
    //       this.showLostModal = true;
    //       window.clearInterval(this.timerId);
    //     }
    //   }
    // }, 1000);
  }
}
</script>
