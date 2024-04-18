<script setup>
import Layout from "../../components/Layout.vue";
import Modal from "../../components/Modal.vue";
import Button from "../../components/buttons/Button.vue";
import Progress from "../../components/Progress.vue";
import PauseButton from "../../components/buttons/PauseButton.vue";
import ModuloViewer from "../../components/ModuloViewer.vue";
</script>

<template>
  <div>
    <div class="top info center">
      <div>
        <PauseButton @pause="pause" />
        <ModuloViewer :modulo="modulo" v-if="store.score >= store.categories[10] || modulo > 2" />
      </div>
      <div>
        <h2>{{ moves }}</h2>
        <h2>{{ formattedTime }}</h2>
      </div>
    </div>

    <div class="bottom info">
      <div class="per">
        <h2>{{ movesPer }}</h2>
        <h2>{{ formattedTimePer }}</h2>
      </div>
      <Progress
        class="progress"
        :value="percentageCompleted"
        :max="100"
        :text="percentageCompleted + '%'"
        barColor="var(--score-color)"
      />
    </div>

    <!-- <div>
      <h2 class="info center">
        {{  [formattedTime, moves, currentChallenge.settings.isInfinite ? null : percentageCompleted + "%"].filter(e => e).join(' - ')  }}
      </h2>
      <h2 class="per center">{{  [movesPer, formattedTimePer].filter(e => e).join(' - ')  }}</h2>
      <Progress
        class="center progress"
        :value="percentageCompleted"
        :max="100"
      />
    </div> -->

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
      <p style="font-size: var(--font-size-xs); margin: 14px 0">+ {{ currentChallenge.process.latestAddedScore }} score</p>
      <Progress
        :value="store.score"
        :max="store.nextScore"
        barColor="#e58f65"
        style="border: 5px solid black;"
        :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
      />
      <Button black text="yay!" @pressed="showWinModal = false; quit();" />
    </Modal>

    <Modal v-model="showLostModal">
      <h1>{{ modalText }}</h1>
      <Button black text="adnwkhu!" @pressed="showLostModal = false; quit();" />
      <Button black text="restart" @pressed="restart" />
    </Modal>

    <Modal v-model="showPauseModal">
      <h1>Game is paused</h1>
      <Button black text="resume" @pressed="resume" />
      <Button black text="restart" @pressed="restart" />
      <Button black text="quit" @pressed="showPauseModal = false; quit();" />
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

.top.info {
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;
}

.top.info > div {
  display: flex;
  justify-content: space-between;
}

.bottom.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
}

.bottom.info > .per {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.progress {
  width: 90%;
  height: 30px;
  background-color: var(--hl-color);
}

.modulo {
  margin: 20px 0;
  width: fit-content;
  display: flex;
  gap: 5px;
}
.modulo .balls {
  display: flex;
  align-items: center;
}
.modulo .balls > div {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 3px;
}
h2 {
  font-size: var(--font-size-sm);
  margin: 0;
}
</style>

<script>
import { useStore } from "../../store/store.js";
import { Task } from "../../assets/js/Task";
import { formatTime } from "../../assets/js/Format";
import { modulo, setModulo, gradient } from "../../assets/js/LayoutShared.js";
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
    };
  },
  mounted() {
    this.currentChallenge.process.start();
  },
  methods: {
    handleClick() {

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
      this.currentChallenge.process.start();
      this.showPauseModal = false;
      this.showLostModal = false;
    },
    quit() {
      this.currentChallenge.process.quit();
      this.$router.push("/home");
    },
  },
  watch: {
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
    }
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
