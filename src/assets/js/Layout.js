/**
 * A class representing a layout of tiles
 * The tiles are represented by a matrix of 0s, 1s and -1s for excluded tiles
 */
export default class Layout {
  /**
   * Creates a new Layout object
   * @param {Number} width the width of the layout
   * @param {Number} height the height of the layout 
   * @param {Number[]} exclude the indices of the tiles to exclude from the layout 
   */
  constructor ({ width, height, exclude, unlockCategory }) {
    this.width = width;
    this.height = height;
    this.exclude = exclude;
    this.unlockCategory = unlockCategory;
    this.matrix = new Array(height).fill(0).map(() => new Array(width).fill(0));
    for (const e of exclude) {
      this.matrix[Math.floor(e / width)][e % width] = -1;
    }
  }

  /**
   * Swaps the tile at the specified position with its neighbors
   * @param {Number} row the row of the tile to swap
   * @param {Number} column the column of the tile to swap
   */
  swapTiles(row, column) {
    const dirx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
    const diry = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

    for (const x of dirx) {
      for (const y of diry) {
        if (row + y >= 0 && row + y < this.matrix.length && column + x >= 0 && column + x < this.matrix[0].length
          && this.matrix[row+y][column+x] !== -1)
          this.matrix[row+y][column+x] = this.matrix[row+y][column+x] ? 0 : 1;
      }
    }
  }

  /**
   * Sets all tiles in the matrix to the specified value
   * @param {Number} value the value to set the tiles to
   */
  setAllTiles(value) {
    for (let i = 0; i < this.matrix.length; i++)
      for (let j = 0; j < this.matrix[0].length; j++)
        if (this.matrix[i][j] !== -1)
          this.matrix[i][j] = value;
  }

  /**
   * Sets the matrix to the specified matrix
   * @param {Number[][]} matrix the matrix to set the layout to
   */
  setMatrix(matrix) {
    this.matrix = matrix;
  }

  /**
   * Checks if the matrix is solved
   */
  isSolved() {
    return this.matrix.every(row => row.every(tile => tile === 1 || tile === -1));
  }

  /**
   * Checks if the tile at the specified position is a tile
   * @param {Number} row the row of the tile
   * @param {Number} column the column of the tile 
   * @returns {Boolean} true if the tile is a tile, false otherwise
   */
  isTile(row, column) {
    return this.matrix[row][column] !== -1;
  }

  /**
   * Creates a copy of the layout
   * @returns {Layout} a copy of the layout
   */
  copy() {
    const { width, height, exclude, unlockCategory } = this;
    const copy = new Layout({ width, height, exclude, unlockCategory });
    copy.matrix = this.matrix.map(row => row.slice());
    return copy;
  }

  /**
   * Generates a random solvable pattern of tiles
   * @param {Number} iterations number of iterations to generate the pattern
   * @returns {Layout} a Layout object with a random pattern
   */
  generatePosition(iterations) {
    const copy = this.copy();
    copy.setAllTiles(1);

    for (let i = 0; i < iterations; i++) {
      
      let row;
      let tile;

      do {
        row = Math.floor(Math.random() * copy.height);
        tile = Math.floor(Math.random() * copy.width);
      } while(!copy.isTile(row, tile));
      
      copy.swapTiles(row, tile);
    }

    // Regenerate if the matrix is already solved
    return copy.matrix.every(row => row.every(tile => tile === 1 || tile === -1)) 
      ? this.generatePosition(iterations) 
      : copy;
  }

  /**
   * Parses a string or object into a Layout object
   * @param {String|Object} state the string or object to parse
   * @returns {Layout} the parsed Layout object
   */
  static hydrate(state) {
    const { width, height, exclude, unlockCategory } = 
      typeof state === "string" ? JSON.parse(string) : state;
    const layout = new Layout({
      width, height, exclude, unlockCategory
    });
    return layout;
  }

  /**
   * Serializes a layout into a string
   * @param {Layout} layout the layout to serialize
   * @returns {String} the serialized layout
   */
  static serialize(layout) {
    return JSON.stringify(layout);
  }
}