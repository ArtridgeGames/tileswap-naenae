<script setup>
import Tile from './Tile.vue';
</script>

<template>
  <div class="row" v-for="(row, rowIndex) in modelValue.matrix" :key="'row'+rowIndex">
    <Tile class="tile" :small="small"
      v-for="(tile, tileIndex) in row"
      :color="tile === 1 ? 'white' : 'black'"
      :visibility="tile === -1 ? 'hidden' : 'visible'" :key="rowIndex + '' + tileIndex"
      @click="onTileClick(rowIndex, tileIndex)" />
  </div>
</template>

<style scoped>
.row {
  white-space: nowrap;
}
</style>

<script>
import { useStore } from '../store/store';

export default {
  props: ['modelValue', 'small', 'disabled'],
  emits: ['update:modelValue', 'swap'],
  methods: {
    onTileClick(row, tile) {
      if (this.disabled === undefined) {
        const store = useStore();

        const copy = this.modelValue.copy();
        const count = copy.swapTiles(row, tile);
        store.stats.tilesSwapped += count;

        this.$emit('update:modelValue', copy);
        this.$emit('swap');
      }
    }
  }
}
</script>