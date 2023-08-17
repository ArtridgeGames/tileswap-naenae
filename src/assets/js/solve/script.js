import { generateMoveMatrix, solve } from './solve.js'

const str = (M) => {
  return M
      .flat()
      .join('')
      .replace(/-1/g, ' ')
      .replace(new RegExp(`(.{${pattern[0].length}})`, 'g'), '$1\n')
}

// const pattern = [[-1,-1,0,-1,-1],[-1,0,0,0,-1],[1,1,0,1,1],[-1,1,0,0,-1],[-1,-1,0,-1,-1]]

// const pattern = [
//   [0,0],
//   [0,0]
// ];

// const pattern = [
//   [-1,0],
//   [0,0],
//   [0,0]
// ]

// const pattern = [
//   [1,1,1],
//   [0,0,0],
//   [1,1,1]
// ]

// const pattern = [
//   [1,1,1],
//   [1,1,1],
//   [0,0,0],
//   [1,1,1],
//   [1,1,1]
// ]

// const pattern = [
//   [0,-1,0],
//   [-1,0,-1],
//   [0,-1,1]
// ]

const pattern = [
  [0,0,0,1,1,1,1,1],
  [0,0,0,1,1,1,1,1],
  [0,0,0,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,0,0,0],
  [1,1,1,1,1,0,0,0]
]

// const pattern = [
//   [1,1,1,1,1],
//   [0,0,0,1,1],
//   [0,0,0,1,1],
//   [0,0,0,1,1],
//   [1,1,1,1,1]
// ];

// const pattern = [
//   [-1,-1,-1,-1,1,0,0,-1,-1,-1,-1],
//   [-1,-1,0,0,0,1,0,0,0,-1,-1],
//   [-1,0,0,0,0,1,0,1,1,1,-1],
//   [-1,1,0,1,1,1,1,1,1,0,-1],
//   [0,1,0,1,1,1,1,0,0,0,0],
//   [0,1,0,1,0,1,0,1,1,1,0],
//   [1,1,1,0,0,1,1,1,0,1,1],
//   [-1,0,0,1,1,0,1,0,1,1,-1],
//   [-1,0,1,0,1,0,1,0,0,0,-1],
//   [-1,-1,1,0,1,0,0,1,1,-1,-1],
//   [-1,-1,-1,-1,1,0,0,-1,-1,-1,-1]];

const start = new Date();

console.log("### PATTERN ###");
console.log(str(pattern));

const result = solve(pattern);

console.log("### CLICKS TO SOLVE ###");
console.log(str(result));

const end = new Date();
console.log(`Took ${end - start}ms`);

function allStates() {
  console.log("### ALL POSSIBLE STATES ###");
  for (let pattern = 0; pattern < 2 ** (SIZE * SIZE); pattern++) {
    const state = Array(SIZE).fill().map((_, row) => Array(SIZE).fill(0).map(
      (e, i) => (pattern >> (row * SIZE + i)) & 1
    ));
    console.log(str(state));
    const result = solve(state);
    console.log(str(result));
  }
}

function calculateDeterminants() {
  console.log("### DETERMINANTS ###");
  console.log("   ", Array(11).fill().map((_, i) => (i+3).toString().padStart(2, ' ')).join(' '))
  for (let height = 3; height <= 13; height++) {
    let str = `${height.toString().padStart(2, ' ')}: `;
    for (let width = 3; width <= 13; width++) {
      const M = generateMoveMatrix(width, height);
      const det = determinant(M);
      str += `${det.toString().padStart(2, ' ')} `;
    }
    console.log(str);
  }
}