<script setup>
import { useStore } from "../../store/store.js";
import LayoutVue from "../../components/Layout.vue";
import Button from "../../components/buttons/Button.vue";
import DifficultySlider from "../../components/DifficultySlider.vue";
import Modal from "../../components/Modal.vue";
import Progress from "../../components/Progress.vue";
import LinkButton from "../../components/buttons/LinkButton.vue";
</script>

<template>
  <div>
    <div class="top-menu">
      <DifficultySlider v-model="difficultyRange" :max="max" />
      <Button text="randomize" @pressed="randomize" />
      <Button text="reset" @pressed="reset" />
    </div>

    <p
      v-show="moves > 0"
      class="move-counter top"
      :class="{
        left: windowWidth < 600,
        center: windowWidth >= 600,
      }"
    >
      {{ moves }} move{{ moves > 1 ? "s" : "" }}
    </p>

    <div class="top right" v-if="showBack">
      <LinkButton text="back" to="/home" />
    </div>

    <main>
      <Transition name="fade" mode="out-in">
        <LayoutVue
          :key="modulo + layout.id"
          v-model="layout"
          @swap="handleClick"
        />
      </Transition>
    </main>

    <Modal v-model="showModal">
      <div v-if="modalPage === 0">
        <h1>you won in {{ moves }} move{{ moves > 1 ? "s" : "" }}!</h1>
        <Progress
          :value="store.score"
          :max="store.nextScore"
          barColor="#e58f65"
          style="border: 5px solid black"
          :text="Math.floor(store.score) + (store.nextScore === 0 ?  '' : ' / ' + store.nextScore)"
        />
        <Button v-if="firstCompletion" black text="next" @pressed="modalPage++" />
        <Button v-else black text="yay!" @pressed="showModal = false" />
      </div>
      <div v-else-if="modalPage === 1">
        <h1>By finishing this pattern, you've gained a bit of score.</h1>
        <h1>The score you gain is proportional to the difficulty chosen on the slider.</h1>
        <h1>Reach the treshold at the end of the bar to unlock new things</h1>

        <Button black text="ok!" @pressed="modalPage++; showBack = true" />
      </div>
      <div v-else-if="modalPage === 2">
        <h1>If you ever get stuck, click on hint to get a little help.</h1>
        <h1>However, doing so will decrease the score you gain when you win.</h1>

        <Button black text="ok!" @pressed="modalPage++;" />
      </div>
      <div v-else-if="modalPage === 3">
        <h1>However you might be tired of playing on the same pattern.</h1>
        <h1>Click on the back button to see what other options you have.</h1>
        <h1>Reach a score of 50 to unlock new gamemodes.</h1>
        <Button black text="ok!" @pressed="showModal = false; modalPage=0" />
      </div>
    </Modal>
  </div>
</template>

<style scoped>
.top-menu {
  width: 240px;
  margin-left: 20px;
}
main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.move-counter {
  font-size: 30px;
}

@media screen and (max-width: 600px) {
  .top-menu {
    position: absolute;
    bottom: 0;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    margin-bottom: 10px;
  }
  .move-counter {
    margin-left: 20px;
  }
}
</style>
<script>
import { modulo, setModulo, tilesToFlip } from "../../assets/js/LayoutShared.js";
import { Layout } from "../../assets/js/Layout.js";
import { Task } from "../../assets/js/Task";
import { useWindow } from "../../assets/js/window.js";

export default {
  data() {
    const store = useStore();
    const layout = store.currentLayout;

    const { width: windowWidth } = useWindow();

    return {
      firstCompletion: true,
      modalPage: 0,
      windowWidth,
      store,
      layout,
      savedMatrix: [],
      difficultyRange: [3, 5],
      latestDifficulty: store.difficulty,
      latestScore: 0,
      internalModulo: modulo.value,
      showModal: false,
      showBack: false,
      moves: 0,
    };
  },
  watch: {
    internalModulo(newVal) {
      setModulo(newVal);
      this.randomize();
    },
    showModal() {
      if (!this.showModal) {
        this.firstCompletion = false;
        if (this.store.isRandomFreeplay) {
          this.store.setLayout(Layout.getRandomLayout());
          this.layout = this.store.currentLayout;
        }
        this.randomize();
      }
    },
  },
  computed: {
    max() {
      return (modulo.value - 1) * this.layout.nTiles();
    }
  },
  methods: {
    handleClick(index, row, tile) {
      this.moves++;

      if (this.layout.isSolved(modulo.value)) {
        this.store.stats.layoutsSolved++;
        this.showModal = true;
        this.latestScore = this.layout.computeScore(this.latestDifficulty);
        this.store.score += this.latestScore;
        Task.advanceTasks(
          this.layout.id,
          Task.TASK_TYPES.FREEPLAY,
          this.store.difficulty
        );
      }
    },
    randomize() {
      this.moves = 0;
      const min = this.difficultyRange[0];
      const max = this.difficultyRange[1];
      this.latestDifficulty = Math.floor(Math.random() * (max - min + 1) + min)
      this.layout = this.layout.generatePosition(
        this.latestDifficulty,
        modulo.value,
        tilesToFlip.value
      );
      this.savedMatrix = this.layout.matrix.map((row) => row.map((tile) => tile));
    },
    reset() {
      this.moves = 0;
      this.layout.matrix = this.savedMatrix.map((row) => row.map((tile) => tile));
    },
  },
  mounted() {
    this.randomize();
  },
};
</script>