<script setup>
import Tile from "./Tile.vue";
</script>

<template>
  <div>
    <div>
      <div
        class="row"
        v-for="(row, rowIndex) in matrix"
        :key="'row' + rowIndex + '' + currentChallenge?.currentPattern + modulo"
      >
        <Tile
          class="tile"
          :small="small"
          :enableClickOnHiddenTiles="enableClickOnHiddenTiles"
          v-for="(tile, tileIndex) in row"
          :tile="tile"
          :data-tile="`${tile + 1}`"
          :visible="tile !== -1"
          :layout="modelValue"
          
          :position="[rowIndex + paddingY, tileIndex + paddingX]"
          :key="
            rowIndex + paddingX + '' + tileIndex + paddingY + '' + currentChallenge?.currentPattern + modelValue.id
          "
          :class="{
            solution:
              devMode && solution && solution[rowIndex + paddingY][tileIndex + paddingX] >= 1,
            'color-blind': settings.colorBlind === 1,
            highlight: highlightedTiles?.some(
              ([x, y]) => x === tileIndex + paddingX && y === rowIndex + paddingY
            ),
            hover: (shouldHover(rowIndex + paddingY, tileIndex + paddingX) && settings.hoverTiles === 1 && disabled !== '') || forcedHover?.some(([x, y]) => x === tileIndex + paddingX && y === rowIndex + paddingY)
          }"
          :data-moves="
            solution
              ? modulo !== 2
                ? solution[rowIndex + paddingY][tileIndex + paddingX]
                : ''
              : ''
          "
          :borderColor="target? gradient[target[rowIndex + paddingY][tileIndex + paddingX]]: 'none'"
          @[EVENTS.TOUCHSTART]="onTileClick(rowIndex + paddingY, tileIndex + paddingX)"
          @mouseover="tile !== -1 && mouseOver(rowIndex + paddingY, tileIndex + paddingX)"
          @mouseleave="tile !== -1 && mouseLeave(rowIndex + paddingY, tileIndex + paddingX)"
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
import { devMode } from "../assets/js/solve/devmode";
import { gradient, tilesToFlip, modulo } from "../assets/js/LayoutShared.js";
import { EVENTS } from '../assets/js/events.js';

export default {
  props: ["modelValue", "small", "disabled", "solution", "target", "forcedHover", "highlightedTiles", "enableClickOnHiddenTiles"],
  emits: ["update:modelValue", "swap", "tileClick"],
  data() {
    const { currentChallenge, settings } = useStore();
    return {
      currentChallenge,
      settings,
      gradient,
      hoveredTile: null,
    };
  },
  computed: {
    matrix() {
      return this.modelValue.actualSize().matrix;
    },
    paddingX() {
      return this.modelValue.actualSize().paddingLeft;
    },
    paddingY() {
      return this.modelValue.actualSize().paddingTop;
    }
  },
  methods: {
    onTileClick(row, tile) {
      this.$emit(
        "tileClick",
        row * this.modelValue.matrix[0].length + tile,
        row,
        tile
      );
      if (
        this.disabled === undefined || this.disabled === false &&
        this.modelValue.matrix[row][tile] !== -1
      ) {
        const store = useStore();

        const copy = this.modelValue.copy();
        const count = copy.swapTiles(row, tile, 1, modulo.value, tilesToFlip.value);
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