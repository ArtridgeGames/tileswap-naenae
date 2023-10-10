import { Layout, modulo } from '../Layout.js';
import { computed, ref } from 'vue';
import { FiniteField, FiniteFieldMatrix } from './FiniteField.js';
import { tilesToFlip } from '../Layout.js';
import { generateMoveMatrix } from './moveMatrix.js';
import { solvePattern, solveWithRotation } from './solve.js';

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