const SIZE = 8n;

const swapMatrix = (row, column, matrix) => {
  const dirx = [-1, 0, 1];
  const diry = [-1, 0, 1];

  for (const x of dirx) {
    for (const y of diry) {
      if (row + y >= 0 && row + y < matrix.length
        && column + x >= 0 && column + x < matrix[0].length
        && matrix[row+y][column+x] !== -1) {
          matrix[row+y][column+x] = matrix[row+y][column+x] ? 0n : 1n;
        }
    }
  }
}

const matrixToInt = (matrix) => {
  let result = 0n;
  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      result <<= 1n;
      result += matrix[row][column];
    }
  }
  return result;
}

const FLIPS = {};
for (let row = 0; row < SIZE; row++) {
  for (let column = 0; column < SIZE; column++) {
    const matrix = Array(Number(SIZE)).fill().map(() => Array(Number(SIZE)).fill(0n));
    swapMatrix(row, column, matrix);
    FLIPS[`${column},${row}`] = matrixToInt(matrix);
  }
}

const flip = (x, y, state) => {
  const mask = FLIPS[`${x},${y}`];
  return state ^ mask;
}

const repr = (state) => {
  return state.toString(2).padStart(Number(SIZE * SIZE), '0').replace(new RegExp(`(.{${SIZE}})`, 'g'), '$1\n');
}

const target = (1n << (SIZE * SIZE)) - 1n;

// Fastest algorithm, but doesn't guarantee the shortest path
// Use to test if a solution exists
const solveFast = (initialState) => {
  const visited = new Set();

  
  const recurse = (state, steps) => {
    if (state === target) return steps;
    if (new Set(steps).size !== steps.length) return null;
    
    // console.log(repr(state));

    for (let u = 0n; u < SIZE; u++) {
      for (let v = 0n; v < SIZE; v++) {
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
        } else {
          return null;
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

const calculateMisplacedTiles = (state) => {
  let misplaced = 0n;
  for (let u = 0n; u < SIZE; u++) {
    for (let v = 0n; v < SIZE; v++) {
      const mask = 1n << (u * SIZE + v);
      if ((state & mask) !== (target & mask)) {
        misplaced++;
      }
    }
  }
  return misplaced;
};

// Extremely fast on short solutions, but slower on longer solutions
// TODO: find a better heuristic function
const solveAStar = (initialState) => {
  const openSet = [{ state: initialState, steps: [], cost: 0n }];
  const visited = new Set();

  const heuristic = (state) => calculateMisplacedTiles(state);

  while (openSet.length > 0) {
    openSet.sort((a, b) => Number((a.cost + heuristic(a.state)) - (b.cost + heuristic(b.state))));
    const { state, steps, cost } = openSet.shift();
    if (state === target) return steps;

    visited.add(state);

    for (let u = 0n; u < SIZE; u++) {
      for (let v = 0n; v < SIZE; v++) {
        const newState = flip(u, v, state);
        const newSteps = [...steps, `${u},${v}`];
        const newCost = cost + 1n;

        if (!visited.has(newState)) {
          openSet.push({ state: newState, steps: newSteps, cost: newCost });
          visited.add(newState);
        }
      }
    }
  }

  return null; // No solution found
};

const start = new Date();

// Easy 5x5
// 11100
// 00100
// 00100
// 00111
// 11111
// console.log(solveAStar(0b11100_00100_00100_00111_11111n));

// Hard 5x5
// 10101
// 00011
// 11011
// 00000
// 10110
// console.log(solveAStar(0b10101_00011_11011_00000_10110n));

// Hard 3x3
// 000
// 001
// 011
// console.log(solveFast(0b000_001_011n));

// Easy 3x3
// 111
// 111
// 000
// console.log(solveAStar(0b111_111_000n));

// Easy 8x8
// 10001111
// 10001111
// 10001111
// 11111111
// 00010001
// 00010001
// 00010001
// 11111111
// console.log(solveAStar(
//   0b10001111_10001111_10001111_11111111_00010001_00010001_00010001_11111111n
// ));

// Easy 8x8
// 10001111
// 01101111
// 01101100
// 00011111
// 11111111
// 00011100
// 00011111
// 00011111

const pattern = 0b10001111_01101111_01101100_00011111_11111111_00011100_00011111_00011111n;
console.log(repr(pattern));
console.log('Solving...');
console.log(solveAStar(pattern));

// Hard 8x8
// 11101101
// 10010011
// 00011011
// 01011101
// 11111100
// 10101100
// 10001011
// 01010100

// startSolving();

const end = new Date();
console.log(`Took ${end - start}ms`);

function startSolving() {
  const unsolved = [];
  const total = 2n ** (SIZE * SIZE);
  for (let pattern = 0n; pattern < total; pattern++) {
    console.clear();
    console.log((Number(pattern * 100n / total)) + '%');
    console.log(unsolved.length + ' unsolvable patterns found');
    
    const result = solveFast(pattern);
    if (!result) {
      unsolved.push(pattern);
    }
  
  }

  console.clear();
  console.log("Done");
  console.log(`${Number(total) - unsolved.length} / ${total} patterns were solved.`);
  if (unsolved.length > 0) {
    console.log('These were unsolved: ');
    for (const u of unsolved) {
      console.log(repr(u) + '\n');
    }
  }
}