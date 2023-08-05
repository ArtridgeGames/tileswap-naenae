import matrix from 'matrix-js';

const swapMatrix = (row, column, M) => {
  const dirx = [-1, 0, 1];
  const diry = [-1, 0, 1];

  for (const x of dirx) {
    for (const y of diry) {
      if (row + y >= 0 && row + y < M.size()[0]
        && column + x >= 0 && column + x < M.size()[1]
        && M(row+y, column+x) !== -1) {
          M = matrix(M.set(row+y, column+x).to(1));
        }
    }
  }
  return M;
}

const str = (M) => {
  return M
      .flat()
      .join('')
      .replace(/-1/g, ' ')
      .replace(new RegExp(`(.{${SIZE}})`, 'g'), '$1\n')
}

const generateMoveMatrix = (size, state) => {
  const flips = [];
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if (state && state[row][column] === -1) continue;
      let M = matrix(
        Array(size).fill().map((_, row) => Array(size).fill(0).map(
          (e, i) => state && state[row][i] === -1 ? -1 : e
        )),
      );
      M = swapMatrix(row, column, M);
      flips.push(M);
    }
  }
  return matrix(flips.map(M => M().flat().filter(e => e !== -1)));
}

const solve = (state) => {
  const M = generateMoveMatrix(SIZE, state);

  const I = matrix(matrix(M.inv()).map(x => (x+2) % 2));

  const pattern = matrix(state.flat().filter(e => e !== -1).map(e => [e === 1 ? 0 : 1]));
  
  const result = matrix(I.prod(pattern)).map(x => (x+2) % 2).flat();
  
  for (let row = 0; row < SIZE; row++) {
    for (let column = 0; column < SIZE; column++) {
      if (state[row][column] === -1) {
        const i = row * SIZE + column;
        result.splice(i, 0, -1);
      }
    }
  }

  return result;
  
}

const start = new Date();

const SIZE = 5;
const pattern = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
];

console.log("### PATTERN ###");
console.log(str(pattern));

const result = solve(pattern);

console.log("### CLICKS TO SOLVE ###");
console.log(str(result));

// console.log("### ALL POSSIBLE STATES ###");
// for (let pattern = 0; pattern < 2 ** (SIZE * SIZE); pattern++) {
//   const state = Array(SIZE).fill().map((_, row) => Array(SIZE).fill(0).map(
//     (e, i) => (pattern >> (row * SIZE + i)) & 1
//   ));
//   console.log(str(state));
//   const result = solve(state);
//   console.log(str(result));
// }

// console.log("### DETERMINANTS ###");
// for (let size = 3; size <= 30; size++) {
//   const M = generateMoveMatrix(size);
//   console.log(size, M.det());
// }

const end = new Date();
console.log(`Took ${end - start}ms`);