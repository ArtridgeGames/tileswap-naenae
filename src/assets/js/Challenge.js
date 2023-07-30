import { Layout } from './Layout.js';

export class Challenge {

  static TIME = {
    SPRINT: 'sprint',
    NORMAL: 'normal',
    MARATHON: 'marathon',
    ENDURANCE: 'endurance',
  }

  static timeOptions = {
    sprint: {
      text: "sprint (1min)",
      time: 60,
    },
    normal: {
      text: "normal (3min)",
      time: 60 * 3,
    },
    marathon: {
      text: "marathon (5min)",
      time: 60 * 5,
    },
    endurance: {
      text: "endurance (no time limit)",
      time: -1,
    }
  };

  static DIFFICULTY = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
    EXPERT: 'expert',
    SURVIVAL: 'survival',
  }

  static difficultyOptions = {
    easy: {
      text: "easy",
      baseMoves: 15,
      start: 1,
      end: 11,
    },
    medium: {
      text: "medium",
      baseMoves: 40,
      start: 1,
      end: 25
    },
    hard: {
      text: "hard",
      baseMoves: 60,
      start: 10,
      end: 31
    },
    expert: {
      text: "expert",
      baseMoves: 85,
      start: 19,
      end: 37
    },
    survival: {
      text: "survival (+5s)",
      baseMoves: -1,
      start: 1,
      end: 37
    }
  }
  constructor ({ time, difficulty }) {
    this.time = time;
    this.difficulty = difficulty;
    
    const timeOption = Challenge.timeOptions[time];
    const difficultyOption = Challenge.difficultyOptions[difficulty];

    this.totalTime = timeOption.time;
    this.totalMoves = difficultyOption.baseMoves 
      * (this.totalTime === -1 ? 3 : this.totalTime / 60);

    this.start = difficultyOption.start;
    this.end = difficultyOption.end;

    this.timeElapsed = 0;
    this.movesMade = 0;

    this.layout = this.generateLayout();
  }

  generateLayout() {
    const filteredLayouts = Layout.LAYOUTS.filter(layout => {
      return layout.unlockCategory >= this.start && layout.unlockCategory <= this.end;
    });
    const randomLayout = filteredLayouts[Math.floor(Math.random() * filteredLayouts.length)];
    
    let iterations = 3 + Math.floor(Math.random() * 4);
    if (iterations > (this.totalMoves - this.movesMade)) iterations = this.totalMoves - this.movesMade;

    this.movesMade += iterations;

    return randomLayout.generatePosition(iterations);
  }
}