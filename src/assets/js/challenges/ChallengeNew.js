import { require } from '../utils.js';



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
    this.id = id;
    this.title = title;
    this.settings = settings;
  }

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
}


const challenge = Challenge({
  id: 1,
  title: 'Category 1',
  settings: ChallengeProperties({
    timeLimit: 60,
    patternList: [
      ChallengePattern({
        id: 0,
      }),
      ChallengePattern({
        id: 14,
      }),
      ChallengePattern({
        id: 20,
      }),
      ChallengePattern({
        id: 21,
      }),
      ChallengePattern({
        id: 22,
      }),
      ChallengePattern({
        id: 23,
      }),
      ChallengePattern({
        id: 46,
      }),
    ],
    patternCount: 14,
    difficulty: () => new Array(14).fill(4)
  })
});