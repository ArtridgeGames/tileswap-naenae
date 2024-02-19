import { FiniteFieldMatrix, FiniteField } from './fields/FiniteField.js';
import { generateMoveMatrix } from './moveMatrix.js';

/**
 * Solve using Pierre's theorem
 * @param {Number[][]} initialState 
 */
const solve = (initialState) => {
  const field = FiniteField.fromOrder(2);

  const width = initialState[0].length;
  const height = initialState.length;
  
  const parsedState = field.matrix(initialState.flat().filter(e => e !== -1).map(e => [e]));
  
  const moveMatrix = generateMoveMatrix({
    width,
    height,
    state: initialState
  });

  // u(n) = u(n-1) + M * (1 - u(n-1))
  const u = n => {
    if (n === 0) return parsedState;
    const previous = u(n - 1);
    return previous.add(moveMatrix.multiply(invert(previous)));
  }

  const target = FiniteFieldMatrix.ones(parsedState.width, parsedState.height, field);

  let i = 0;
  let value = u(i);
  while (!value.equals(target)) {
    i++;
    console.log(value.toSquareMatrix(3));
    value = u(i);
  }
  console.log(value.toSquareMatrix(3));
  console.log(`Solved in ${i} steps`);
}

/**
 * Inverts a matrix
 * @param {FiniteFieldMatrix} M 
 * @returns {FiniteFieldMatrix}
 */
const invert = (M) => {
  return M.field.matrix(M.matrix.map(row => 
    row.map(e => e.add(1))))
}

// const initialState = [
//   [0, 1,  0],
//   [-1,1, -1],
//   [-1,0, -1]
// ];

const initialState = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

solve(initialState);

// const moveMatrix = generateMoveMatrix(initialState);

// console.log(moveMatrix);

// let state = invert(initialState.toColumnVector());
// console.log(state.toSquareMatrix(3));

// state = invert(state).add(moveMatrix.multiply(state));

// console.log(state.toSquareMatrix(3));