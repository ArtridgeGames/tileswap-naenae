import { require } from '../utils.js';
import { Layout } from '../Layout.js';


export class Challenge {
  /**
   * Constructs a new Challenge
   * A Challenge is a collection of patterns that the player has to solve in a given order
   * @param {Object} config - The configuration object
   * @param {Number} config.id - The id of the challenge
   * @param {String} config.title - The title of the challenge
   * @param {ChallengeProperties} config.settings - The settings of the challenge
   */
  constructor({
    id,
    title,
    settings,
  }) {
    require(id, title, settings);

    this.id = id;
    this.title = title;
    this.settings = settings;
    this.process = new ChallengeProcess(this);
  }
}

class ChallengeProperties {

  static GLOBAL_DEFAULTS = {
    timeLimit: -1,
    moveLimit: -1,
    patternCount: -1,
    patternListOrder: 'random',
    timeLimitPerPattern: -1,
    moveLimitPerPattern: -1,
    bonusTimePerPattern: 0,
    moduloPerPattern: 2,
  }

  /**
   * Constructs Challenge Properties
   * Challenge Properties are the settings of a challenge. They define the time limit, the move limit, the patterns, etc.
   * The specific definition is given in challenge_specification.md
   * @param {Object} config - The configuration object
   * @param {Number} [config.timeLimit] - The time limit of the challenge
   * @param {Number} [config.moveLimit] - The move limit of the challenge
   * @param {ChallengePattern[]} config.patternList - The list of patterns of the challenge
   * @param {Number} [config.patternCount] - The number of patterns of the challenge
   * @param {"linear"|"random"} [config.patternListOrder] - The order of the pattern list of the challenge
   * @param {Function} config.difficulty - The difficulty of the challenge
   * @param {Object} [config.defaults] - The default values for each pattern of the challenge. Can be left empty, but not removed
   */
  constructor({
    timeLimit,
    moveLimit,
    patternList,
    patternCount,
    patternListOrder,
    difficulty,
    defaults: {
      timeLimitPerPattern,
      moveLimitPerPattern,
      bonusTimePerPattern,
      moduloPerPattern,
    }
  }) {
    require(patternList, difficulty)

    this.timeLimit = timeLimit ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimit;
    this.moveLimit = moveLimit ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimit;
    this.patternList = patternList;
    this.patternCount = patternCount ?? ChallengeProperties.GLOBAL_DEFAULTS.patternCount;
    this.patternListOrder = patternListOrder ?? ChallengeProperties.GLOBAL_DEFAULTS.patternListOrder;
    this.difficulty = difficulty;
    this.defaults = {
      timeLimitPerPattern,
      moveLimitPerPattern,
      bonusTimePerPattern,
      moduloPerPattern,
    };

    this.applyDefaults();
  }

  /**
   * Applies default values to each pattern of the pattern list.
   * Default values are given according to the hierarchy going from pattern specific,
   * to challenge specific, to global.
   */
  applyDefaults() {
    for (const pattern of this.patternList) {
      pattern.timeLimitPerPattern
        ??= (this.defaults.timeLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimitPerPattern);
      pattern.moveLimitPerPattern
        ??= (this.defaults.moveLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimitPerPattern);
      pattern.bonusTimePerPattern
        ??= (this.defaults.bonusTimePerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.bonusTimePerPattern);
      pattern.moduloPerPattern
        ??= (this.defaults.moduloPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moduloPerPattern);
    }
  }
}


class ChallengePattern {
  /**
   * Constructs a new Challenge Pattern
   * A Challenge pattern represents a single pattern that is to be played during a challenge
   * @param {Object} config - The configuration object
   * @param {Number} config.id - The id of the pattern
   * @param {Number} [config.timeLimitPerPattern] - The time limit for this pattern
   * @param {Number} [config.moveLimitPerPattern] - The move limit for this pattern
   * @param {Number} [config.bonusTimePerPattern] - The bonus time for this pattern
   * @param {Number} [config.moduloPerPattern] - The modulo for this pattern
   */
  constructor({
    id,
    timeLimitPerPattern,
    moveLimitPerPattern,
    bonusTimePerPattern,
    moduloPerPattern
  }) {
    require(id);

    this.id = id;
    this.timeLimitPerPattern = timeLimitPerPattern;
    this.moveLimitPerPattern = moveLimitPerPattern;
    this.bonusTimePerPattern = bonusTimePerPattern;
    this.moduloPerPattern = moduloPerPattern;
  }

  /**
   * Creates a Layout from this Challenge Pattern
   * @returns {Layout} The layout
   */
  toLayout() {
    return Layout.FILTERED_LAYOUTS.find(e => e.id === this.id).copy();
  }
}

