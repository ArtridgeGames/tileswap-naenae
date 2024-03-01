<template>
  <Transition name="fade" >
      <div
        class="devmode middle"
        :class="{
          left: windowWidth >= 600,
          center: windowWidth < 600,
        }"
        v-if="show"
      >
        <div class="close-dev" @click="close" v-if="isFreeplayGame">x</div>
        <h1>DevMode</h1>
  
        <div class="input" v-if="isFreeplayGame">
          <input type="checkbox" @input="emit" />
          re-solve on click
        </div>
        <p>Det: {{ determinant }}</p>
  
        <hr />
  
        <div v-if="determinant !== 0">
          <p>Only one solution found:</p>
          <p>{{ solutions[0].moves }} moves</p>
        </div>
  
        <div v-else>
          <p>Multiple solutions found:</p>
          <p
            v-for="(solution, i) in solutions"
            class="cursor"
            :class="{ selected: solutionIndex === i }"
            :key="i"
            @click="$emit('update:solutionIndex', i)"
          >
            {{ solution.moves }} moves
          </p>
        </div>

        <div v-if="isFreeplayGame" class="open" @click="open">
          Open in editor
        </div>

      </div>
    </Transition>
</template>

<style scoped>
.devmode {
  color: var(--devmode-color);
  background-color: black;
  padding: 20px;
  font-size: var(--font-size-sm);
  margin-left: 10px;
  width: max-content;
}
.devmode hr {
  background-color: var(--devmode-color);
  height: 2px;
}
.devmode p,
.devmode h1,
.devmode h1 {
  text-align: center;
}
.devmode .input {
  float: right;
}
.devmode p.selected {
  outline: 2px solid var(--devmode-color);
}

.devmode .open {
  border: 2px solid red;
  width: fit-content;
  padding: 10px;
  border-radius: 6px;
  margin: 0 auto;
}

.close-dev {
  float: right;
  background-color: black;
  color: var(--devmode-color);
  outline: 2px solid var(--devmode-color);
  border-radius: 2px;
  cursor: pointer;
  width: 25px;
  height: 25px;
  text-align: center;
}
</style>

<script>

import { setDevMode } from "../assets/js/solve/devmode.js";
import { useWindow } from "../assets/js/window.js";

export default {
  props: {
    show: Boolean,
    solutionIndex: Number,
    solveOnClick: Boolean,
    solutions: Array,
    determinant: Number,
  },
  emits: ["update:show", "update:solutionIndex", "update:solveOnClick"],
  data() {
    const { width: windowWidth } = useWindow();
    return {
      windowWidth,
      isFreeplayGame: this.$router.currentRoute.value.name === "freeplayGame",
    }
  },
  methods: {
    emit(event) {
      this.$emit("update:solveOnClick", event.target.checked);
    },
    open() {
      this.$router.push('/editor');
    },
    close() {
      setDevMode(false);
      this.$emit("update:show", false);
    }
  },
  computed: {
    solution() {
      if (this.solutions.length === 0) return null;
      return this.solutions[this.solutionIndex].matrix;
    }
  }
}
</script>