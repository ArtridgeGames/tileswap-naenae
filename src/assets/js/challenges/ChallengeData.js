import { Layout } from '../Layout.js';
import { Challenge, ChallengePattern, ChallengeProperties, PatternSequence } from './Challenge.js';

const { LINEAR, RANDOM } = ChallengeProperties.LIST_ORDERS;

function sumInRanges(ranges, targetSum, maxAttempts = 1000) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    let remainingSum = targetSum;
    let combination = [];
    for (let i = 0; i < ranges.length; i++) {
      let [start, end] = ranges[i];
      let maxPossible = calculateMaxPossible(remainingSum, ranges, i);
      if (maxPossible < start) {
        break; // No valid value can be chosen for this object
      }

      let selectedValue = randomValueInRange(start, Math.min(end, maxPossible));
      combination.push(selectedValue);
      remainingSum -= selectedValue;
    }

    if (remainingSum === 0) {
      return combination; // Valid solution found
    }
  }
  return null; // No solution found within the given number of attempts
}

function calculateMaxPossible(remainingSum, ranges, currentIndex) {
  let maxPossible = remainingSum;
  for (let i = currentIndex + 1; i < ranges.length; i++) {
    maxPossible -= ranges[i][0]; // Subtract the start value of each remaining range
  }
  return maxPossible;
}

