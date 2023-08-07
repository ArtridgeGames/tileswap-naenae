import { Matrix, determinant, inverse, pseudoInverse } from 'ml-matrix';
import matrix from 'matrix-js';
import { Layout } from '../layout.js';
import { computed, ref } from 'vue';

const active = ref(false);
if (globalThis.window) {
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

  // Compute height and width of the layout
  const height = state.length;
  const width = state[0].length;

  // Make a unique key for the state, so we can cache the inverse matrix
  const key = `${width}x${height},${Layout.getExcludeFromMatrix(state)}`;

  let I;
  if (map.has(key)) {
    // If the inverse matrix is already cached, use it
    I = map.get(key);
  } else {
    // Otherwise, compute it

    // Generate the move matrix
    const M = generateMoveMatrix(width, height, state);
    // It is a 2D array of the form 
    // Number[width * height][width * height]
    // where each row represents a possible move

    // Compute the determinant of the move matrix
    const det = determinant(M);

    // Compute the inverse matrix
    // If det is 0, calculate the inverse using matrix-js .inv() method
    // Otherwise, calculate the inverse using ml-matrix inverse() function
    // matrix-js .inv() produces a pseudo-inverse for singular matrices
    I = det === 0 ? 
          new Matrix(matrix(matrix(M.data.map(row => Array.from(row))).inv()).map(e => (e + 2) % 2))
          : inverse(M).add(2).mod(2);
    // I is a 2D array of the same form as M

    // Cache the inverse matrix
    map.set(key, I);
  }

  // Generate the pattern matrix
  // The pattern matrix represents the layout, without the excluded cells,
  // and with the cells inverted (1s become 0s, 0s become 1s)
  // The cells are inverted because we want the solution to produce all 1s
  const P = new Matrix(
    state.flat()
      .filter(e => e !== -1) // Remove excluded cells
      .map(e => [e === 1 ? 0 : 1])); // Invert the cells
  // P is a 1D column vector of the form
  // Number[width * height][1]
  // It represents the current layout but flipped and without the excluded cells
  // Eg. if the layout is
  // 1  1  1
  // 0 -1  0
  // 1  0  1
  // The pattern matrix will be the following column vector
  // 0
  // 0
  // 0
  // 1
  // 1
  // 1
  // 0
  // 1
  
  // Then we solve Mx = P
  //           <=>  x = M^-1 * P
  //           <=>  x = I * P
  // add(2) before mod(2) is required because of
  // weird JavaScript modulo on negative numbers
  const result = I.mmul(P).add(2).mod(2).data.map(e => e[0]);
  // result is a 1D array of the form
  // Number[width * height]
  // where each number represents the number of times
  // the corresponding tile should be clicked (1 or 0)

  // Find the smallest positive number in the result
  // and divide all the numbers by it to get integers
  // and then mod 2 to get 0s and 1s
  // TODO: check if this is the correct way to do it
  const smallest = Math.min(...result.filter(e => e > 0));
  result.forEach((e, i) => result[i] = (Math.round(result[i] / smallest) + 2) % 2);

  // Reinsert the excluded cells from the state
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      if (state[row][column] === -1) {
        // Calculate the index for the 1D array
        const i = row * width + column;
        result.splice(i, 0, -1);
      }
    }
  }

  // Return a new 2D array with the moves required to solve the pattern
  return result.map((_, i) => result.slice(i * width, (i + 1) * width)).filter(e => e.length);
}

// Simply swaps the neighbouring tiles of the given matrix
// at the given row and column
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

/**
 * Generates a move matrix
 * @param {Number} width width of the layout
 * @param {Number} height height of the layout
 * @param {Number[][]} [state] Optional 2D array to exclude cells from the resulting matrix 
 * @returns 
 */
export const generateMoveMatrix = (width, height, state) => {
  const flips = [];
  
  // Loop through every tile of the layout
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      
      // If a state is provided and the tile is excluded, skip it
      // Because clicking on an excluded tile is an illegal move
      if (state && state[row][column] === -1) continue;

      // Create a new matrix of the layout, with all 0s,
      // and -1s where the excluded tiles are if a state is provided
      const M = new Matrix(
        Array(height).fill().map((_, row) => Array(width).fill(0).map(
          (e, i) => state && state[row][i] === -1 ? -1 : e
        )),
      );
      
      // Swap the tile and its neighbours, creating a single-move matrix
      swapMatrix(row, column, M);

      // Here M is a 2D array of the form
      // Number[height][width]
      // It simply represents the layout with all 0s after
      // clicking on the current tile at row x column

      // add the matrix to the list of matrices
      flips.push(M);
    }
  }

  // Convert the matrices to 1D arrays and combine them into a single 2D move matrix
  // Remove the -1s from the arrays
  const data = flips.map(M => M.data.map(e => Array.from(e)).flat().filter(e => e !== -1));
  // data is a 2D array of the form
  // Number[width * height][width * height]
  // where each row represents a possible move

  // Return a new matrix with the data and mod 2
  return (new Matrix(data)).add(2).mod(2);
}