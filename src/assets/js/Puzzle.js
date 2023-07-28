import Layout from './Layout.js';

/**
 * A class representing tile swap puzzles.
 * A puzzle is defined by a base layout, a target layout and the maximum number of moves allowed to solve it.
 */
export default class Puzzle {
  /**
   * Creates a new puzzle.
   * @param {Layout} base 
   * @param {Layout} target 
   * @param {Number} moves 
   * @param {Number[]} solution
   */
  constructor ({ base, target, moves, solution, id }) {
    this.base = base;
    this.target = target;
    this.moves = moves;
    this.solution = solution;
    this.id = id;
  }

  /**
   * Checks if the puzzle is solved.
   * @param {Layout} layout the layout to check
   */
  isSolvedWith(layout) {
    return this.target.matrix
        .every((row, i) => 
          row.every((tile, j) => tile === layout.matrix[i][j])
        );
  }
}