<script setup>
import Tile from "./Tile.vue";
</script>

<template>
  <div>
    <Transition name="list" mode="out-in">
      <div :key="currentChallenge?.currentPattern">
        <div
          class="row"
          v-for="(row, rowIndex) in modelValue.matrix"
          :key="'row' + rowIndex + '' + currentChallenge?.currentPattern"
        >
          <Tile
            :small="small"
            v-for="(tile, tileIndex) in row"
            :tile="tile"
            :visible="tile !== -1"
            :key="
              rowIndex + '' + tileIndex + '' + currentChallenge?.currentPattern
            "
            :class="{
              solution:
                devMode && solution && solution[rowIndex][tileIndex] >= 1,
            }"
            :style="{
              outline: target
                ? `5px solid ${gradient[target[rowIndex][tileIndex]]}`
                : 'none',
            }"
            :data-moves="solution ? solution[rowIndex][tileIndex] : ''"
            @click="onTileClick(rowIndex, tileIndex)"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.row {
  white-space: nowrap;
}
.solution {
  outline: 5px solid red !important;
}
.solution::before {
  content: attr(data-moves);
  position: absolute;
  z-index: 10;
  transform: translate(10px, 10px);
  color: red;
}
</style>

<script>
import { useStore } from "../store/store";
import { devMode } from "../assets/js/solve/solve";
import { gradient } from "../assets/js/Layout.js";

export default {
  props: ["modelValue", "small", "disabled", "solution", "target"],
  emits: ["update:modelValue", "swap"],
  data() {
    const store = useStore();
    return {
      currentChallenge: store.currentChallenge,
      gradient,
    };
  },
  methods: {
    onTileClick(row, tile) {
      if (
        this.disabled === undefined &&
        this.modelValue.matrix[row][tile] !== -1
      ) {
        const store = useStore();

        const copy = this.modelValue.copy();
        const count = copy.swapTiles(row, tile);
        store.stats.tilesSwapped += count;

        this.$emit("update:modelValue", copy);
        this.$emit(
          "swap",
          row * this.modelValue.matrix[0].length + tile,
          row,
          tile
        );
      }
    },
  },
};
</script>