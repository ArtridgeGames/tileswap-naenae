import { generateMoveMatrix } from './moveMatrix.js';
import { FiniteField, FiniteFieldMatrix } from './FiniteField.js';


const inverses = new Map();
const determinants = new Map();

function getExcludeFromMatrix(matrix) {
  const width = matrix[0].length;
    return matrix
      .map((row, y) => row.map((cell, x) => cell === -1 ? y * width + x : null)).flat().filter(e => e || e === 0);
}

/**
 * Rotates a matrix 90 degrees clockwise.
 * @param {Array[]} state 
 * @returns {Array[]}
 */
export const rotateMatrix = (state) => {
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

/**
 * Rotates a matrix n times 90 degrees clockwise.
 * @param {Array[]} state
 * @param {Number} n
 * @returns {Array[]}
 */
export const rotateNTimes = (state, n) => {
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

/**
 * Solves the pattern 4 times (rotated 0, 90, 180, 270 degrees) and returns the shortest solution.
 * @param {Number[][]} state
 * @param {Number[][]} target
 * @param {Number[][]} tilesToFlip
 * @param {Number} modulo
 * @returns {{
 *  solutions: Solution[],
 *  zerows: Number,
 *  shortest: Number,
 *  determinant: Number,
 * }}
 */
export function solveWithRotation({ state, target, tilesToFlip, modulo }) {
  const states = [
    state,
    rotateMatrix(state),
    rotateNTimes(state, 2),
    rotateNTimes(state, 3),
  ]

  target = target ??
    states[0].map(row => row.map(e => e === -1 ? -1 : modulo - 1));

  const targets = [
    target,
    rotateMatrix(target),
    rotateNTimes(target, 2),
    rotateNTimes(target, 3),
  ]
  
  const counts = [];
  const solutions = [];
  let i = 0;
  let zerows = 0;
  for (const state of states) {
    const { matrix, determinant, zerows: z } = solvePattern({
      state,
      target: targets[i],
      modulo,
      tilesToFlip,
    });
    zerows = z;
    const count = matrix.flat().filter(e => e !== -1).reduce((acc, v) => acc + v, 0);
    counts.push(count);
    solutions.push(new Solution(rotateNTimes(matrix, 4 - i++), determinant, count));
  }

  const min = Math.min(...counts);
  const n = counts.indexOf(min);
  return {
    solutions,
    zerows,
    shortest: n,
    determinant: solutions[0].determinant.value,
  }
}

export function solvePattern({ state, target, tilesToFlip, modulo }) {

  modulo = modulo ?? 2;
  tilesToFlip = tilesToFlip ?? [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [0, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
  ];

  const field = FiniteField.fromOrder(modulo);

  const height = state.length;
  const width = state[0].length;

  const excluded = state.flat().filter(e => e === -1).length;

  target = target ?
    field.matrix(
      target.flat()
        .filter(e => e !== -1) // Remove excluded cells
        .map(e => [e]) // Wrap the cells
    )
  : field.matrix(
    new Array(width * height - excluded).fill().map(e => [modulo - 1])
  );

  const P = field.matrix(
    state.flat()
      .filter(e => e !== -1) // Remove excluded cells
      .map(e => [e]) // Wrap the cells
  ).subtract(target);

  const key = `${width}x${height},${getExcludeFromMatrix(state)},${tilesToFlip},${modulo}}`;

  let result = [];
  let zerows = 0;

  const M = generateMoveMatrix({ width, height, state, tilesToFlip, modulo });

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
    zerows = 1;
  } else {

    const augmentedMatrix = FiniteFieldMatrix.from2DArray(
      M.matrix.map((row, i) => row.concat(P.matrix[i])),
      M.field
    );

    const augmentedRref = augmentedMatrix.reducedRowEchelonForm();

    zerows = augmentedRref.matrix.filter(row => row.every(e => e.equals(0))).length - 1;

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
    determinant: det,
    zerows
  }
}