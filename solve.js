const SIZE = 3;

const swapMatrix = (row, column, matrix) => {
  const dirx = [-1, 0, 1];
  const diry = [-1, 0, 1];

  let count = 0;
  for (const x of dirx) {
    for (const y of diry) {
      if (row + y >= 0 && row + y < matrix.length
        && column + x >= 0 && column + x < matrix[0].length
        && matrix[row+y][column+x] !== -1) {
          matrix[row+y][column+x] = matrix[row+y][column+x] ? 0 : 1;
          count++;
        }
    }
  }
  return count;
}

const matrixToInt = (matrix) => {
  let result = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      result <<= 1;
      result += matrix[row][column];
    }
  }
  return result;
}

const FLIPS = {};
for (let row = 0; row < SIZE; row++) {
  for (let column = 0; column < SIZE; column++) {
    const matrix = Array(SIZE).fill().map(() => Array(SIZE).fill(0));
    swapMatrix(row, column, matrix);
    FLIPS[`${column},${row}`] = matrixToInt(matrix);
  }
}

const flip = (x, y, state) => {
  const mask = FLIPS[`${x},${y}`];
  return state ^ mask;
}

const repr = (state) => {
  return state.toString(2).padStart(SIZE * SIZE, '0').replace(new RegExp(`(.{${SIZE}})`, 'g'), '$1\n');
}

const target = (1 << (SIZE * SIZE)) - 1;

// Fastest algorithm, but doesn't guarantee the shortest path
// Use to test if a solution exists
const solveFast = (initialState) => {
  const visited = new Set();

  const recurse = (state, steps) => {
    if (state === target) return steps;
    if (new Set(steps).size !== steps.length) return null;

    for (let u = 0; u < SIZE; u++) {
      for (let v = 0; v < SIZE; v++) {
        const newState = flip(u, v, state);
        const newSteps = [...steps, `${u},${v}`];

        if (new Set(newSteps).size !== newSteps.length) return null;

        const key = newState + '-' + newSteps.join(',');
        if (!visited.has(key)) {
          visited.add(key);
          const result = recurse(newState, newSteps);
          if (result) {
            return result;
          }
        }
      }
    }

    return null
  };

  return recurse(initialState, []);
};

// Guaranteed to find the shortest path, but slower
// Still fast on patterns with short solutions
// TODO: find a way to determine shortest solution length of any pattern, this would greatly improve performance
const solveDfs = (initialState) => {
  const maxDepth = SIZE * SIZE; // Adjust the maximum depth as needed
  const visited = new Set();

  const dfs = (state, steps, depth) => {
    if (depth === 0) return null; // Depth limit reached
    if (state === target) return steps;

    for (let u = 0; u < SIZE; u++) {
      for (let v = 0; v < SIZE; v++) {
        const newState = flip(u, v, state);
        const newSteps = [...steps, `${u},${v}`];
        const memoKey = newState + '-' + newSteps.join(',');

        if (!visited.has(memoKey)) {
          visited.add(memoKey);
          const result = dfs(newState, newSteps, depth - 1);
          visited.delete(memoKey); // Clean up visited set for next iteration
          if (result) return result;
        }
      }
    }

    return null;
  };

  for (let depth = 1; depth <= maxDepth; depth++) {
    visited.clear(); // Clear the visited set for each iteration
    const result = dfs(initialState, [], depth);
    if (result) return result;
  }

  return null; // No solution found within the maximum depth
};

// Easy 5x5
// 11100
// 00100
// 00100
// 00111
// 11111
// console.log(solveFast(0b11100_00100_00100_00111_11111));

// Hard 5x5
// 10101
// 00011
// 11011
// 00000
// 10110
// console.log(solveFast(0b10101_00011_11011_00000_10110));

// Hard 3x3
// 000
// 001
// 011
// console.log(solveFast(0b000_001_011));

// Easy 3x3
// 111
// 111
// 000
// console.log(solveFast(0b111_111_000));

startSolving();

function startSolving() {
  const unsolved = [];
  const total = 2 ** (SIZE * SIZE);
  for (let pattern = 0; pattern < total; pattern++) {
    console.clear();
    console.log((pattern / total) * 100 + '%');
    console.log(unsolved.length + ' unsolvable patterns found');
    
    const result = solveFast(pattern);
    if (!result) {
      unsolved.push(pattern);
    }
  
  }

  console.clear();
  console.log("Done");
  console.log(`${total - unsolved.length} / ${total} patterns were solved.`);
  if (unsolved.length > 0) {
    console.log('These were unsolved: ');
    for (const u of unsolved) {
      console.log(repr(u) + '\n');
    }
  }
}