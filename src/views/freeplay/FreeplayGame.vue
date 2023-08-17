<script setup>
import { useStore } from '@/store/store.js'
import Layout from '../../components/Layout.vue';
import Button from "../../components/Button.vue";
import DifficultySlider from "../../components/DifficultySlider.vue";
import ModuloSlider from '../../components/ModuloSlider.vue';
import Modal from "../../components/Modal.vue";
import LinkButton from "../../components/LinkButton.vue";
import { useWindow } from "@/assets/js/window.js"
</script>

<template>
  <div>
    <div class="top-menu">
      <Button text="randomize" @click="randomize" />
      <DifficultySlider v-model="difficulty" />
    </div>

    <p v-show="moves > 0" class="move-counter top" :class="{
      left: windowWidth < 600,
      center: windowWidth >= 600
    }">{{ moves }} move{{ moves > 1 ? 's' : '' }}</p>

    <div class="top right">
      <LinkButton text="back" to="/freeplaySelection" />
      <ModuloSlider v-model="internalModulo"/>
    </div>

   <main>

      <h2 v-if="devMode" class="devmode-info">{{ error }}</h2>

      <Layout v-model="layout" :solution="solution" @swap="handleClick" />
  
    </main>

    <Modal v-model="showModal">
      <h1>you won in {{ moves }} move{{ moves > 1 ? 's' : '' }}!</h1>
      <Button black text="yay!" @click="showModal = false" />
    </Modal>
  </div>

</template>

<style scoped>
.top-menu{
  width: 240px;
  margin-left: 20px;
}
main{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.move-counter {
  font-size: 30px;
}
.devmode-info {
  color: red;
  text-align: center;
}

@media screen and (max-width: 600px) {
  .top-menu{
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
import { solve, devMode } from '../../assets/js/solve/solve';
import { modulo, setModulo } from '../../assets/js/Layout.js';
import { watch } from 'vue';
export default {
  data() {
    const store = useStore();
    const layout = store.currentLayout;
    
    const { width: windowWidth } = useWindow();

    return {
      windowWidth,
      store,
      layout,
      difficulty: store.difficulty,
      internalModulo: modulo.value,
      showModal: false,
      solution: layout.matrix.map(row => row.map(tile => 0)),
      moves: 0,
      error: ''
    };
  },
  watch: {
    difficulty() {
      this.store.difficulty = this.difficulty;
    },
    internalModulo(newVal) {
      setModulo(newVal);
      this.randomize();
    },
    showModal() {
      if (!this.showModal) {
        this.randomize();
      }
    }
  },
  methods: {
    handleClick(index, row, tile) {
      this.moves++;

      if (!this.error && devMode.value) {
        this.solution[row][tile] = (((this.solution[row][tile] - 1) % modulo.value) + modulo.value) % modulo.value;
      }


      if (this.layout.isSolved()) {
        this.store.stats.layoutsSolved++;
        this.showModal = true;
      }
    },
    randomize() {
      this.moves = 0;
      this.layout = this.layout.generatePosition(this.difficulty);
      this.$nextTick(() => {
        try {
          if (devMode.value) this.solution = solve(this.layout.matrix);
          this.error = '';
        } catch (e) {
          console.error(e);
          this.error = 'layout could not be solved';
          this.solution = this.layout.matrix.map(row => row.map(tile => 0));
        }
      })
    }
  },
  mounted() {
    this.randomize();

    watch(devMode, (newVal) => {
      if (newVal) {
        this.solution = solve(this.layout.matrix);
      } else {
        this.solution = this.layout.matrix.map(row => row.map(tile => 0));
      }
    })
  }
}
</script>