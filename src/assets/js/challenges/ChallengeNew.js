import { require } from '../utils.js';
import { Layout } from '../Layout.js';


export class Challenge {
  /**
   * Constructs a new Challenge
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
   * @param {Object} config - The configuration object
   * @param {Number} config.timeLimit - The time limit of the challenge
   * @param {Number} config.moveLimit - The move limit of the challenge
   * @param {ChallengePattern[]} config.patternList - The list of patterns of the challenge
   * @param {Number} config.patternCount - The number of patterns of the challenge
   * @param {"linear"|"random"} config.patternListOrder - The order of the pattern list of the challenge
   * @param {Function} config.difficulty - The difficulty of the challenge
   * @param {Object} config.defaults - The default values for each pattern of the challenge
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
   * @param {Object} config - The configuration object
   * @param {Number} config.id - The id of the pattern
   * @param {Number} config.timeLimitPerPattern - The time limit for this pattern
   * @param {Number} config.moveLimitPerPattern - The move limit for this pattern
   * @param {Number} config.bonusTimePerPattern - The bonus time for this pattern
   * @param {Number} config.moduloPerPattern - The modulo for this pattern
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
    this.timeLimit = timeLimitPerPattern;
    this.moveLimit = moveLimitPerPattern;
    this.bonusTime = bonusTimePerPattern;
    this.modulo = moduloPerPattern;
  }

  /**
   * Creates a Layout from this Challenge Pattern
   * @returns {Layout} The layout
   */
  toLayout() {
    return Layout.LAYOUTS[this.id].copy();
  }
}

class ChallengeProcess {
  /**
   * Constructs a new Challenge Process
   * @param {Challenge} challenge 
   */
  constructor(challenge) {
    this.challenge = challenge;
    this.patternIndex = 0;
    this.done = false;
    this.patternGenerator = this.nextPattern();
    this.difficulties = this.challenge.settings.difficulty();
  }

  next() {
    const { value: pattern, done } = this.patternGenerator.next();
    if (!done) {
      this.patternIndex++;
      pattern.toLayout().generatePosition(this.difficulties[this.patternIndex], pattern.modulo);
      return pattern;
    } else {
      return null;
    }
  }

  reset() {
    this.patternIndex = 0;
    this.patternGenerator = this.nextPattern();
  }

  /**
   * Gets the next pattern of the challenge
   * @returns {Generator<ChallengePattern, ChallengePattern>} The next pattern
   */
  *nextPattern() {
    const { patternCount, patternListOrder } = this.settings;
    if (patternCount === -1) {
      if (patternListOrder === 'linear') {
        while (true) {
          for (const pattern of this.settings.patternList) {
            yield pattern;
          }
        }
      } else if (patternListOrder === 'random') {
        while (true) {
          const patternList = [...this.settings.patternList];
          while (patternList.length) {
            const index = Math.floor(Math.random() * patternList.length);
            yield patternList.splice(index, 1)[0];
          }
        }
      }
    } else {
      if (patternListOrder === 'linear') {
        for (let i = 0; i < patternCount - 1; i++) {
          yield this.settings.patternList[i % this.settings.patternList.length];
        }
        return this.settings.patternList[(patternCount - 1) % this.settings.patternList.length]
      } else if (patternListOrder === 'random') {
        const patternList = [...this.settings.patternList];
        for (let i = 0; i < patternCount - 1; i++) {
          const index = Math.floor(Math.random() * patternList.length);
          yield patternList.splice(index, 1)[0];
          if (patternList.length === 0) {
            patternList.push(...this.settings.patternList);
          }
        }
        return patternList[0];
      }
    }
  }
}


const challenge = Challenge({
  id: 1,
  title: 'Challenge 1',
  settings: ChallengeProperties({
    timeLimit: 60,
    moveLimit: 10,
    patternList: [
      ChallengePattern({
        id: 1,
        timeLimitPerPattern: 10,
        moveLimitPerPattern: 2,
      }),
      ChallengePattern({
        id: 2,
        bonusTimePerPattern: 5,
        moduloPerPattern: 2,
      }),
      ChallengePattern({
        id: 3,
        timeLimitPerPattern: 10,
        moveLimitPerPattern: 2,
        moduloPerPattern: 2,
      }),
      ChallengePattern({
        id: 4,
        timeLimitPerPattern: 10,
        moveLimitPerPattern: 2,
        bonusTimePerPattern: 5,
      }),
    ],
    patternCount: 8,
    patternListOrder: 'random',
    difficulty: () => {},
    defaults: {
      timeLimitPerPattern: 10,
      moveLimitPerPattern: 2,
      bonusTimePerPattern: 5,
      moduloPerPattern: 2,
    }
  })
});

function randomSolutionOptimized(ranges, targetSum, maxAttempts = 1000) {
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