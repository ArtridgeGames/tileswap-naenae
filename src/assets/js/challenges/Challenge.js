import { expect, require } from '../utils.js';
import { Layout } from '../Layout.js';
import { useStore } from '../../../store/store.js';

export class Challenge {
  /**
   * Constructs a new Challenge
   * A Challenge is a collection of patterns that the player has to solve in a given order
   * @param {Object} config - The configuration object
   * @param {Number} config.id - The id of the challenge
   * @param {String} config.title - The title of the challenge
   * @param {String} config.description - The description of the challenge
   * @param {ChallengeProperties} config.settings - The settings of the challenge
   */
  constructor({
    id,
    title,
    description,
    settings,
  }) {
    require(id, title, settings);

    this.id = id;
    this.title = title ?? "";
    this.description = description;
    this.settings = settings;
    this.process = new ChallengeProcess(this);
  }
}

export class ChallengeProperties {

  static LIST_ORDERS = {
    LINEAR: "linear",
    RANDOM: "random",
  }

  static GLOBAL_DEFAULTS = {
    timeLimit: -1,
    moveLimit: -1,
    patternCount: -1,
    patternListOrder: ChallengeProperties.LIST_ORDERS.RANDOM,
    timeLimitPerPattern: -1,
    moveLimitPerPattern: -1,
    bonusTimePerPattern: 0,
    moduloPerPattern: 2,
    firstTimeScore: 100,
  }

  /**
   * Constructs Challenge Properties
   * Challenge Properties are the settings of a challenge. They define the time limit, the move limit, the patterns, etc.
   * The specific definition is given in challenge_specification.md
   * @param {Object} config - The configuration object
   * @param {Number} [config.timeLimit] - The time limit of the challenge
   * @param {Number} [config.moveLimit] - The move limit of the challenge
   * @param {ChallengePattern[]} config.patternList - The list of patterns available during the challenge
   * @param {PatternSequence} config.patternSequence - The pattern sequence of the challenge
   * @param {Number} [config.patternCount] - The number of patterns of the challenge
   * @param {ChallengeProperties.LIST_ORDERS.LINEAR|ChallengeProperties.LIST_ORDERS.RANDOM} [config.patternListOrder] - The order of the pattern list of the challenge
   * @param {Function} config.difficulty - The difficulty of the challenge
   * @param {Number} [config.firstTimeScore] - The score given to the player the first time they complete the challenge
   * @param {Object} [config.defaults] - The default values for each pattern of the challenge.
   * @param {Number} [config.defaults.timeLimitPerPattern] - The default time limit for each pattern of the challenge
   * @param {Number} [config.defaults.moveLimitPerPattern] - The default move limit for each pattern of the challenge
   * @param {Number} [config.defaults.bonusTimePerPattern] - The default bonus time for each pattern of the challenge
   * @param {Number} [config.defaults.moduloPerPattern] - The default modulo for each pattern of the challenge
   */
  constructor({
    timeLimit,
    moveLimit,
    patternList,
    patternSequence,
    patternCount,
    patternListOrder,
    difficulty,
    firstTimeScore,
    defaults: {
      timeLimitPerPattern,
      moveLimitPerPattern,
      bonusTimePerPattern,
      moduloPerPattern,
    } = {}
  }) {
    require(difficulty);
    expect((patternList instanceof Array) !== (patternSequence instanceof PatternSequence));


    this.timeLimit = timeLimit ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimit;
    this.moveLimit = moveLimit ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimit;
    this.patternList = patternList;
    this.patternSequence = patternSequence;
    this.patternCount = patternCount ?? ChallengeProperties.GLOBAL_DEFAULTS.patternCount;
    this.patternListOrder = patternListOrder ?? ChallengeProperties.GLOBAL_DEFAULTS.patternListOrder;
    this.difficulty = difficulty;
    this.firstTimeScore = firstTimeScore ?? ChallengeProperties.GLOBAL_DEFAULTS.firstTimeScore;
    this.defaults = {
      timeLimitPerPattern,
      moveLimitPerPattern,
      bonusTimePerPattern,
      moduloPerPattern,
    };

    this.isSequence = this.patternSequence !== undefined;
    this.isInfinite = this.patternCount === -1;

    this.applyDefaults();
  }

