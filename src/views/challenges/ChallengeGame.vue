<script setup>
import Layout from "../../components/Layout.vue";
import Modal from "../../components/Modal.vue";
import Button from "../../components/buttons/Button.vue";
import Progress from "../../components/Progress.vue";
</script>

<template>
  <div>
    <Button class="top right" text="pause" @pressed="pause" />

    <div v-if="hasStarted">
      <h2 class="info center">
        {{  [formattedTime, moves, currentChallenge.settings.isInfinite ? null : percentageCompleted + "%"].filter(e => e).join(' - ')  }}
      </h2>
      <h2 class="per center">{{  [movesPer, formattedTimePer].filter(e => e).join(' - ')  }}</h2>
      <Progress
        class="center progress"
        :value="percentageCompleted"
        :max="100"
      />
    </div>
    <h2 class="info center" v-else>Click To Start The Challenge !</h2>
    <main>
      <Transition name="fade" mode="out-in">
        <Layout
          :key="currentChallenge.process.patternIndex"
          v-model="currentChallenge.process.currentPattern.layout"
          @swap="handleClick"
        />
      </Transition>
    </main>

    <Modal v-model="showWinModal">
      <h1>you won the challenge!</h1>
      <Progress
        :value="store.score"
        :max="store.nextScore"
        barColor="#e58f65"
        style="border: 5px solid black;"
        :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
      />
      <Button black text="yay!" @pressed="showWinModal = false" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>{{ modalText }}</h1>
      <Button black text="adnwkhu!" @pressed="showLostModal = false" />
      <Button black text="restart" @pressed="restart" />
    </Modal>

    <Modal v-model="showPauseModal">
      <h1>Game is paused</h1>
      <Button black text="resume" @pressed="resume" />
      <Button black text="restart" @pressed="restart" />
      <Button black text="quit" @pressed="quit" />
    </Modal>
  </div>
</template>

<style scoped>
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.info {
  position: absolute;
  top: 20px;
  font-size: var(--font-size-md);
  white-space: nowrap;
}
.per {
  position: absolute;
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

@media screen and (max-width: 600px) {
  .progress {
    width: 90%;
  }
}
</style>

<script>
import { useStore } from "../../store/store.js";
import { Task } from "../../assets/js/Task";
import { formatTime } from "../../assets/js/Format";
import { modulo, setModulo } from "../../assets/js/LayoutShared.js";
import { ChallengeProcess } from "../../assets/js/challenges/Challenge";

export default {
  data() {
    const store = useStore();
    const { currentChallenge } = store;
    return {
      store,
      currentChallenge,
      showWinModal: false,
      showLostModal: false,
      showPauseModal: false,
      modalText: "",
      hasStarted: false,
    };
  },
  methods: {
    handleClick() {
      if (!this.hasStarted) {
        this.currentChallenge.process.start();
      }
      this.hasStarted = true;

      this.currentChallenge.process.handleClick();

      if (
        this.currentChallenge.process.state ===
        ChallengeProcess.STATE.IN_PROGRESS
      ) {
        setModulo(this.currentChallenge.process.patternModulo);
      }
    },
    pause() {
      this.showPauseModal = true;
      this.currentChallenge.process.pause();
    },
    resume() {
      this.showPauseModal = false;
      this.currentChallenge.process.resume();
    },
    restart() {
      this.currentChallenge.process.quit();
      this.currentChallenge.process.init();
      this.hasStarted = false;
      this.showPauseModal = false;
    },
    quit() {
      this.currentChallenge.process.quit();
      this.$router.push("/home");
    },
  },
  watch: {
    showWinModal() {
      if (!this.showWinModal) {
        this.$router.push("/home");
      }
    },
    showLostModal() {
      if (!this.showLostModal) {
        this.$router.push("/home");
      }
    },
    "currentChallenge.process.state"(newVal) {
      if (newVal === ChallengeProcess.STATE.WON) {
        this.showWinModal = true;
        Task.advanceTasks(
          this.currentChallenge.id,
          Task.TASK_TYPES.CHALLENGE,
          this.currentChallenge.settings.timeLimit -
            this.currentChallenge.process.currentTime
        );
        this.currentChallenge.process.init();
        return;
      }

      if (newVal === ChallengeProcess.STATE.LOST_TIME) {
        this.modalText = "no time left!";
        this.showLostModal = true;
        this.currentChallenge.process.init();
        return;
      }

      if (newVal === ChallengeProcess.STATE.LOST_MOVES) {
        this.modalText = "no moves left!";
        this.showLostModal = true;
        this.currentChallenge.process.init();
        return;
      }
    },
  },
  computed: {
    formattedTime() {
      return this.currentChallenge.process.timeRemaining !== -1
        ? formatTime(this.currentChallenge.process.timeRemaining)
        : "";
    },
    formattedTimePer() {
      return this.currentChallenge.process.patternTime !== -1
        ? formatTime(this.currentChallenge.process.patternTime)
        : "";
    },
    percentageCompleted() {
      return this.currentChallenge.settings.isInfinite
        ? 0
        : Math.floor(
            (this.currentChallenge.process.patternIndex /
              this.currentChallenge.settings.patternCount) *
              100
          );
    },
    moves() {
      return this.currentChallenge.process.movesRemaining === -1
        ? ""
        : this.currentChallenge.process.movesRemaining
    },
    movesPer() {
      return this.currentChallenge.process.patternMoves === -1
        ? ""
        : this.currentChallenge.process.patternMoves
    },
  },
};
</script>
