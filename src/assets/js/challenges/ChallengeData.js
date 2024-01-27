import { Layout } from '../Layout.js';
import { Challenge, ChallengePattern, ChallengeProperties, PatternSequence } from './ChallengeNew.js';

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
const patternList = (patternList) => patternList.map((layoutId, index)  => ChallengePattern.fromId(layoutId, { id: index }));

/**
 * Moves a tile from the excluded tiles 
 * @param {ChallengePattern} pattern 
 */
export const corrupted = pattern => {
  const layout = pattern.layout.copy();
  const { exclude } = layout;
  const tiles = layout.width * layout.height;
  const selected = Math.floor(Math.random() * tiles);
  if (exclude.includes(selected)) {
    return corrupted(pattern.copy());
  }
  exclude.push(selected);

  const newLayout = new Layout({ ...layout, exclude });
  return new ChallengePattern({
    ...pattern,
    layout: newLayout
  });
}

export const CHALLENGES = [
  new Challenge({
    id: 1,
    title: 'Category 1 - Hard',
    settings: new ChallengeProperties({
      timeLimit: 60,
      patternList: patternList([0, 14, 20, 21, 22, 23, 46]),
      patternCount: 14,
      patternListOrder: 'random',
      defaults: {},
      difficulty: uniformSumInRanges([3, 5], 7, 30)
    })
  }),
  new Challenge({
    id: 2,
    title: 'Think Fast - Hard',
    settings: new ChallengeProperties({
      timeLimit: 60,
      patternList: patternList([0]),
      patternCount: 15,
      patternListOrder: 'random',
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
      patternListOrder: 'linear',
      difficulty: uniform(10, 3),
      defaults: {}
    })
  }),
  new Challenge({
    id: 4,
    title: 'Read',
    settings: new ChallengeProperties({
      patternList: patternList([119, 109, 110, 111, 142, 143, 144, 145, 131, 166, 146, 130, 132, 133, 156, 167, 168, 169, 161, 170, 171, 172, 173, 174, 175, 176]),
      patternCount: 26,
      patternListOrder: 'linear',
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
      patternListOrder: 'linear',
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
      patternListOrder: 'linear',
      difficulty: () => sumInRanges([[4,5], [5,7], [9,13], [13,18]], 40),
      defaults: {}
    })
  }),
  new Challenge({
    id: 7,
    title: 'Growing Square',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternList: patternList([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
      patternCount: 10,
      patternListOrder: 'linear',
      difficulty:  () => sumInRanges([[4,7], [7,11], [8,12], [14,20], [20,25], [20,25], [30,36], [35, 40]], 150),
      defaults: {}
    })
  }),
  new Challenge({
    id: 8,
    title: 'Shrinking Circle',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternList: patternList([136, 19, 18, 17, 47, 177, 14]),
      patternCount: 7,
      patternListOrder: 'linear',
      difficulty:  () => sumInRanges([[30,36], [18,25], [15,19], [9, 12], [6,10], [3,5], [3,5]], 97),
      defaults: {}
    })
  }),
  new Challenge({
    id: 9,
    title: 'Game of Life',
    settings: new ChallengeProperties({
      patternList: patternList([83, 84, 85, 104, 93, 94, 96, 97, 98, 99, 117, 103, 30, 152]),
      patternCount: 10,
      timeLimit: 80,
      patternListOrder: 'random',
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
      patternListOrder: 'random',
      difficulty:  () => sumInRanges([[6,10], [5,9], [6,13], [2,4], [13,20], [10,15], [4,9], [7,17]], 70),
      defaults: {}
    })
  }),
  new Challenge({
    id: 11,
    title: 'Corrupted',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternCount: 3,
      patternList: new PatternSequence(
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
      difficulty: () => [3, 5, 8],
      defaults: {}
    })
  }),/*
  new Challenge({
    id: 12,
    title: 'Test',
    settings: new ChallengeProperties({
      timeLimit: 120,
      patternCount: 3,
      patternList: [
        new ChallengePattern({
          id: 0,
          layout: new Layout({
            width: 7,
            height: 7,
            exclude: [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48]
          }),
        }),
        corrupted(new ChallengePattern({
          id: 0,
          layout: new Layout({
            width: 7,
            height: 7,
            exclude: [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48]
          }),
        })),
        corrupted(corrupted(new ChallengePattern({
          id: 0,
          layout: new Layout({
            width: 7,
            height: 7,
            exclude: [0, 1, 2, 3, 4, 5, 6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42, 43, 44, 45, 46, 47, 48]
          }),
        }))),
      ],
      patternListOrder: 'linear',
      difficulty: uniform(3, 3),
      defaults: {}
    })
  })*/
]