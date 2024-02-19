import { FiniteField } from './fields/FiniteField.js';

/**
 * Generates a move matrix
 * @param {Number} width width of the layout
 * @param {Number} height height of the layout
 * @param {Number[][]} [state] Optional 2D array to exclude cells from the resulting matrix 
 * @param {Number} [modulo] Optional modulo to use in the field
 * @param {Number[][]} [tilesToFlip] Optional tiles to flip
 * @returns {import('./fields/FiniteFieldMatrix.js').FiniteFieldMatrix} The move matrix
 */
export const generateMoveMatrix = ({ width, height, state, modulo, tilesToFlip }) => {
  const moves = [];
  modulo = modulo ?? 2;
  tilesToFlip = tilesToFlip ??  [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [0, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
  ];

  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {

      if (state && state[row][column] === -1) continue;

      const M =
        Array(height).fill().map((_, row) => Array(width).fill().map(
          (e, i) => state && state[row][i] === -1 ? -1 : 0
        ));

      swapMatrix(row, column, M, modulo, tilesToFlip);

      moves.push(M);
    }
  }

  const field = FiniteField.fromOrder(modulo);

  const result = field.matrix(
    moves.map(M => M.flat().filter(e => e !== -1))
  ).transpose();

  return result;
}

const swapMatrix = (row, column, M, modulo, tilesToFlip) => {
  for (const delta of tilesToFlip) {
    const x = column + delta[0];
    const y = row + delta[1];
    if (x >= 0 && x < M[0].length
      && y >= 0 && y < M.length
      && M[y][x] !== -1) {
      M[y][x] = 1;
    }
  }
}