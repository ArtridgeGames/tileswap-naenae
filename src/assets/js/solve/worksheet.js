import { solvePattern, solveWithRotation } from './solve.js';

const base = [
  [-1, 1, 1, -1],
  [1,  0, 1,  1],
  [1,  1, 0,  1],
  [-1, 1, 1, -1],
]

const target = [
  [-1, 0, 0, -1],
  [0,  1, 0,  0],
  [0,  0, 1,  0],
  [-1, 0, 0, -1],
]

// Ax = b
// Mx = P

const { matrix, determinant, zerows } = solvePattern({
  state: base, target, modulo: 2
});
console.log(matrix);

// const { solutions, shortest } = solveWithRotation({
//   state: base, target, modulo: 2
// });

// console.log(solutions.map(s => s.matrix));