  /**
   * Applies default values to each pattern of the pattern list.
   * Default values are given according to the hierarchy going from pattern specific,
   * to challenge specific, to global.
   */
  applyDefaults() {
    if (this.isSequence) {
      this.patternSequence.initialState.timeLimitPerPattern
        ??= (this.defaults.timeLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimitPerPattern);
      this.patternSequence.initialState.moveLimitPerPattern
        ??= (this.defaults.moveLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimitPerPattern);
      this.patternSequence.initialState.bonusTimePerPattern
        ??= (this.defaults.bonusTimePerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.bonusTimePerPattern);
      this.patternSequence.initialState.moduloPerPattern
        ??= (this.defaults.moduloPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moduloPerPattern);
    } else {
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
}


export class ChallengePattern {
  /**
   * Constructs a new Challenge Pattern
   * A Challenge pattern represents a single pattern that is to be played during a challenge
   * @param {Object} config - The configuration object
   * @param {Number} config.id - The id of the pattern
   * @param {Layout} config.layout - the layout of the pattern
   * @param {Number} [config.timeLimitPerPattern] - The time limit for this pattern
   * @param {Number} [config.moveLimitPerPattern] - The move limit for this pattern
   * @param {Number} [config.bonusTimePerPattern] - The bonus time for this pattern
   * @param {Number} [config.moduloPerPattern] - The modulo for this pattern
   */
  constructor({
    id,
    layout,
    timeLimitPerPattern,
    moveLimitPerPattern,
    bonusTimePerPattern,
    moduloPerPattern
  }) {
    require(id, layout);

    this.id = id;
    this.layout = layout;
    this.timeLimitPerPattern = timeLimitPerPattern;
    this.moveLimitPerPattern = moveLimitPerPattern;
    this.bonusTimePerPattern = bonusTimePerPattern;
    this.moduloPerPattern = moduloPerPattern;
  }

  /**
   * Creates a ChallengePattern from a layout id
   * and a configuration object
   * @param {Number} layoutId layout id
   * @param {Object} config The configuration object. See {@link ChallengePattern}.
   * @returns {ChallengePattern} The ChallengePattern
   */
  static fromId(layoutId, config) {
    const layout = Layout.fromId(layoutId);
    return new ChallengePattern({
      layout,
      ...config
    });
  }

  copy() {
    return new ChallengePattern({
      ...this,
      layout: this.layout.copy()
    });
  }
}


export class ChallengeProcess {

  static STATE = {
    NOT_STARTED: 0,
    IN_PROGRESS: 1,
    WON: 2,
    LOST_TIME: 3,
    LOST_MOVES: 4,
    PAUSED: 5,
  }

  /**
   * Constructs a new Challenge Process.
   * A Challenge Process manages the ongoing state when
   * a challenge is being played.
   * @param {Challenge} challenge - The challenge being played
   */
  constructor(challenge) {
    require(challenge);
    this.settings = challenge.settings;
    this.id = challenge.id;

    this.firstTime = true;
    this.temporaryScore = 0;
    this.latestAddedScore = 0;
  }

  /**
   * Initializes the challenge process. This method 
   * should be called every time a the challenge is started.
   */
  init() {
    this.state = ChallengeProcess.STATE.NOT_STARTED;
    this.patternIndex = 0;
    
    this.timeRemaining = this.settings.timeLimit;
    this.movesRemaining = this.settings.moveLimit;

    this.temporaryScore = 0;
    
    if (this.settings.isInfinite) {
      this.patternGenerator = this.createPatternGenerator();
      this.currentPattern = this.patternGenerator.next().value;
    } else {
      this.patternsToBePlayed = this.generatePatternsToBePlayed();
      this.difficulties = this.settings.difficulty(this.patternsToBePlayed);
      if (this.difficulties.length !== this.patternsToBePlayed.length)
        throw new Error(`Invalid difficulty array. Expected ${this.patternsToBePlayed.length} elements, got ${this.difficulties.length}.`);
      this.randomizePatterns(this.difficulties);

      this.currentPattern = this.patternsToBePlayed[0];
    }

    this.patternTime = this.currentPattern.timeLimitPerPattern;
    this.patternMoves = this.currentPattern.moveLimitPerPattern;
    this.patternModulo = this.currentPattern.moduloPerPattern;
    this.patternBonusTime = this.currentPattern.bonusTimePerPattern;

    clearInterval(this.timerId);
    this.timerId = null;

    this.advanceTimers = true;
  }

  /**
   * Starts the challenge process. This method should be called
   * when the player starts playing the challenge.
   */
  start() {
    this.advanceTimers = true;
    this.state = ChallengeProcess.STATE.IN_PROGRESS;
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      if (this.settings.timeLimit !== -1 && this.advanceTimers) {
        this.timeRemaining--;
        if (this.timeRemaining <= 0) {
          this.lost(ChallengeProcess.STATE.LOST_TIME);
          return;
        }
      }
      if (this.patternTime !== -1 && this.advanceTimers) {
        this.patternTime--;
        if (this.patternTime <= 0) {
          this.lost(ChallengeProcess.STATE.LOST_TIME);
          return;
        }
      }
    }, 1000);
  }

