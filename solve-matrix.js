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
      .replace(new RegExp(`(.{${SIZE}})`, 'g'), '$1\n')
}

const solve = (state) => {
  const FLIPS = {};
  for (let row = 0; row < SIZE; row++) {
    for (let column = 0; column < SIZE; column++) {
      let M = matrix(
        Array(SIZE).fill().map(() => Array(SIZE).fill(0)),
      );
      M = swapMatrix(row, column, M);
      FLIPS[`${column},${row}`] = M;
    }
  }

  const pattern = matrix(state.flat().map(e => [e]));
  
  const M = matrix(Object.values(FLIPS).map(M => M().flat()));
  const I = matrix(
    matrix(M.inv()).map(x => (x+2) % 2));
  
  const flipped = matrix(pattern.map(e => e === 1 ? 0 : 1));
  
  const result = matrix(matrix(I.prod(flipped)).map(x => (x+2) % 2));

  return result();
  
}

const start = new Date();

const SIZE = 3;
const pattern = [
  [0,0,1,0,1,1,0,0,1],
  [1,1,0,0,0,0,1,1,0],
  [1,0,1,1,1,1,1,0,0],
  [1,1,1,0,0,0,1,0,1],
  [0,1,1,1,0,1,0,0,0],
  [0,0,1,1,1,1,0,1,1],
  [0,0,1,0,0,0,1,0,0],
  [1,1,1,0,0,0,0,0,0],
  [1,1,1,0,0,1,1,0,1]
];

console.log("### PATTERN ###");
console.log(str(pattern));

const result = solve(pattern);

console.log("### CLICKS TO SOLVE ###");
console.log(str(result));

const end = new Date();
console.log(`Took ${end - start}ms`);