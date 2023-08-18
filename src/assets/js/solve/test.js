import { FiniteField, FiniteFieldElement, FiniteFieldMatrix } from './FiniteField.js';

// const field = galois.createPrimeField(2n);

// const M = field.newMatrixFrom([
//   [1n,1n],
//   [0n,0n]
//]);

const field = FiniteField.fromOrder(9);

// const M = FiniteFieldMatrix.random(3, 3, field);
// const M = field.matrix([
//   [1, 1, 0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 1, 1, 0, 0, 0],
//   [0, 1, 1, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1, 0],
//   [0, 1, 1, 0, 1, 0, 1, 1],
//   [0, 0, 0, 1, 0, 1, 1, 0],
//   [0, 0, 0, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 0, 1, 1]
// ]);
// const M = field.matrix([
//   [1, 1, 1, 1, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1, 0, 1],
//   [1, 1, 1, 1, 1, 0, 1, 1],
//   [1, 1, 1, 1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 1, 1, 1, 1],
//   [1, 1, 0, 1, 1, 1, 1, 1],
//   [1, 0, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1]
// ]);

// const M = field.matrix([
//   [1, 0, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0, 0],
//   [0, 1, 0, 1, 0, 0],
//   [0, 1, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 1]
// ]);

const start = Date.now();

for (let i = 0; i < field.order; i++) {
  const e = field.el(i);
  console.log(e);
}



const end = Date.now();
console.log(`Took ${end - start}ms`);