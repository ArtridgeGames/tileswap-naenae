import { Layout } from '../Layout.js';
import {
  Challenge,
  ChallengePattern,
  ChallengeProperties,
  PatternSequence,
} from './Challenge.js';

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
  throw new Error('Sum cannot be fit inside the ranges');
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
const uniformSumInRanges = (range, size, targetSum) => () =>
  sumInRanges(new Array(size).fill(range), targetSum);
const patternList = ids =>
  ids.map((layoutId, index) =>
    ChallengePattern.fromId(layoutId, { id: index })
  );

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
    layout: newLayout,
  });
};

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
    layout: newLayout,
  });
};

export const corrupted = pattern => {
  return addTile(addTile(removeTile(removeTile(pattern))));
};

const identity = pattern => pattern;

export const addPaddingToMatrix = (matrix, padding) => {
  let newMatrix = matrix.map(row => [...row]);
  for (let i = 0; i < padding; i++) {
    newMatrix = addPaddingToMatrixOne(newMatrix);
  }
  return newMatrix;
};

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
};

export const gameOfLife = pattern => {
  const matrix = pattern.layout.matrix;
  const newMatrix = matrix.map((row, y) =>
    row.map((cell, x) => {
      const neighbors = getNeighbors(pattern.layout, x, y);
      const aliveNeighbors = neighbors.filter(
        neighbor => neighbor !== -1
      ).length;
      if (cell !== -1) {
        // is alive
        return aliveNeighbors === 2 || aliveNeighbors === 3 ? 1 : -1;
      } else {
        return aliveNeighbors === 3 ? 1 : -1;
      }
    })
  );
  const newLayout = pattern.layout.copy();
  newLayout.setMatrix(newMatrix);
  return new ChallengePattern({
    ...pattern,
    layout: newLayout,
  });
};

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
};

//TODO OSKAR COMMENTE L'OUTPUT DE LA FONCTION
export const getPatternFromIdWithPadding = (id, padding) => {
  const layout = Layout.fromId(id);
  const newMatrix = addPaddingToMatrix(layout.matrix, padding);
  return new ChallengePattern({
    id,
    layout: new Layout({
      width: layout.width + 2 * padding,
      height: layout.height + 2 * padding,
      exclude: Layout.getExcludeFromMatrix(newMatrix),
    }),
  });
};

const testChallenge = new Challenge({
  description: `TEST CHALLENGE`,
  id: -1,
  title: 'TEST CHALLENGE',
  settings: new ChallengeProperties({
    timeLimit: 99999999,
    moveLimit: 99999999,
    patternList: patternList([0]),
    patternCount: 10,
    difficulty: uniform(10, 3),
    defaults: {
      timeLimitPerPattern: 99999999,
      moveLimitPerPattern: 99999999,
    },
  }),
});

