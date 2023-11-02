<script setup>
import DevMode from '../components/DevMode.vue';
import Layout from '../components/Layout.vue';
import ModuloSlider from '../components/ModuloSlider.vue';
import LinkButton from '../components/buttons/LinkButton.vue';
import Button from '../components/buttons/Button.vue';
import Modal from '../components/Modal.vue';
</script>


<template>
  <div>
    <DevMode
      v-model:show="showDevMode"
      v-model:solution-index="solutionIndex"
      v-model:solve-on-click="solveOnClick"
      :solutions="solutions"
      :determinant="determinant"
    />

    
    <main>
      <Layout @swap="handleSwap(base, $event)" v-model="base" :solution="solution" />
      <Layout @swap="handleSwap(target, $event)" v-model="target" />
    </main>
    
    <div class="top right">
      <LinkButton text="back" to="/freeplayGame" />
      <ModuloSlider v-model="internalModulo" />
      <Button @click="showModal = true" text="export" />
    </div>

    <Modal v-model="showModal">
      <h1>Export</h1>
      <textarea class="export" readonly v-model="formatted"></textarea>
      <Button text="close" @click="showModal = false" />
    </Modal>
  </div>
</template>

<style scoped>
main {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: row;
  gap: 200px;
}
textarea {
  display: block;
  width: 100%;
  height: 500px;
}
</style>

<script>
import { useStore } from '../store/store.js';
import { modulo, setModulo } from '../assets/js/Layout.js';
import { solveWithRotation } from '../assets/js/solve/solve.js';

export default {
  data() {

    const store = useStore();
    const layout = store.currentLayout;

    return {
      internalModulo: modulo.value,
      showDevMode: true,
      solutionIndex: 0,
      solveOnClick: false,
      solutions: [],
      determinant: 0,
      showModal: false,
      base: layout.copy(),
      target: (() => {
        const l = layout.copy();
        l.setAllTiles(1);
        return l;
      })(),
    }
  },
  computed: {
    solution() {
      if (this.solutions.length === 0) return null;
      return this.solutions[this.solutionIndex].matrix;
    },
    formatted() {
      console.log(this.solutions[this.solutionIndex]);
      return  JSON.stringify({
        moves: this.solutions[this.solutionIndex]?.moves,
        base: this.base.matrix,
        target: this.target.matrix,
        solution: this.solution?.flat().map((x, i) => [x, i]).filter(([x,i]) => x === this.internalModulo - 1).map(([x,i]) => i),
        unlockCategory: 0
      }, null, 2);
    }
  },
  watch: {
    internalModulo(newVal) {
      setModulo(newVal);
      this.solve();
    }
  },
  methods: {
    handleSwap(layout, tile) {
      const x = Math.floor(tile / layout.width);
      const y = tile % layout.width;
      layout.swapTiles(x, y, -1);
      layout.setTile(x, y, (layout.getTile(x, y) + 1) % modulo.value);
      this.solve();
    },
    solve() {
      const { solutions, zerows, shortest, determinant } = solveWithRotation({
        state: this.base.matrix,
        target: this.target.matrix,
        modulo: modulo.value,
      });
      this.solutions = solutions;
      this.determinant = determinant;
      this.solutionIndex = shortest;
    }
  },
  mounted() {
    this.solve();
  }
}
</script>