  /**
   * Pauses the challenge process.
   */
  pause() {
    this.state = ChallengeProcess.STATE.PAUSED;
    this.advanceTimers = false;
  }

  /**
   * Resumes the challenge process.
   */
  resume() {
    this.state = ChallengeProcess.STATE.IN_PROGRESS;
    this.advanceTimers = true;
  }

  /**
   * Quits the challenge process.
   */
  quit() {
    this.state = ChallengeProcess.STATE.NOT_STARTED;
    clearInterval(this.timerId);
  }

  /**
   * Updates the challenge process according to the player input.
   */
  handleClick() {
    if (this.state !== ChallengeProcess.STATE.IN_PROGRESS) return;

    if (this.settings.moveLimit !== -1) {
      this.movesRemaining--;
      if (this.movesRemaining < 0) {
        this.lost(ChallengeProcess.STATE.LOST_MOVES);
        return;
      }
    }

    if (this.patternMoves !== -1) {
      this.patternMoves--;
      if (this.patternMoves < 0) {
        this.lost(ChallengeProcess.STATE.LOST_MOVES);
        return;
      }
    }

    if (this.currentPattern.layout.isSolved(this.patternModulo)) {
      if (this.patternBonusTime !== -1)
        this.timeRemaining += this.patternBonusTime;
      
      this.patternIndex++;
      if (this.settings.isInfinite) {

        const difficulty = this.settings.difficulty(this.patternIndex);
        this.temporaryScore += Math.round(difficulty * (1.1 + difficulty / (this.currentPattern.layout.nTiles() * 0.8 + 10))
          * (this.patternTime === -1 ? 1 : 1.5) * (this.patternMoves === -1 ? 1 : 1.5));
        
        this.currentPattern = this.patternGenerator.next().value;
      } else {
        if (this.patternIndex === this.settings.patternCount) {
          this.won();
          return;
        }
        this.currentPattern = this.patternsToBePlayed[this.patternIndex];
      }

      this.patternTime = this.currentPattern.timeLimitPerPattern;
      this.patternMoves = this.currentPattern.moveLimitPerPattern;
      this.patternModulo = this.currentPattern.moduloPerPattern;
      this.patternBonusTime = this.currentPattern.bonusTimePerPattern;
    }
  }