export const CHALLENGES = [
  {
    title: 'Category 1',
    unlockCategory: 0,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this first category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 0,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 4, //4 or 5,
          difficulty: uniformSumInRanges([3, 5], 4, 19),
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this first category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 8</li>
          </ul>
        `,
        id: 1,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 8, //maybe 14, needs to be tested
          difficulty: uniformSumInRanges([3, 5], 8, 37), //sumInRanges, add higher difficulty when possible
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this first category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 16</li>
          </ul>
        `,
        id: 2,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
          patternCount: 16,
          difficulty: uniformSumInRanges([4, 5], 16, 70),
        }),
      }),
    ],
  },
  {
    title: 'Think Fast',
    unlockCategory: 0,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Finish this classic pattern in 3 moves, you are allowed 2 mistakes
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 3</li>
          </ul>
        `,
        id: 3,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: [
            new ChallengePattern({
              id: 0,
              layout: Layout.fromId(0),
              moveLimitPerPattern: 7,
            }),
          ],
          patternCount: 3,
          patternListOrder: LINEAR,
          difficulty: uniform(3, 3),
        }),
      }),
      new Challenge({
        description: `<p>
        Finish this classic pattern in 3 moves, you are allowed 1 mistakes
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 7</li>
          </ul>
        `,
        id: 4,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: [
            new ChallengePattern({
              id: 0,
              layout: Layout.fromId(0),
              moveLimitPerPattern: 5,
            }),
          ],
          patternCount: 7,
          patternListOrder: RANDOM,
          difficulty: uniform(7, 3),
        }),
      }),
      new Challenge({
        description: `<p>
        Finish this classic pattern in 3 moves, you are not allowed any mistake
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 30</li>
          </ul>
        `,
        id: 5,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: [
            new ChallengePattern({
              id: 0,
              layout: Layout.fromId(0),
              moveLimitPerPattern: 3,
            }),
          ],
          patternCount: 30,
          patternListOrder: RANDOM,
          difficulty: uniform(30, 3),
        }),
      }),
    ],
  },
  {
    title: 'Alphabet',
    unlockCategory: 1,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Go from A to Z
          </p><ul>
            <li>time per pattern : 26s</li>
            <li>patterns : 26</li>
          </ul>
        `,
        id: 6,
        title: 'Normal',
        settings: new ChallengeProperties({
          patternList: patternList([
            119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132,
            133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176,
          ]),
          patternCount: 26,
          patternListOrder: LINEAR,
          difficulty: uniform(26, 3),
          defaults: {
            timeLimitPerPattern: 26,
          },
        }),
      }),
      new Challenge({
        description: `<p>
        Go from A to Z
          </p><ul>
            <li>time per pattern : 10s</li>
            <li>patterns : 26</li>
          </ul>
        `,
        id: 7,
        title: 'Hard',
        settings: new ChallengeProperties({
          patternList: patternList([
            119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132,
            133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176,
          ]),
          patternCount: 26,
          patternListOrder: LINEAR,
          difficulty: uniform(26, 3),
          defaults: {
            timeLimitPerPattern: 10,
          },
        }),
      }),
      new Challenge({
        description: `<p>
        Go from A to Z
          </p><ul>
            <li>time per pattern : 5s</li>
            <li>patterns : 26</li>
          </ul>
        `,
        id: 8,
        title: 'Expert',
        settings: new ChallengeProperties({
          patternList: patternList([
            119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132,
            133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176,
          ]),
          patternCount: 26,
          patternListOrder: LINEAR,
          difficulty: uniform(26, 3),
          defaults: {
            timeLimitPerPattern: 5,
          },
        }),
      }),
    ],
  },
  {
    title: 'Count',
    unlockCategory: 1,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Go from 0 to 9
          </p><ul>
            <li>clicks : 45</li>
            <li>patterns : 10</li>
          </ul>
        `,
        id: 9,
        title: 'Normal',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
          ]),
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: uniform(10, 3),
        }),
      }),
      new Challenge({
        description: `<p>
        Go from 0 to 9
          </p><ul>
            <li>clicks : 45</li>
            <li>patterns : 10</li>
          </ul>
        `,
        id: 10,
        title: 'Hard',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
          ]),
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: uniformSumInRanges([3, 4], 10, 38),
        }),
      }),
      new Challenge({
        description: `<p>
        Go from 0 to 9. You are not allowed any mistakes
          </p><ul>
            <li>clicks : 45</li>
            <li>patterns : 10</li>
          </ul>
        `,
        id: 11,
        title: 'Expert',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
          ]),
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: uniformSumInRanges([3, 5], 10, 45),
        }),
      }),
    ],
  },
  {
    title: 'Category 3',
    unlockCategory: 2,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this third category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 6</li>
          </ul>
        `,
        id: 12,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([1, 10, 11, 24, 25, 27, 28, 86]),
          patternCount: 6,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([5, 7], 6, 34),
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this third category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 8</li>
          </ul>
        `,
        id: 13,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([1, 10, 11, 24, 25, 27, 28, 86]),
          patternCount: 8,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [7, 11],
                [6, 10],
                [4, 7],
                [7, 11],
                [7, 11],
                [4, 6],
                [4, 6],
                [4, 7],
              ],
              46
            ),
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this third category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 75s</li>
            <li>patterns : 16</li>
          </ul>
        `,
        id: 14,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 75,
          patternList: patternList([1, 10, 11, 24, 25, 27, 28, 86]),
          patternCount: 16,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 11],
                [6, 10],
                [4, 7],
                [5, 11],
                [5, 11],
                [4, 6],
                [4, 6],
                [4, 7],
                [5, 11],
                [6, 10],
                [4, 7],
                [5, 11],
                [5, 11],
                [4, 6],
                [4, 6],
                [4, 7],
              ],
              86
            ),
        }),
      }),
    ],
  },
  {
    title: 'Tile Centipede',
    unlockCategory: 2,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Finish this weird pattern as it keeps growing
          </p><ul>
            <li>time : 50s</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 15,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 50,
          patternList: patternList([86, 183, 184, 185]),
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [4, 5],
                [5, 7],
                [8, 13],
                [10, 18],
              ],
              30
            ),
        }),
      }),
      new Challenge({
        description: `<p>
        Finish this weird pattern as it keeps growing
          </p><ul>
            <li>time : 50s</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 16,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 50,
          patternList: patternList([86, 183, 184, 185]),
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [4, 5],
                [5, 7],
                [9, 13],
                [13, 18],
              ],
              41
            ),
        }),
      }),
      //TODO: add more patterns for expert
      new Challenge({
        description: `<p>
        Finish this weird pattern as it keeps growing
          </p><ul>
            <li>time : 30s</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 17,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 30,
          patternList: patternList([86, 183, 184, 185]),
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [4, 5],
                [5, 7],
                [9, 13],
                [13, 18],
              ],
              40
            ),
        }),
      }),
    ],
  },
  {
    title: 'Category 4',
    unlockCategory: 3,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this fourth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 6</li>
          </ul>
        `,
        id: 18,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([26, 30, 33, 62, 85, 100, 128]),
          patternCount: 6,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([4, 8], 6, 40),
          // difficulty: () => sumInRanges([[6,10],[3,5],[4,7],[4,8],[4,8],[4,8],[4,8],[6,10]], 40)
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this fourth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 7</li>
          </ul>
        `,
        id: 19,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([26, 30, 33, 62, 85, 100, 128]),
          patternCount: 7,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [7, 11],
                [5, 7],
                [5, 8],
                [5, 8],
                [4, 8],
                [4, 8],
                [6, 12],
              ],
              45
            ),
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this fourth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 70s</li>
            <li>patterns : 14</li>
          </ul>
        `,
        id: 20,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 70,
          patternList: patternList([26, 30, 33, 62, 85, 100, 128]),
          patternCount: 14,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [7, 11],
                [5, 7],
                [5, 8],
                [5, 8],
                [4, 8],
                [4, 8],
                [6, 12],
                [7, 11],
                [5, 7],
                [5, 8],
                [5, 8],
                [4, 8],
                [4, 8],
                [6, 12],
              ],
              85
            ),
        }),
      }),
    ],
  },
  {
    title: 'Unconventional',
    unlockCategory: 3,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Simply finish this pattern 4 times
          </p><ul>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 21,
        title: 'Normal',
        settings: new ChallengeProperties({
          patternList: patternList([29, 29, 29, 29]),
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () => [3, 4, 5, 6],
        }),
      }),
      new Challenge({
        description: `<p>
        Simply finish this pattern 4 times
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 22,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([29, 29, 29, 29]),
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () => [4, 5, 6, 7],
        }),
      }),
      new Challenge({
        description: `<p>
        Finish this pattern 6 times
          </p><ul>
            <li>patterns : 6</li>
            <li>clicks per pattern: 20</li>
          </ul>
        `,
        id: 23,
        title: 'Expert',
        settings: new ChallengeProperties({
          patternList: [
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
            new ChallengePattern({
              id: 29,
              layout: Layout.fromId(29),
              moveLimitPerPattern: 20,
            }),
          ],
          patternCount: 6,
          patternListOrder: LINEAR,
          difficulty: () => [3, 4, 5, 6, 7, 8],
        }),
      }),
    ],
  },
  {
    title: 'Category 5',
    unlockCategory: 4,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this fifth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 45s</li>
            <li>patterns : 6</li>
          </ul>
        `,
        id: 24,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 45,
          patternList: patternList([2, 37, 38, 53, 56, 58, 138, 31]),
          patternCount: 6,
          patternListOrder: RANDOM,
          // difficulty: () => sumInRanges([[5,9],[5,9],[5,9],[4,7],[5,9],[5,5],[4,6],[5,9]], 45)
          difficulty: uniformSumInRanges([5, 8], 6, 45),
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this fifth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 10</li>
          </ul>
        `,
        id: 25,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([2, 37, 38, 53, 56, 58, 138, 31]),
          patternCount: 10,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 9],
                [5, 9],
                [5, 9],
                [4, 7],
                [5, 9],
                [5, 5],
                [4, 6],
                [5, 9],
                [5, 9],
                [5, 9],
              ],
              69
            ), //55
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this fifth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 16</li>
          </ul>
        `,
        id: 26,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([2, 37, 38, 53, 56, 58, 138, 31]),
          patternCount: 16,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 9],
                [5, 9],
                [5, 9],
                [4, 7],
                [5, 9],
                [5, 5],
                [4, 6],
                [5, 9],
                [5, 9],
                [5, 9],
                [5, 9],
                [4, 7],
                [5, 9],
                [5, 5],
                [4, 6],
                [5, 9],
              ],
              95
            ),
        }),
      }),
    ],
  },
  {
    title: 'Category 6',
    unlockCategory: 5,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this sixth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 6</li>
          </ul>
        `,
        id: 27,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([36, 48, 49, 69, 70, 84, 102, 103, 106]),
          patternCount: 6,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([6, 9], 6, 50),
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this sixth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 9</li>
          </ul>
        `,
        id: 28,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([36, 48, 49, 69, 70, 84, 102, 103, 106]),
          patternCount: 9,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 8],
                [5, 8],
                [5, 8],
                [8, 12],
                [6, 9],
                [6, 9],
                [6, 6],
                [9, 12],
                [10, 14],
              ],
              80
            ),
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this sixth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 120s</li>
            <li>patterns : 18</li>
          </ul>
        `,
        id: 29,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 120,
          patternList: patternList([36, 48, 49, 69, 70, 84, 102, 103, 106]),
          patternCount: 18,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 8],
                [5, 8],
                [5, 8],
                [8, 12],
                [6, 9],
                [6, 9],
                [6, 6],
                [9, 12],
                [10, 14],
                [5, 8],
                [5, 8],
                [5, 8],
                [8, 12],
                [6, 9],
                [6, 9],
                [6, 6],
                [9, 12],
                [10, 14],
              ],
              130
            ),
        }),
      }),
    ],
  },
  {
    title: 'Corrupted',
    unlockCategory: 4,
    allUnlocked: true,
    challenges: [
      new Challenge({
        description: `<p>
          Survive as long as you can as this pattern slowly corrupts. Every pattern you finish gives you extra time
          </p><ul>
            <li>time : 60s</li>
            <li>extra time : 5s</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 30,
        title: 'Normal (5x5)',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(2, 1),
            corrupted
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 5,
          },
        }),
      }),
      new Challenge({
        description: `<p>
          Survive as long as you can as this pattern slowly corrupts. Every pattern you finish gives you extra time
          </p><ul>
            <li>time : 30s</li>
            <li>extra time : 5s</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 31,
        title: 'Hard (5x5)',
        settings: new ChallengeProperties({
          timeLimit: 30,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(2, 1),
            corrupted
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 5,
          },
        }),
      }),
      new Challenge({
        description: `<p>
          Survive as long as you can as this pattern slowly corrupts. Every pattern you finish gives you extra time
          </p><ul>
            <li>time : 45</li>
            <li>extra time : 15s</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 32,
        title: 'Easy (5x5)',
        settings: new ChallengeProperties({
          timeLimit: 45,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(2, 1),
            corrupted
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 15,
          },
        }),
      }),
    ],
  },
  {
    title: 'Snake',
    unlockCategory: 5,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
          CHALLENGE NOT DONE</p>
        `,
        id: 33,
        title: 'Normal',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([156]), //TODO create snake patterns, add only small ones in
          patternCount: 1, // 10
          patternListOrder: RANDOM,
          difficulty: uniform(10, 3), //sumInRanges
        }),
      }),
      new Challenge({
        description: `<p>
          CHALLENGE NOT DONE</p>
        `,
        id: 34,
        title: 'Hard',
        settings: new ChallengeProperties({
          moveLimit: 45,
          patternList: patternList([
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
          ]), //TODO create snake patterns
          patternCount: 10, //20
          patternListOrder: RANDOM,
          difficulty: uniform(10, 3), //sumInRanges
        }),
      }),
      new Challenge({
        description: `<p>
          CHALLENGE NOT DONE</p>
        `,
        id: 35,
        title: 'Survival',
        settings: new ChallengeProperties({
          timeLimit: 10,
          patternList: patternList([
            156, 157, 158, 159, 160, 161, 162, 163, 164, 165,
          ]), //TODO create snake patterns
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: uniform(10, 3), //sumInRanges
        }),
      }),
    ],
  },
  {
    title: 'Category 7',
    unlockCategory: 6,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Attempt to master this seventh category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 6</li>
          </ul>
        `,
        id: 36,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([15, 44, 47, 52, 65, 87, 97, 101, 117]),
          patternCount: 6,
          patternListOrder: RANDOM,
          difficulty: uniformSumInRanges([7, 10], 6, 50),
        }),
      }),
      new Challenge({
        description: `<p>
        Confirm your mastery of this sixth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 80s</li>
            <li>patterns : 9</li>
          </ul>
        `,
        id: 37,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 80,
          patternList: patternList([15, 44, 47, 52, 65, 87, 97, 101, 117]),
          patternCount: 9,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 9],
                [9, 14],
                [7, 10],
                [8, 12],
                [10, 15],
                [10, 17],
                [8, 13],
                [10, 14],
                [8, 13],
              ],
              90
            ),
        }),
      }),
      new Challenge({
        description: `<p>
        Prove your expertize of this sixth category by finishing a number of patterns in limited time
          </p><ul>
            <li>time : 90s</li>
            <li>patterns : 18</li>
          </ul>
        `,
        id: 38,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 90,
          patternList: patternList([15, 44, 47, 52, 65, 87, 97, 101, 117]),
          patternCount: 18,
          patternListOrder: RANDOM,
          difficulty: () =>
            sumInRanges(
              [
                [5, 9],
                [9, 14],
                [7, 10],
                [8, 12],
                [10, 15],
                [10, 17],
                [8, 13],
                [10, 14],
                [8, 13],
                [5, 9],
                [9, 14],
                [7, 10],
                [8, 12],
                [10, 15],
                [10, 17],
                [8, 13],
                [10, 14],
                [8, 13],
              ],
              155
            ),
        }),
      }),
    ],
  },
  {
    title: 'Metamorphosis',
    unlockCategory: 6,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
          Play as one pattern slowly switches into another
          </p><ul>
            <li>time : 50s</li>
            <li>patterns : 5</li>
          </ul>
        `,
        id: 39,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 50,
          patternList: patternList([97, 188, 189, 190, 65]),
          patternCount: 5,
          patternListOrder: LINEAR,
          difficulty: uniformSumInRanges([6, 9], 5, 39),
        }),
      }),
      new Challenge({
        id: 40,
        description: `<p>
          Play as one pattern slowly switches into another
          </p><ul>
            <li>time : 55s</li>
            <li>patterns : 5</li>
          </ul>
        `,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 55,
          patternList: patternList([65, 191, 192, 193, 101]),
          patternCount: 5,
          patternListOrder: LINEAR,
          difficulty: uniformSumInRanges([8, 12], 5, 50),
        }),
      }),
      new Challenge({
        description: `<p>
          Play as one pattern slowly switches into another
          </p><ul>
            <li>time : 60s</li>
            <li>patterns : 5</li>
          </ul>
        `,
        id: 41,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 60,
          patternList: patternList([101, 194, 195, 196, 44]),
          patternCount: 5,
          patternListOrder: LINEAR,
          difficulty: uniformSumInRanges([8, 12], 5, 53),
        }),
      }),
    ],
  },
  {
    title: 'Game of Life',
    unlockCategory: 7,
    allUnlocked: true,
    challenges: [
      new Challenge({
        description: `<p>
          Survive as long as you can as the pattern changes according to Conway's game of life  
          </p><ul>
            <li>time : infinite</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 42,
        title: 'Q survival',
        settings: new ChallengeProperties({
          timeLimit: 30,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(168, 6),
            gameOfLife
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 15,
          },
        }),
      }),
      new Challenge({
        description: `<p>
          Survive as long as you can as the pattern changes according to Conway's game of life  
          </p><ul>
            <li>time : infinite</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 43,
        title: 'Smiley survival',
        settings: new ChallengeProperties({
          timeLimit: 30,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(186, 8),
            gameOfLife
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 15,
          },
        }),
      }),
      new Challenge({
        description: `<p>
          Survive as long as you can as the pattern changes according to Conway's game of life  
          </p><ul>
            <li>time : infinite</li>
            <li>patterns : infinite</li>
          </ul>
        `,
        id: 44,
        title: 'Arrow survival',
        settings: new ChallengeProperties({
          timeLimit: 30,
          patternSequence: new PatternSequence(
            getPatternFromIdWithPadding(187, 6),
            gameOfLife
          ),
          difficulty: n => Math.floor(7 * Math.log10(n + 1) + 3),
          defaults: {
            bonusTimePerPattern: 15,
          },
        }),
      }),
    ],
  },
  {
    title: 'Back to basics',
    unlockCategory: 7,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
          Finish this simple pattern as the number of tile states keeps increasing 
          </p><ul>
            <li>time : 100</li>
            <li>patterns : 3</li>
          </ul>
        `,
        id: 45,
        title: 'Normal',
        settings: new ChallengeProperties({
          timeLimit: 100,
          patternList: [
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 2,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 3,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 4,
            }),
          ],
          patternCount: 3,
          patternListOrder: LINEAR,
          difficulty: uniform(3, 7),
        }),
      }),
      new Challenge({
        description: `<p>
          Finish this simple pattern as the number of tile states keeps increasing 
          </p><ul>
            <li>time : 100</li>
            <li>patterns : 4</li>
          </ul>
        `,
        id: 46,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 100,
          patternList: [
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 2,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 3,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 4,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 5,
            }),
          ],
          patternCount: 4,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [5, 7],
                [7, 12],
                [9, 12],
                [9, 12],
              ],
              34
            ),
        }),
      }),
      new Challenge({
        description: `<p>
          Finish this simple pattern as the number of tile states keeps increasing 
          </p><ul>
            <li>time : 100</li>
            <li>patterns : 5</li>
          </ul>
        `,
        id: 47,
        title: 'Expert',
        settings: new ChallengeProperties({
          timeLimit: 100,
          patternList: [
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 2,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 3,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 4,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 5,
            }),
            new ChallengePattern({
              id: 11,
              layout: Layout.fromId(11),
              moduloPerPattern: 6,
            }),
          ],
          patternCount: 5,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [5, 7],
                [7, 12],
                [9, 12],
                [9, 12],
                [10, 13],
              ],
              42
            ),
        }),
      }),
    ],
  },
  {
    title: 'Growing square',
    unlockCategory: 8,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Finish this weird pattern as it keeps growing
          </p><ul>
            <li>time : 120s</li>
            <li>patterns : 10</li>
          </ul>
        `,
        id: 48,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 120,
          patternList: patternList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
          patternCount: 10,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [4, 7],
                [7, 11],
                [8, 12],
                [14, 20],
                [20, 25],
                [20, 25],
                [30, 36],
                [35, 40],
                [35, 50],
                [40, 55],
              ],
              235
            ),
        }),
      }),
    ],
  },
  {
    title: 'Shrinking circle',
    unlockCategory: 8,
    allUnlocked: false,
    challenges: [
      new Challenge({
        description: `<p>
        Finish this weird pattern as it keeps shrinking
          </p><ul>
            <li>time : 120s</li>
            <li>patterns : 7</li>
          </ul>
        `,
        id: 49,
        title: 'Hard',
        settings: new ChallengeProperties({
          timeLimit: 120,
          patternList: patternList([136, 19, 18, 17, 47, 177, 14]),
          patternCount: 7,
          patternListOrder: LINEAR,
          difficulty: () =>
            sumInRanges(
              [
                [30, 36],
                [18, 25],
                [15, 19],
                [9, 12],
                [6, 10],
                [3, 5],
                [3, 5],
              ],
              97
            ),
        }),
      }),
    ],
  },
  /*

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
  })*/
].map(category => {
  category.challenges.map(challenge => {
    challenge.process.unlockCategory = category.unlockCategory;
    return challenge;
  });
  return category;
});

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