function randomValueInRange(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

const uniform = (size, value) => () => new Array(size).fill(value);
const uniformSumInRanges = (range, size, targetSum) => () => sumInRanges(new Array(size).fill(range), targetSum);
const patternList = (ids) => ids.map((layoutId, index)  => ChallengePattern.fromId(layoutId, { id: index }));

/**
 * Moves a tile from the excluded tiles 
 * @param {ChallengePattern} pattern 
 */
export const removeTile = pattern => {
  const layout = pattern.layout.copy();
  const { exclude } = layout;
  const tiles = layout.width * layout.height;
  const selected = Math.floor(Math.random() * tiles);

  if (exclude.length === tiles) {
    return pattern;
  }

  if (exclude.includes(selected)) {
    return removeTile(pattern.copy());
  }
  exclude.push(selected);

  const newLayout = new Layout({ ...layout, exclude });
  return new ChallengePattern({
    ...pattern,
    layout: newLayout
  });
}

export const addTile = pattern => {
  const layout = pattern.layout.copy();
  const { exclude } = layout;
  const tiles = layout.width * layout.height;
  const selected = Math.floor(Math.random() * tiles);

  if (exclude.length === 0) {
    return pattern;
  }

  if (!exclude.includes(selected)) {
    return addTile(pattern.copy());
  }
  exclude.splice(exclude.indexOf(selected), 1);

  const newLayout = new Layout({ ...layout, exclude });
  return new ChallengePattern({
    ...pattern,
    layout: newLayout
  });
}

export const corrupted = pattern => {
  return addTile(addTile(removeTile(removeTile(pattern))));
}

const identity = pattern => pattern;

export const addPaddingToMatrix = (matrix, padding) => {
  let newMatrix = matrix.map(row => [...row]);
  for (let i = 0; i < padding; i++) {
    newMatrix = addPaddingToMatrixOne(newMatrix);
  }
  return newMatrix;
}

export const addPaddingToMatrixOne = matrix => {
  const newMatrix = matrix.map(row => [...row]);
  for (let i = 0; i < 1; i++) {
    newMatrix.unshift(new Array(matrix[0].length).fill(-1));
    newMatrix.push(new Array(matrix[0].length).fill(-1));
    newMatrix.forEach(row => {
      row.unshift(-1);
      row.push(-1);
    });
  }
  return newMatrix;
}


export const gameOfLife = pattern => {
  const matrix = pattern.layout.matrix;
  const newMatrix = matrix.map((row, y) => row.map((cell, x) => {
    const neighbors = getNeighbors(pattern.layout, x, y);
    const aliveNeighbors = neighbors.filter(neighbor => neighbor !== -1).length;
    if (cell !== -1) {
      // is alive
      return aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : -1;
    } else {
      return aliveNeighbors === 3 ? 1 : -1;
    }
  }));
  const newLayout = pattern.layout.copy();
  newLayout.exclude = Layout.getExcludeFromMatrix(newMatrix);
  newLayout.setMatrix(newMatrix);
  return new ChallengePattern({
    ...pattern,
    layout: newLayout
  });
}

const getNeighbors = (layout, x, y) => {
  const { width, height } = layout;
  const neighbors = [];
  for (let i = -1; i <= 1; i++) {
    const neighborY = (((y + i) % height) + height) % height;
    if (neighborY < 0 || neighborY >= height) {
      continue;
    }
    for (let j = -1; j <= 1; j++) {
      const neighborX = (((x + j) % width) + width) % width;
      if (neighborX < 0 || neighborX >= width) {
        continue;
      }
      if (i === 0 && j === 0) {
        continue;
      }
      neighbors.push(layout.matrix[neighborY][neighborX]);
    }
  }
  return neighbors;
}

const getPatternFromIdWithPadding = (id, padding) => {
  const layout = Layout.ALL_LAYOUTS.find(e => e.id === id).copy();
  const newMatrix = addPaddingToMatrix(layout.matrix, padding);
  return new ChallengePattern({
    id,
    layout: new Layout({
      width: layout.width + 2 * padding,
      height: layout.height + 2 * padding,
      exclude: Layout.getExcludeFromMatrix(newMatrix),
    })
  });
}

export const CHALLENGES = [
  {
    title: "Test",
    unlockCategory: 0,
    challenges: [
      new Challenge({
        id: -1,
        title: 'Test',
        settings: new ChallengeProperties({
          patternCount: 5,
          patternList: patternList([0]),
          difficulty: () => new Array(5).fill().map((_, i) => i + 1),
        })
      })
    ]
  },
  {
    title: "Category 1",
    unlockCategory: 0,
    challenges: [
      new Challenge({
        id: 0,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 10,
          difficulty: uniformSumInRanges([3, 5], 10, 45)
        })
      }),
      new Challenge({
        id: 1,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 14,
          difficulty: uniformSumInRanges([3, 5], 14, 60)
        })
      }),
      new Challenge({
        id: 2,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 16,
          difficulty: uniformSumInRanges([3, 6], 16, 70)
        })
      })
    ]
  },
  {
    title: "Think Fast",
    unlockCategory: 0,
    challenges: [
      new Challenge({
        id: 0,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 10,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([3, 5], 10, 45)
        })
      }),
      new Challenge({
        id: 1,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 14,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([3, 5], 14, 60)
        })
      }),
      new Challenge({
        id: 2,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 16,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([3, 6], 16, 70)
        })
      })
    ]
  },
  {
    title: "Read",
    unlockCategory: 1,
    challenges: [
      new Challenge({
        id: 6,
        title: 'Normal',
        settings: new ChallengeProperties({
          patternList: patternList([119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132, 133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176]),
          patternCount: 26,
          patternListOrder: LINEAR,
          difficulty: uniform(26, 3),
          defaults: {
            timeLimitPerPattern: 10
          }
        })
      })
    ]
  },
  {
    title: "Count",
    unlockCategory: 1,
    challenges: [
      new Challenge({
        id: 7,
        title: 'Count',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([156, 157, 158, 159, 160, 161, 162, 163, 164, 165]),
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: uniform(10, 3)
        })
      }),
    ]
  },
  {
    title: "Game of Life",
    unlockCategory: 2,
    challenges: [
      new Challenge({
        id: 8,
        title: 'Q survival',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(168, 6),
            gameOfLife
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 5,
          }
        })
      }),
    ]
  }
  /*
  new Challenge({
    id: 0,
    title: 'Game of life',
    settings: new ChallengeProperties({
      timeLimit: 60,
      patternSequence: new PatternSequence(
        getPatternFromIdWithPadding(99, 2),
        gameOfLife
      ),
      patternCount: 14,
      patternListOrder: RANDOM,
      difficulty: uniform(14, 1)
    })
  }),
  new Challenge({
    id: 2,
    title: 'Think Fast - Hard',
    settings: new ChallengeProperties({
      timeLimit: 60,
      patternList: patternList([0]),
      patternCount: 15,
      patternListOrder: RANDOM,
      difficulty: uniform(15, 3),
      defaults: {
        moveLimitPerPattern: 5
      }
    })
  }),
  new Challenge({
    id: 3,
    title: 'Count',
    settings: new ChallengeProperties({
      moveLimit: 45,
      patternList: patternList([156, 157, 158, 159, 160, 161, 162, 163, 164, 165]),
      patternCount: 10,
      patternListOrder: LINEAR,
      difficulty: uniform(10, 3)
    })
  }),
  new Challenge({
    id: 4,
    title: 'Read',
    settings: new ChallengeProperties({
      patternList: patternList([119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132, 133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176]),
      patternCount: 26,
      patternListOrder: LINEAR,
      difficulty: uniform(26, 3),
      defaults: {
        timeLimitPerPattern: 10
      }
    })
  }),
  new Challenge({
    id: 5,
    title: 'Survival',
    settings: new ChallengeProperties({
      timeLimit: 10,
      patternList: patternList([0]),
      patternCount: -1,
      patternListOrder: LINEAR,
      difficulty: n => Math.floor(7 * Math.log10(n) + 3),
      defaults: {
        bonusTimePerPattern: 2
      }
    })
  }),
  new Challenge({
    id: 6,
    title: 'Tile Centipede',
    settings: new ChallengeProperties({
      timeLimit: 50,
      patternList: patternList([86, 183, 184, 185]),
      patternCount: 4,
      patternListOrder: LINEAR,
      difficulty: () => sumInRanges([[4,5], [5,7], [9,13], [13,18]], 40)
    })
  }),
  new Challenge({
    id: 7,
    title: 'Growing Square',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternList: patternList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      patternCount: 10,
      patternListOrder: LINEAR,
      difficulty:  () => sumInRanges([[4,7], [7,11], [8,12], [14,20], [20,25], [20,25], [30,36], [35, 40]], 150)
    })
  }),
  new Challenge({
    id: 8,
    title: 'Shrinking Circle',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternList: patternList([136, 19, 18, 17, 47, 177, 14]),
      patternCount: 7,
      patternListOrder: LINEAR,
      difficulty:  () => sumInRanges([[30,36], [18,25], [15,19], [9, 12], [6,10], [3,5], [3,5]], 97)
    })
  }),
  new Challenge({
    id: 9,
    title: 'Game of Life',
    settings: new ChallengeProperties({
      patternList: patternList([83, 84, 85, 104, 93, 94, 96, 97, 98, 99, 117, 103, 30, 152]),
      patternCount: 10,
      timeLimit: 80,
      patternListOrder: RANDOM,
      difficulty:  () => sumInRanges([[4,8], [6,9], [5,7], [10,18], [7,10], [3,7], [3,6], [6,8], [6,9], [9,14], [6,8], [5,8], [5,8], [13,20]], 96),
      defaults: {
        bonusTimePerPattern: 5,
      }
    })
  }),
  new Challenge({
    id: 10,
    title: 'Snake',
    settings: new ChallengeProperties({
      timeLimit: 40,
      patternList: patternList([69, 45, 66, 130, 178, 179, 180, 182]),
      patternCount: 7,
      patternListOrder: RANDOM,
      difficulty:  () => sumInRanges([[6,10], [5,9], [6,13], [2,4], [13,20], [10,15], [4,9], [7,17]], 70)
    })
  }),
  new Challenge({
    id: 11,
    title: 'Corrupted',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternCount: 10,
      patternSequence: new PatternSequence(
        new ChallengePattern({
          id: 0,
          layout: new Layout({
            width: 7,
            height: 7,
            exclude: [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48]
          }),
        }),
        corrupted
      ),
      difficulty: () => [3, 4, 5, 6, 7, 8, 9, 10, 11 ,12]
    })
  })*/
]

