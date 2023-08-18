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
      
      <div class="devmode" 
        v-if="devMode && windowWidth < 600"
        @click="showDevMode = !showDevMode">
        <span>
          DEV
        </span>
      </div>

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
      <Layout v-model="layout" :solution="devMode ? solution : null" @swap="handleClick" />
    </main>

    <div class="devmode middle"
      :class="{
        left: windowWidth >= 600,
        center: windowWidth < 600
      }"
      v-if="devMode && (windowWidth < 600 ? showDevMode : true)">
      <h1>DevMode</h1>
      <div class="input">
        <input type="checkbox" v-model="solveOnClick"> Solve on click
      </div>
      <p>Det: {{ determinant }}</p>
      <hr>
      <div v-if="determinant !== 0">
        <p>Only one solution found.</p>
      </div>
      <div v-else>
        <p>Multiple solutions found:</p>
        <p v-for="(solution, i) in solutions" class="cursor" :class="{ selected: solutionIndex === i }" :key="i" @click="solutionIndex = i">{{ solution.moves }} moves</p>
      </div>
    </div>

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
.devmode {
  color: red;
  background-color: black;
  padding: 20px;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 10px;
  width: max-content;
}
.devmode hr {
  background-color: red;
  height: 2px;
}
.devmode p, .devmode h1, .devmode span {
  font-family: monospace;
  margin: 10px;
}
.devmode:has(span) {
  padding: 5px;
  margin: 0 auto;
}
.devmode h1 {
  text-align: center;
}
.devmode .input {
  float: right;
}
.devmode p.selected {
  outline: 2px solid red;
}
.cursor {
  cursor: pointer;
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
      showDevMode: false,
      solutions: [],
      solutionIndex: 0,
      determinant: 0,
      moves: 0,
      solveOnClick: false
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
  computed: {
    solution() {
      if (this.solutions.length === 0) return null;
      return this.solutions[this.solutionIndex].matrix;
    }
  },
  methods: {
    handleClick(index, row, tile) {
      this.moves++;

      if (devMode.value) {
        if (this.solveOnClick) {
          this.updateSolutions();
        } else {
          for (const solution of this.solutions) {
            solution.matrix[row][tile] = (((solution.matrix[row][tile] - 1) % modulo.value) + modulo.value) % modulo.value;
          }
        }
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
          if (devMode.value) {
            this.updateSolutions();
          }
        } catch (e) {
          console.error(e);
          this.solution = this.layout.matrix.map(row => row.map(tile => 0));
        }
      })
    },
    updateSolutions() {
      const { solutions, shortest, determinant } = solve(this.layout.matrix);
      this.solutionIndex = shortest;
      this.solutions = solutions;
      this.determinant = determinant;
    }
  },
  mounted() {
    this.randomize();

    watch(devMode, (newVal) => {
      if (newVal) {
        this.updateSolutions();
      }
    })
  }
}
</script>