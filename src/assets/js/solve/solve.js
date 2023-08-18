import { Layout, modulo } from '../Layout.js';
import { computed, ref, watch } from 'vue';
import { FiniteField, FiniteFieldMatrix } from './FiniteField.js';
import { tilesToFlip } from '../Layout.js';

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

const inverses = new Map();
const determinants = new Map();

const rotateMatrix = (state) => {
  const result = [];
  for (let column = 0; column < state[0].length; column++) {
    const row = [];
    for (let r = state.length - 1; r >= 0; r--) {
      row.push(state[r][column]);
    }
    result.push(row);
  }
  return result;
}

const rotateNTimes = (state, n) => {
  for (let i = 0; i < n; i++) {
    state = rotateMatrix(state);
  }
  return state;
}

class Solution {
  constructor(matrix, determinant, moves) {
    this.matrix = matrix;
    this.determinant = determinant;
    this.moves = moves;
  }
}

export const solve = (state) => {

  const states = [
    state,
    rotateMatrix(state),
    rotateNTimes(state, 2),
    rotateNTimes(state, 3),
  ]
  
  const counts = [];
  const solutions = [];
  let i = 0;
  for (const state of states) {
    const { matrix, determinant } = solvePattern(state);
    const count = matrix.flat().filter(e => e !== -1).reduce((acc, v) => acc + v, 0);
    counts.push(count);
    solutions.push(new Solution(rotateNTimes(matrix, 4 - i++), determinant, count));
  }

  const min = Math.min(...counts);
  const n = counts.indexOf(min);
  return {
    solutions,
    shortest: n,
    determinant: solutions[0].determinant.value,
  }
}


function solvePattern(state) {

  const field = FiniteField.fromOrder(modulo.value);

  const height = state.length;
  const width = state[0].length;

  const P = field.matrix(
    state.flat()
      .filter(e => e !== -1) // Remove excluded cells
      .map(e => [(e + 1) % modulo.value])); // Invert the cells


  const key = `${width}x${height},${Layout.getExcludeFromMatrix(state)},${tilesToFlip.value},${modulo.value}}`;

  let result = [];

  const M = generateMoveMatrix(width, height, state);

  let det;
  if (determinants.has(key)) {
    det = determinants.get(key);
  } else {
    det = M.determinant();
    determinants.set(key, det);
  }

  if (!det.equals(0)) {
    let I;
    if (inverses.has(key)) {
      I = inverses.get(key);
    } else {
      I = M.inverse();
      inverses.set(key, I);
    }
    result = I.multiply(P).matrix.map(e => e[0].value);
  } else {

    const augmentedMatrix = FiniteFieldMatrix.from2DArray(
      M.matrix.map((row, i) => row.concat(P.matrix[i])),
      M.field
    );

    const augmentedRref = augmentedMatrix.reducedRowEchelonForm();

    const rrefLastCol = FiniteFieldMatrix.from2DArray(
      augmentedRref.matrix.map(row => [row[row.length - 1]]),
      augmentedRref.field
    );

    result = new Array(M.width).fill().map(e => 0);

    for (let row = 0; row < rrefLastCol.height; row++) {
      const el = rrefLastCol.matrix[row][0];
      if (el.equals(0)) continue;
      for (let column = 0; column < augmentedRref.width - 1; column++) {
        const pivot = augmentedRref.matrix[row][column];
        if (pivot.equals(1)) {
          result[column] = el.value;
          break;
        }
      }
    }
  }


  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      if (state[row][column] === -1) {
        const i = row * width + column;
        result.splice(i, 0, -1);
      }
    }
  }

  return {
    matrix: result.map((_, i) => result.slice(i * width, (i + 1) * width)).filter(e => e.length),
    determinant: det
  }
}

const swapMatrix = (row, column, M) => {
  for (const delta of tilesToFlip.value) {
    const x = column + delta[0];
    const y = row + delta[1];
    if (x >= 0 && x < M[0].length
      && y >= 0 && y < M.length
      && M[y][x] !== -1) {
      M[y][x] = modulo.value - 1;
    }
  }
}

/**
 * Generates a move matrix
 * @param {Number} width width of the layout
 * @param {Number} height height of the layout
 * @param {Number[][]} [state] Optional 2D array to exclude cells from the resulting matrix 
 * @returns 
 */
export const generateMoveMatrix = (width, height, state) => {
  const moves = [];

  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {

      if (state && state[row][column] === -1) continue;

      const M =
        Array(height).fill().map((_, row) => Array(width).fill().map(
          (e, i) => state && state[row][i] === -1 ? -1 : 0
        ));

      swapMatrix(row, column, M);

      moves.push(M);
    }
  }

  const field = FiniteField.fromOrder(modulo.value);

  const result = field.matrix(
    moves.map(M => M.flat().filter(e => e !== -1))
  ).transpose();

  return result;
}