/*
export const OLD_CHALLENGES = [
  {
    name: "Think Fast",
    id: 0,
    challenges: [
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 90,
        patterns: [0],
        nPatterns: 30,
        bigLayoutAdapt: false,
        moveLimitPer: 3,
        timeLimitPer: -1,
        hasSpecificPatterns: true,
        randomPatterns: true,
        name: "Expert",
        id: 0
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 45,
        patterns: [0],
        nPatterns: 15,
        bigLayoutAdapt: false,
        moveLimitPer: 5,
        timeLimitPer: -1,
        hasSpecificPatterns: true,
        randomPatterns: true,
        name: "Hard",
        id: 1
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 33,
        patterns: [0],
        nPatterns: 11,
        bigLayoutAdapt: false,
        moveLimitPer: 7,
        timeLimitPer: -1,
        hasSpecificPatterns: true,
        randomPatterns: true,
        name: "Medium",
        id: 2
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 21,
        patterns: [0],
        nPatterns: 7,
        bigLayoutAdapt: false,
        moveLimitPer: 7,
        timeLimitPer: -1,
        hasSpecificPatterns: true,
        randomPatterns: true,
        name: "Easy",
        id: 3
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 90,
        patterns: [2],
        nPatterns: 30,
        bigLayoutAdapt: false,
        moveLimitPer: -1,
        timeLimitPer: -1,
        hasSpecificPatterns: true,
        randomPatterns: true,
        name: "Think a bit less fast but still fast enough to be fast enough, you know?",
        id: 4
      })
    ]
  },
  {
    name: "Category 1",
    id: 1,
    challenges: [
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 17,
        patterns: [1, 1],
        nPatterns: 5,
        bigLayoutAdapt: false,
        moveLimitPer: -1,
        timeLimitPer: -1,
        hasSpecificPatterns: false,
        randomPatterns: true,
        name: "Easy",
        id: 5
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 30,
        patterns: [1, 1],
        nPatterns: 10,
        bigLayoutAdapt: false,
        moveLimitPer: -1,
        timeLimitPer: -1,
        hasSpecificPatterns: false,
        randomPatterns: true,
        name: "Medium",
        id: 6
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 55,
        patterns: [1, 1],
        nPatterns: 14,
        bigLayoutAdapt: false,
        moveLimitPer: -1,
        timeLimitPer: -1,
        hasSpecificPatterns: false,
        randomPatterns: true,
        name: "Hard",
        id: 7
      }),
      new Challenge({
        timeLimit: 60,
        moveLimit: -1,
        totalClicks: 92,
        patterns: [1, 1],
        nPatterns: 22,
        bigLayoutAdapt: false,
        moveLimitPer: -1,
        timeLimitPer: -1,
        hasSpecificPatterns: false,
        randomPatterns: true,
        name: "Expert",
        id: 8
      }),
    ]
  },
  new Challenge({
    timeLimit: 60,
    moveLimit: -1,
    totalClicks: 90,
    patterns: [11],
    nPatterns: 30,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "OG",
    id: 9
  }),
  new Challenge({
    timeLimit: -1, //should be no limit
    moveLimit: 45,
    totalClicks: 35,
    patterns: [156, 157, 158, 159, 160, 161, 162, 163, 164, 165],
    nPatterns: 10,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: 10,
    hasSpecificPatterns: true,
    randomPatterns: false,
    name: "Count",
    id: 10
  })
  ,
  new Challenge({
    timeLimit: -1,
    moveLimit: -1,
    totalClicks: 78,
    patterns: [119, 109, 110, 111, 142,
      143, 144, 145, 131, 166, 146, 130,
      132, 133, 156, 167, 168, 169, 161,
      170, 171, 172, 173, 174, 175, 176],
    nPatterns: 26,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: 10,
    hasSpecificPatterns: true,
    randomPatterns: false,
    name: "Read",
    id: 11
  }),
  new Challenge({
    timeLimit: 90,
    moveLimit: -1,
    totalClicks: 80,
    patterns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    nPatterns: 10,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: false,
    name: "Growing Square",
    id: 12
  }),
  new Challenge({
    timeLimit: 120,
    moveLimit: -1,
    totalClicks: 80,
    patterns: [136, 19, 18, 17, 47, 177, 14],
    nPatterns: 7,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: false,
    name: "Shrinking Circle",
    id: 13
  }),
  new Challenge({
    timeLimit: -1,
    moveLimit: -1,
    totalClicks: 60,
    patterns: [83, 84, 85, 86,
      104, 93, 94, 95, 96, 97,
      98, 99, 117, 103, 30, 152],
    nPatterns: 10,
    bigLayoutAdapt: false,
    moveLimitPer: 15,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Game of Life",
    id: 14
  }),
  new Challenge({
    timeLimit: 40,
    moveLimit: -1,
    totalClicks: 70,
    patterns: [69, 45, 66, 130, 178, 179, 180, 182],
    nPatterns: 7,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Snake",
    id: 15
  }),
  new Challenge({
    timeLimit: 50,
    moveLimit: -1,
    totalClicks: 44,
    patterns: [86, 183, 184, 185],
    nPatterns: 4,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: false,
    name: "Tile Centipede",
    id: 16
  }),
  new Challenge({
    timeLimit: 60,
    moveLimit: -1,
    totalClicks: 92,
    patterns: [1, 10, 11, 24, 25, 27, 28],
    nPatterns: 12,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Category 3",
    id: 17
  }),
  new Challenge({
    timeLimit: 60,
    moveLimit: -1,
    totalClicks: 92,
    patterns: [26, 30, 33, 62, 85, 100, 128],
    nPatterns: 12,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Category 4",
    id: 18
  }),
  new Challenge({
    timeLimit: -1,
    moveLimit: -1,
    totalClicks: 48,
    patterns: [29],
    nPatterns: 8,
    bigLayoutAdapt: false,
    moveLimitPer: 20,
    timeLimitPer: 30,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Unconventional",
    id: 19
  }),
  new Challenge({
    timeLimit: 60,
    moveLimit: -1,
    totalClicks: 95,
    patterns: [5, 5],
    nPatterns: 10,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: false,
    randomPatterns: true,
    name: "Category 5",
    id: 20
  }),
  new Challenge({
    timeLimit: 60,
    moveLimit: -1,
    totalClicks: 95,
    patterns: [36, 48, 49, 70, 84, 102, 103, 106],
    nPatterns: 12,
    bigLayoutAdapt: false,
    moveLimitPer: -1,
    timeLimitPer: -1,
    hasSpecificPatterns: true,
    randomPatterns: true,
    name: "Category 6",
    id: 21
  })
];
*/