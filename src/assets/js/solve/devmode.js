import { modulo } from '../LayoutShared.js';
import { computed, ref } from 'vue';
import { tilesToFlip } from '../LayoutShared.js';
import { solveWithRotation } from './solve.js';

const active = ref(
  false
);
if (globalThis.window && !window.hasOwnProperty('devMode')) {
  Object.defineProperty(window, 'devMode', {
    get: () => active.value,
    set: (value) => {
      if (typeof value !== 'boolean') throw new Error('devMode value must be a boolean');
      active.value = value
    }
  });
}
export const devMode = computed(() => active.value);
export const setDevMode = val => {
  active.value = val
}

export const solve = (state) => {
  return solveWithRotation({
    state,
    tilesToFlip: tilesToFlip.value,
    modulo: modulo.value,
  })
}