export class ChallengeProcess {

  static STATE = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    WON: 2,
    LOST_TIME: 3,
    LOST_MOVES: 4,
  }

  /**
   * Constructs a new Challenge Process
   * A Challenge Process manages the ongoing state when
   * a challenge is being played
   * @param {Challenge} challenge 
   */
  constructor(challenge) {
    this.challenge = challenge;
    this.patternIndex = -1;
    this.done = false;
    this.patternGenerator = this.createPatternGenerator();
    this.difficulties = this.challenge.settings.difficulty();
    this.currentLayout = this.next();

    this.totalClicks = challenge.settings.moveLimit;
    this.currentTime = challenge.settings.timeLimit;
    this.currentPatternTime = null;

    this.timerId = null;

    this.state = ChallengeProcess.STATE.NOT_STARTED;
  }

  /**
   * This function listens for click events and manages the challenge state accordingly.
   */
  handleClick() {
    if (this.done) return;

    // The pattern is solved
    if (this.currentLayout.isSolved()) {
      this.currentTime += this.patternBonusTime;
      this.currentLayout = this.next();

      // No patterns remaining, the player won
      if (this.currentLayout === null) {
        this.won();
        return;
      }
    }

    // Check if a move limit is enabled and if no moves are remaining
    if (this.challenge.settings.moveLimit !== -1) {
      this.totalClicks--;
      if (this.totalClicks <= 0) {
        this.lost(ChallengeProcess.STATE.LOST_MOVES);
        return;
      }
    }

    // Check if pattern move limit is enabled and if no moves are remaining
    if (this.patternClicks !== -1) {
      this.patternClicks--;
      if (this.patternClicks <= 0) {
        this.lost(ChallengeProcess.STATE.LOST_MOVES);
        return;
      }
    }
  }

  /**
   * Computes the next layout of the Challenge
   * Layouts are provided by the pattern generating function below {@link createPatternGenerator}
   * @returns {Layout|null} the layout or null if the challenge is finished
   */
  next() {
    const { value: pattern, done } = this.patternGenerator.next();
    if (!done) {
      this.patternIndex++;

      // Extract values specific to the current pattern
      this.currentPatternTime = pattern.timeLimitPerPattern;
      this.patternModulo = pattern.moduloPerPattern;
      this.patternClicks = pattern.moveLimitPerPattern;
      this.patternBonusTime = pattern.bonusTimePerPattern;

      // Compute a layout with a random position, from the given difficulty array
      return pattern.toLayout().generatePosition(this.difficulties[
        this.challenge.settings.patternList.findIndex(e => e.id === pattern.id)
      ], pattern.moduloPerPattern);
    } else {
      return null;
    }
  }

  /**
   * Starts the Challenge timers and marks the Challenge as IN_PROGRESS.
   */
  start() {
    this.state = ChallengeProcess.STATE.IN_PROGRESS;

    this.timerId = setInterval(() => {
      if (this.challenge.settings.timeLimit !== -1) {
        this.currentTime--;
        if (this.currentTime <= 0) {
          this.lost(ChallengeProcess.STATE.LOST_TIME);
          return;
        }
      }
      if (this.currentPatternTime !== -1) {
        this.currentPatternTime--;
        if (this.currentPatternTime <= 0) {
          this.lost(ChallengeProcess.STATE.LOST_TIME);
          return;
        }
      }
    }, 1000);
  }

  /**
   * Resets the Challenge Process to default values, so it can be played again.
   * @todo check if everything to be reset is indeed reset
   */
  reset() {
    this.state = ChallengeProcess.STATE.NOT_STARTED;
    this.done = false;
    this.patternIndex = -1;
    this.totalClicks = this.challenge.settings.moveLimit;
    this.currentTime = this.challenge.settings.timeLimit;
    this.currentPatternTime = null;
    this.patternGenerator = this.createPatternGenerator();
    this.currentLayout = this.next();
    this.difficulties = this.challenge.settings.difficulty();
    clearInterval(this.timerId);
  }

  /**
   * Method to be called when the challenge is won
   */
  won() {
    this.state = ChallengeProcess.STATE.WON;
    this.done = true;
    clearInterval(this.timerId);
  }

  /**
   * Method to be called when the challenge is over because the player lost
   * @param {ChallengeProcess.STATE.LOST_MOVES|ChallengeProcess.STATE.LOST_TIMES} reason the reason for the loss
   */
  lost(reason) {
    this.state = reason;
    this.done = true;
    clearInterval(this.timerId);
  }

  /**
   * Gets the next pattern of the challenge. This works as a generating function,
   * meaning the function can resume generating patterns even after having yielded one,
   * in contrast of needing to keep track of an index, or some other cluttered code that Pierre would write.
   * @yields {Generator<ChallengePattern, ChallengePattern>} The next pattern
   */
  *createPatternGenerator() {
    const { patternCount, patternListOrder } = this.challenge.settings;

    // Infinite patterns
    if (patternCount === -1) {
      if (patternListOrder === 'linear') {
        // Continuously loops through the pattern list, yielding each pattern in a linear manner
        while (true) {
          for (const pattern of this.challenge.settings.patternList) {
            yield pattern;
          }
        }
      } else if (patternListOrder === 'random') {
        // Continously selects a random pattern without repeating
        while (true) {
          const patternList = [...this.challenge.settings.patternList];
          while (patternList.length) {
            const index = Math.floor(Math.random() * patternList.length);
            yield patternList.splice(index, 1)[0];
          }
        }
      }
    } else {
      if (patternListOrder === 'linear') {
        // Selects patterns in order and returns when the end is reached
        for (let i = 0; i < patternCount - 1; i++) {
          yield this.challenge.settings.patternList[i % this.challenge.settings.patternList.length];
        }
        return this.challenge.settings.patternList[(patternCount - 1) % this.challenge.settings.patternList.length]
      } else if (patternListOrder === 'random') {
        // Selects the patterns in a random order until the end is reached
        const patternList = [...this.challenge.settings.patternList];
        for (let i = 0; i < patternCount - 1; i++) {
          const index = Math.floor(Math.random() * patternList.length);
          yield patternList.splice(index, 1)[0];
          if (patternList.length === 0) {
            patternList.push(...this.challenge.settings.patternList);
          }
        }
        return patternList[0];
      }
    }
  }
}

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

