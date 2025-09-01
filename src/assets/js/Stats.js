import { Puzzle } from './Puzzle.js';
import { CHALLENGES } from './challenges/ChallengeData.js';

const str = (val) => `${val}`;

export const STATS_DATA = {
  timePlayed: {
    name: "Time Played",
    display: (val) => {
      const days = Math.floor(val / 86400);
      const hours = Math.floor(val / 3600) % 24;
      const minutes = Math.floor(val / 60) % 60;
      const seconds = val % 60;
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  },
  layoutsSolved: {
    name: "Layouts Solved",
    display: str
  },
  tilesSwapped: {
    name: "Tiles Swapped",
    display: str
  },
  puzzlesCompleted: {
    initialValue: [],
    name: "Puzzles Completed",
    display: (val) => {
      return `${val.length} / ${Puzzle.PUZZLES.length}`
    }
  },
  challengesCompleted: {
    initialValue: {},
    name: "Challenges Completed",
    display: (val) => {
      const count = Object.keys(val).length;
      return `${count} / ${CHALLENGES.length}`
    }
  },
}

export const INITIAL_STATS = Object.fromEntries(
  Object.keys(STATS_DATA)
    .map(e => [e, STATS_DATA[e].initialValue ?? 0])
);