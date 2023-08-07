import { Matrix, determinant, inverse, pseudoInverse } from 'ml-matrix';
import matrix from 'matrix-js';
import { Layout } from '../layout.js';
import { computed, ref } from 'vue';

const active = ref(false);
if (globalThis.window) {
  Object.defineProperty(window, 'devMode', {
    get: () => active.value,
    set: (value) => {
      if (value && process.env.NODE_ENV !== 'development') throw 'Cannot activate devMode in production';
      active.value = value
    }
  });
}
export const devMode = computed(() => active.value);

const map = new Map();

export const solve = (state) => {

  const height = state.length;
  const width = state[0].length;

  const key = `${width}x${height},${Layout.getExcludeFromMatrix(state)}`;

  let I;
  if (map.has(key)) {
    I = map.get(key);
  } else {
    const M = generateMoveMatrix(width, height, state);
    const det = determinant(M);
    I = det === 0 ? 
    new Matrix(matrix(matrix(M.data.map(row => Array.from(row))).inv()).map(e => (e + 2) % 2))
    : inverse(M).add(2).mod(2);
    map.set(key, I);
  }

  const P = new Matrix(state.flat().filter(e => e !== -1).map(e => [e === 1 ? 0 : 1]));

  const result = I.mmul(P).add(2).mod(2).data.map(e => e[0]);

  const smallest = Math.min(...result.filter(e => e > 0));
  result.forEach((e, i) => result[i] = (Math.round(result[i] / smallest) + 2) % 2);

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
  const dirx = [-1, 0, 1];
  const diry = [-1, 0, 1];

  for (const x of dirx) {
    for (const y of diry) {
      if (row + y >= 0 && row + y < M.rows
        && column + x >= 0 && column + x < M.columns
        && M.get(row+y, column+x) !== -1) {
          M.set(row+y, column+x, 1);
        }
    }
  }
}

export const generateMoveMatrix = (width, height, state) => {
  const flips = [];
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      if (state && state[row][column] === -1) continue;
      const M = new Matrix(
        Array(height).fill().map((_, row) => Array(width).fill(0).map(
          (e, i) => state && state[row][i] === -1 ? -1 : e
        )),
      );
      swapMatrix(row, column, M);
      flips.push(M);
    }
  }
  const data = flips.map(M => M.data.map(e => Array.from(e)).flat().filter(e => e !== -1));
  
  return (new Matrix(data)).add(2).mod(2);
}