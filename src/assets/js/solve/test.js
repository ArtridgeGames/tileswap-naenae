import { FiniteField, FiniteFieldElement, FiniteFieldMatrix } from './FiniteField.js';

// const field = galois.createPrimeField(2n);

// const M = field.newMatrixFrom([
//   [1n,1n],
//   [0n,0n]
//]);

const field = FiniteField.fromOrder(2);

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

console.log(
  FiniteField.primeFactors(9)
)

// for (let i = 0; i < 1000; i++) {
//   const M = FiniteFieldMatrix.random(7, 7, field);
//   const P = M.pseudoInverse();

//   if (!M.multiply(P).multiply(M).equals(M)) {
//     console.log(M);
//   }

// }


const end = Date.now();
console.log(`Took ${end - start}ms`);