  /**
   * Generates the patterns to be played during the challenge.
   * This method should only be called for finite challenges.
   * @returns {ChallengePattern[]} The patterns to be played during the challenge.
   */
  generatePatternsToBePlayed() {
    if (this.settings.isSequence) {
      const patterns = [this.settings.patternSequence.initialState.copy()];
      for (let i = 1; i < this.settings.patternCount; i++) {
        patterns.push(this.settings.patternSequence.transition(patterns[i - 1]));
      }
      return patterns;
    } else {
      if (this.settings.patternListOrder === ChallengeProperties.LIST_ORDERS.LINEAR) {
        const patterns = [];
        for (let i = 0; i < this.settings.patternCount; i++) {
          patterns.push(this.settings.patternList[i % this.settings.patternList.length].copy());
        }
        return patterns;
      } else if (this.settings.patternListOrder === ChallengeProperties.LIST_ORDERS.RANDOM) {
        const patterns = [];
        const patternList = [...this.settings.patternList];
        for (let i = 0; i < this.settings.patternCount; i++) {
          const index = Math.floor(Math.random() * patternList.length);
          patterns.push(patternList.splice(index, 1)[0].copy());
          if (patternList.length === 0) {
            patternList.push(...this.settings.patternList);
          }
        }
        return patterns;
      } else {
        throw new Error(`Invalid pattern list order '${this.settings.patternListOrder}'`);
      }
    }
  }

  /**
   * Randomizes the positions of the patterns to be played
   * @param {Number[]} difficulties The difficulties of the patterns to be played.
   */
  randomizePatterns(difficulties) {
    let i = 0;
    for (const pattern of this.patternsToBePlayed) {
      const difficulty = difficulties[i++];
      if (difficulty === undefined || difficulty === null)
        throw new Error('Invalid difficulty array.');

      pattern.layout = pattern.layout.generatePosition(
        difficulty, pattern.moduloPerPattern
      );
    }
  }

  /**
   * Ends the challenge process and marks it as won.
   * This method should only be called for finite challenges.
   */
  won() {
    this.state = ChallengeProcess.STATE.WON;
    clearInterval(this.timerId);

    const store = useStore();
    if (!this.settings.isInfinite) {
      let scoreToAdd = 0;
      if (this.firstTime) {
        this.firstTime = false;
        scoreToAdd += this.settings.firstTimeScore;
      }

      // Compute score
      const score =
        this.difficulties
        .map((difficulty, i) => {
          const pattern = this.patternsToBePlayed[i];
          const timePerMultiplier = pattern.timeLimitPerPattern === -1 ? 1 : 1.5;
          const movePerMultiplier = pattern.moveLimitPerPattern === -1 ? 1 : 1.5;
          return Math.round(difficulty * (1.1 + difficulty / (this.patternsToBePlayed[i].layout.nTiles() * 0.8 + 10)))
          * timePerMultiplier * movePerMultiplier;
        })
        .reduce((acc, difficulty) => acc + difficulty, 0);

      const timeMultiplier = this.settings.timeLimit === -1 ? 1 : 1.5;
      const moveMultiplier = this.settings.moveLimit === -1 ? 1 : 1.5;
      scoreToAdd += score * timeMultiplier * moveMultiplier * 2 ** this.unlockCategory;
      
      const result = {
        completed: true
      }
      const currentStats = store.stats.challengesCompleted[this.id];
      
      if (this.settings.timeLimit !== -1) {
        const time = this.settings.timeLimit - this.timeRemaining;
        if (currentStats && currentStats.time) {
          if (time < currentStats.time) {
            result.time = time;
          } else {
            result.time = currentStats.time;
          }
        } else {
          result.time = time;
        }
      }

      if (this.settings.moveLimit !== -1) {
        const moves = this.settings.moveLimit - this.movesRemaining;
        if (currentStats && currentStats.moves) {
          if (moves < currentStats.moves) {
            result.moves = moves;
          } else {
            result.moves = currentStats.moves;
          }
        } else {
          result.moves = moves;
        }
      }
      store.stats.challengesCompleted[this.id] = result;

      scoreToAdd = Math.round(scoreToAdd);
      store.score += scoreToAdd;
      this.latestAddedScore = scoreToAdd;
    }
  }

