import { solvePattern, solveWithRotation } from './solve.js';

const base = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

const target = [
  [2,2,2],
  [2,2,2],
  [2,2,2]
]

// Ax = b
// Mx = P

// const { matrix, determinant, zerows } = solvePattern({
//   state: base, target, modulo: 5
// });

const { solutions, shortest } = solveWithRotation({
  state: base, target, modulo: 3
});

console.log(solutions[shortest].matrix);