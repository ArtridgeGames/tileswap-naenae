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

export class ChallengeProperties {

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
   * @param {ChallengePattern[]|PatternSequence} config.patternList - The list of patterns of the challenge
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

    this.isSequence = this.patternList instanceof PatternSequence;
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
      this.patternList.initialState.timeLimitPerPattern
        ??= (this.defaults.timeLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimitPerPattern);
      this.patternList.initialState.moveLimitPerPattern
        ??= (this.defaults.moveLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimitPerPattern);
      this.patternList.initialState.bonusTimePerPattern
        ??= (this.defaults.bonusTimePerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.bonusTimePerPattern);
      this.patternList.initialState.moduloPerPattern
        ??= (this.defaults.moduloPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moduloPerPattern);
      
      this.patternList.state.timeLimitPerPattern
        ??= (this.defaults.timeLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.timeLimitPerPattern);
      this.patternList.state.moveLimitPerPattern
        ??= (this.defaults.moveLimitPerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.moveLimitPerPattern);
      this.patternList.state.bonusTimePerPattern
        ??= (this.defaults.bonusTimePerPattern ?? ChallengeProperties.GLOBAL_DEFAULTS.bonusTimePerPattern);
      this.patternList.state.moduloPerPattern
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
    const layout = Layout.FILTERED_LAYOUTS.find(e => e.id === layoutId);
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
  }

  /**
   * Constructs a new Challenge Process
   * A Challenge Process manages the ongoing state when
   * a challenge is being played
   * @param {Challenge} challenge 
   */
  constructor(challenge) {
    require(
      challenge,
      challenge.settings,
      challenge.settings.patternList,
      challenge.settings.difficulty
    )


    this.challenge = challenge;
    this.patternIndex = -1;
    this.done = false;
    this.patternGenerator = this.createPatternGenerator();
    if (this.challenge.settings.patternCount !== -1)
      this.difficulties = this.challenge.settings.difficulty();

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
      if (this.patternBonusTime !== -1)
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
      return pattern.layout.generatePosition(this.challenge.settings.isInfinite ? 
        this.challenge.settings.difficulty(this.patternIndex)
        : this.difficulties[
          this.challenge.settings.isSequence ? this.patternIndex :
          this.challenge.settings.patternList.findIndex(e => e.id === pattern.id)
        ],
      pattern.moduloPerPattern);
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
    if (this.challenge.settings.isSequence) {
      this.challenge.settings.patternList.reset();
    }

    this.patternIndex = -1;
    this.done = false;
    this.patternGenerator = this.createPatternGenerator();
    if (this.challenge.settings.patternCount !== -1)
      this.difficulties = this.challenge.settings.difficulty();

    this.currentLayout = this.next();

    this.totalClicks = this.challenge.settings.moveLimit;
    this.currentTime = this.challenge.settings.timeLimit;
    this.currentPatternTime = -1;

    this.timerId = null;

    this.state = ChallengeProcess.STATE.NOT_STARTED;

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
    const { patternCount, patternListOrder, patternList } = this.challenge.settings;
    if (this.challenge.settings.isSequence) {

      while (true) {
        if (this.patternIndex === this.challenge.settings.patternCount - 1) {
          return null;
        }
        yield this.challenge.settings.patternList.next();
      }

    } else {

      // Infinite patterns
      if (patternCount === -1) {
        if (patternListOrder === 'linear') {
          // Continuously loops through the pattern list, yielding each pattern in a linear manner
          while (true) {
            for (const pattern of patternList) {
              yield pattern;
            }
          }
        } else if (patternListOrder === 'random') {
          // Continously selects a random pattern without repeating
          while (true) {
            const patternList = [...patternList];
            while (patternList.length) {
              const index = Math.floor(Math.random() * patternList.length);
              yield patternList.splice(index, 1)[0];
            }
          }
        }
        throw new Error('Invalid pattern list order');
      } else {
        if (patternListOrder === 'linear') {
          // Selects patterns in order and returns when the end is reached
          for (let i = 0; i < patternCount - 1; i++) {
            yield patternList[i % patternList.length];
          }
          return patternList[(patternCount - 1) % patternList.length]
        } else if (patternListOrder === 'random') {
          // Selects the patterns in a random order until the end is reached
          const patternListNew = [...patternList];
          for (let i = 0; i < patternCount - 1; i++) {
            const index = Math.floor(Math.random() * patternListNew.length);
            yield patternListNew.splice(index, 1)[0];
            if (patternListNew.length === 0) {
              patternListNew.push(...patternList);
            }
          }
          return patternListNew[0];
        }
        throw new Error('Invalid pattern list order ' + patternListOrder);
      }
    }
  }

}

export class PatternSequence {
  /**
   * Constructs a Pattern Sequence.
   * A pattern sequence consists of an initial state,
   * and a function that computes the next state from the current one.
   * @param {ChallengePattern} initialState  
   * @param {(pattern: ChallengePattern) => ChallengePattern} transition 
   */
  constructor(initialState, transition) {
    this.state = initialState.copy();
    this.initialState = initialState.copy();
    this.transition = transition;
    // this.generator = this.createGenerator();

    this.isFirst = true;
  }

  next() {
    if (this.isFirst) {
      this.isFirst = false;
      return this.state.copy();
    }
    this.state = this.transition(this.state.copy());
    return this.state.copy();
  }

  reset() {
    this.state = this.initialState.copy();
    this.isFirst = true;
  }
}