  /**
   * Ends the challenge process and marks it as lost.
   * @param {ChallengeProcess.STATE} reason
   */
  lost(reason) {
    this.state = reason;
    clearInterval(this.timerId);

    const store = useStore();
    if (this.settings.isInfinite) {
      store.score += this.temporaryScore * (this.unlockCategory + 1);

      const currentStats = store.stats.challengesCompleted[this.id];
      if (currentStats) {
        if (currentStats.completed) return;
        if (this.patternIndex > currentStats.patternIndex) {
          store.stats.challengesCompleted[this.id] = {
            completed: false,
            patternIndex: this.patternIndex,
          };
        } else {
          store.stats.challengesCompleted[this.id] = {
            completed: false,
            patternIndex: currentStats.patternIndex,
          };
        }
      } else {
        store.stats.challengesCompleted[this.id] = {
          completed: false,
          patternIndex: this.patternIndex,
        };
      }
    } else {
      const currentStats = store.stats.challengesCompleted[this.id];
      if (currentStats) {
        if (currentStats.completed) return;
        const completion = this.patternIndex / this.settings.patternCount * 100;
        if (completion > currentStats.completion) {
          store.stats.challengesCompleted[this.id] = {
            completed: false,
            completion,
          };
        } else {
          store.stats.challengesCompleted[this.id] = {
            completed: false,
            completion: currentStats.completion,
          };
        }
      } else {
        store.stats.challengesCompleted[this.id] = {
          completed: false,
          completion: this.patternIndex / this.settings.patternCount * 100,
        };
      }
    }
  }

  /**
   * Creates a pattern generator that generates patterns.
   * This method should only be called for infinite challenges.
   */
  * createPatternGenerator() {
    if (this.settings.isSequence) {
      const initialPattern = this.settings.patternSequence.initialState.copy();
      initialPattern.layout = initialPattern.layout.generatePosition(
        this.settings.difficulty(this.patternIndex), initialPattern.moduloPerPattern
      );
      yield initialPattern;
      while (true) {
        const pattern = this.settings.patternSequence.transition(this.currentPattern);
        pattern.layout = pattern.layout.generatePosition( 
          this.settings.difficulty(this.patternIndex), pattern.moduloPerPattern
        );
        yield pattern.copy();
      }
    } else {
      if (this.settings.patternListOrder === ChallengeProperties.LIST_ORDERS.LINEAR) {
        while (true) {
          for (const pattern of this.settings.patternList) {
            const newPattern = pattern.copy();
            newPattern.layout = newPattern.layout.generatePosition(
              this.settings.difficulty(this.patternIndex), newPattern.moduloPerPattern
            );
            yield newPattern;
          }
        }
      } else if (this.settings.patternListOrder === ChallengeProperties.LIST_ORDERS.RANDOM) {
        while (true) {
          const patternList = [...this.settings.patternList];
          while (patternList.length) {
            const index = Math.floor(Math.random() * patternList.length);
            const pattern = patternList.splice(index, 1)[0].copy();
            pattern.layout = pattern.layout.generatePosition(
              this.settings.difficulty(this.patternIndex), pattern.moduloPerPattern
            );
            yield pattern;
          }
        }
      } else {
        throw new Error(`Invalid pattern list order '${this.settings.patternListOrder}'`);
      }
    }
  }
}

export class PatternSequence {
  /**
   * Represents a Pattern Sequence.
   * A pattern sequence consists of an initial state,
   * and a function that computes the next state from the current one.
   * @param {ChallengePattern} initialState  
   * @param {(pattern: ChallengePattern) => ChallengePattern} transition 
   */
  constructor(initialState, transition) {
    this.initialState = initialState.copy();
    this.transition = transition;
  }
}