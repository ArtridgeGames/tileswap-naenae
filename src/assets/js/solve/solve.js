import { Layout, modulo } from '../Layout.js';
import { computed, ref, watch } from 'vue';
import { FiniteField, FiniteFieldMatrix } from './FiniteField.js';
import { tilesToFlip } from '../Layout.js';

const active = ref(
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
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

const map = new Map();


export const solve = (state) => {

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
  const det = M.determinant();
  console.log('Det:', det.toString());
  if (!det.equals(0)) {
    let I;
    if (map.has(key)) {
      I = map.get(key);
    } else {
      I = M.inverse();
      map.set(key, I);
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

  return result.map((_, i) => result.slice(i * width, (i + 1) * width)).filter(e => e.length);
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