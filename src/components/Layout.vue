<script setup>
import Tile from "./Tile.vue";
</script>

<template>
  <div>
    <div>
      <div
        class="row"
        v-for="(row, rowIndex) in modelValue.matrix"
        :key="'row' + rowIndex + '' + currentChallenge?.currentPattern + modulo"
      >
        <Tile
          class="tile"
          :small="small"
          v-for="(tile, tileIndex) in row"
          :tile="tile"
          :data-tile="`${tile + 1}`"
          :visible="tile !== -1"
          :position="[rowIndex, tileIndex]"
          :key="
            rowIndex + '' + tileIndex + '' + currentChallenge?.currentPattern + modelValue.id
          "
          :class="{
            solution:
              devMode && solution && solution[rowIndex][tileIndex] >= 1,
            'color-blind': settings.colorBlind === 1,
            hover: shouldHover(rowIndex, tileIndex) && settings.hoverTiles === 0,
          }"
          :style="{
            outline: target
              ? `5px solid ${gradient[target[rowIndex][tileIndex]]}`
              : 'none',
          }"
          :data-moves="
            solution
              ? modulo !== 2
                ? solution[rowIndex][tileIndex]
                : ''
              : ''
          "
          @click="onTileClick(rowIndex, tileIndex)"
          @mouseover="tile !== -1 && mouseOver(rowIndex, tileIndex)"
          @mouseleave="tile !== -1 && mouseLeave(rowIndex, tileIndex)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  white-space: nowrap;
}
.tile {
  transition: outline 0.2s ease,
              box-shadow 0.2s ease,
              background 0.2s ease;
  position: relative;
}
.tile.hover {
  box-shadow: 0px 0px 0 5px var(--puzzle-white);
  background: var(--puzzle-white);
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

.color-blind::before {
  content: attr(data-tile);
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  color: black;
  transform: translate(-50%,-50%);
  font-size: var(--font-size-lg);
  -webkit-text-stroke: 1px white;
}
</style>

<script>
import { useStore } from "../store/store";
import { devMode } from "../assets/js/solve/solve";
import { gradient, tilesToFlip, modulo } from "../assets/js/Layout.js";

export default {
  props: ["modelValue", "small", "disabled", "solution", "target"],
  emits: ["update:modelValue", "swap"],
  data() {
    const { currentChallenge, settings } = useStore();
    return {
      currentChallenge,
      settings,
      gradient,
      hoveredTile: null
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
    shouldHover(row, tile) {
      if (this.hoveredTile === null) return false;
      return tilesToFlip.value.map(([dx, dy]) => [dx + this.hoveredTile.tile, dy + this.hoveredTile.row]).some(
        ([x, y]) => x === tile && y === row
      );
    },
    mouseOver(row, tile) {
      this.hoveredTile = {
        row, tile
      }
    },
    mouseLeave(row, tile) {
      this.hoveredTile = null;
    }
  },
};
</script>