export const CHALLENGES = [
  new Challenge({
    id: 1,
    title: 'Category 1 - Hard',
    settings: new ChallengeProperties({
      timeLimit: 60,
      patternList: [
        new ChallengePattern({
          id: 0
        }),
        new ChallengePattern({
          id: 14
        }),
        new ChallengePattern({
          id: 20
        }),
        new ChallengePattern({
          id: 21
        }),
        new ChallengePattern({
          id: 22
        }),
        new ChallengePattern({
          id: 23
        }),
        new ChallengePattern({
          id: 46
        }),
      ],
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
      patternList: [
        new ChallengePattern({
          id: 0
        }),
      ],
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
      patternList: [
        new ChallengePattern({
          id: 156
        }), new ChallengePattern({
          id: 157
        }), new ChallengePattern({
          id: 158
        }), new ChallengePattern({
          id: 159
        }), new ChallengePattern({
          id: 160
        }), new ChallengePattern({
          id: 161
        }), new ChallengePattern({
          id: 162
        }), new ChallengePattern({
          id: 163
        }), new ChallengePattern({
          id: 164
        }), new ChallengePattern({
          id: 165
        }),
      ],
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
      patternList: [
        new ChallengePattern({
          id: 119
        }), new ChallengePattern({
          id: 109
        }), new ChallengePattern({
          id: 110
        }), new ChallengePattern({
          id: 111
        }), new ChallengePattern({
          id: 142
        }), new ChallengePattern({
          id: 143
        }), new ChallengePattern({
          id: 144
        }), new ChallengePattern({
          id: 145
        }), new ChallengePattern({
          id: 131
        }), new ChallengePattern({
          id: 166
        }), new ChallengePattern({
          id: 146
        }), new ChallengePattern({
          id: 130
        }), new ChallengePattern({
          id: 132
        }), new ChallengePattern({
          id: 133
        }), new ChallengePattern({
          id: 156
        }), new ChallengePattern({
          id: 167
        }), new ChallengePattern({
          id: 168
        }), new ChallengePattern({
          id: 169
        }), new ChallengePattern({
          id: 161
        }), new ChallengePattern({
          id: 170
        }), new ChallengePattern({
          id: 171
        }), new ChallengePattern({
          id: 172
        }), new ChallengePattern({
          id: 173
        }), new ChallengePattern({
          id: 174
        }), new ChallengePattern({
          id: 175
        }), new ChallengePattern({
          id: 176
        }),
      ],
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
      patternList: [
        new ChallengePattern({
          id: 0
        })
      ],
      patternCount: -1,
      patternListOrder: 'linear',
      difficulty: uniform(1, 3),
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
      patternList: [
        new ChallengePattern({
          id: 86
        }),new ChallengePattern({
          id: 183
        }),new ChallengePattern({
          id: 184
        }),new ChallengePattern({
          id: 185
        }),
      ],
      patternCount: 4,
      patternListOrder: 'linear',
      difficulty: () => sumInRanges([[4,5], [5,7], [9,13], [13,18]], 40),
      defaults: {}
    })
  }),
]