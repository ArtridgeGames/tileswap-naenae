import * as util from 'util';
import { getIrreduciblePolynomialOfField } from './irreduciblePolynomials.js';

/**
 * A finite field
 * @property {Number} order The order of the field
 */
export class FiniteField {
  constructor(order) {
    if (typeof order !== 'number') {
      throw new Error(`Order ${order} is not a number`);
    }
    if (order <= 0) {
      throw new Error(`Order ${order} is not positive`);
    }
    if (order % 1 !== 0) {
      throw new Error(`Order ${order} is not an integer`);
    }
    const factors = FiniteField.primeFactors(order);
    
    if (!factors.every(e => e === factors[0])) {
      throw new Error(`Order ${order} is not a prime power`);
    }

    this.order = order;
    this.p = factors[0];
    this.q = factors.length;
    this.isPrimeField = this.q === 1;
  }

  /**
   * Create a new element in the field
   * @param {Number|Number[]|FiniteFieldElement} value value of the element
   * @returns {FiniteFieldElement} The new element
   */
  el(value) {
    // If the value is already an element in the field and the field is prime, return the element
    if (value instanceof FiniteFieldElement) {
      if (value.field.order !== this.order) {
        throw new Error('Cannot create element in different field');
      }
      return value;
    }

    if (typeof value === 'number') {
      if (this.isPrimeField) {
        return new FiniteFieldValue(
          value,
          this
        );
      }
      return FiniteFieldPolynomialAsElement.fromInteger(value, this);
    }


    if (value instanceof Array) {
      return new FiniteFieldPolynomialAsElement(value, this);
    }
    
    throw new Error('Cannot create element from non-number');
  }

  irreduciblePolynomial() {
    const polynomials = getIrreduciblePolynomialOfField(this);
    return polynomials[0];
  }

  /**
   * Create a new matrix in the field
   * @param {Number[][]|FiniteFieldElement[][]} matrix 
   * @returns {FiniteFieldMatrix} The new matrix
   */
  matrix(matrix) {
    return FiniteFieldMatrix.from2DArray(matrix, this);
  }

  /**
   * Returns the identity matrix of the specified size
   * @param {Number} size 
   * @returns {FiniteFieldMatrix} The identity matrix
   */
  identity(size) {
    return FiniteFieldMatrix.identity(size, this);
  }

  /**
   * Calculate the modulus of two numbers
   * @param {Number} a 
   * @param {Number} b 
   * @returns {Number} The modulus
   */
  static mod(a, b) {
    return ((a % b) + b) % b;
  }

  static primeFactors(n) {
    let p = 2
    while (n >= p ** 2) {
      if (n % p === 0) {
        return [p, ...FiniteField.primeFactors(n / p)]
      } else {
        p++
      }
    }
    return [n];
  }

  /**
   * Create a new finite field from the given order
   * @param {Number} order 
   * @returns {FiniteField} The finite field
   */
  static fromOrder(order) {
    return new FiniteField(order);
  }

  static isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i = i + 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
}

/**
 * An element in a finite field
 * @property {Number} value The value of the element
 * @property {FiniteField} field The field of the element
 * @abstract
 */
export class FiniteFieldElement {
  constructor(value, field) {
    if (this.constructor == FiniteFieldElement) {
      throw new Error("FiniteFieldElement is an abstract class and cannot be instantiated. Use FiniteFieldValue or FiniteFieldPolynomial instead.");
    }
    if (typeof value !== 'number') {
      throw new Error('Value must be a number');
    }
    if (!(field instanceof FiniteField)) {
      throw new Error('Field must be an instance of FiniteField');
    }
    this.value = value;
    this.field = field;
  }

  /**
   * Calculate the inverse of the element
   * @returns {FiniteFieldElement} The inverse of the element
   */
  inverse() {
    throw new Error('Method inverse not implemented in ' + this.constructor.name);
  }

  /**
   * Calculate the opposite of the element
   * @returns {FiniteFieldElement} The opposite of the element
   */
  opposite() {
    throw new Error('Method opposite not implemented in ' + this.constructor.name);
  }

  /**
   * Add another element to the element
   * @param {FiniteFieldElement|Number} other
   * @returns {FiniteFieldElement} The result of the addition
   */
  add(other) {
    throw new Error('Method add not implemented in ' + this.constructor.name);
  }

  /**
   * Subtract another element from the element
   * @param {FiniteFieldElement|Number} other
   * @returns {FiniteFieldElement} The result of the subtraction
   */
  subtract(other) {
    throw new Error('Method subtract not implemented in ' + this.constructor.name);
  }

  /**
   * Multiply the element by another element
   * @param {FiniteFieldElement|Number} other
   * @returns {FiniteFieldElement} The result of the multiplication
   */
  multiply(other) {
    throw new Error('Method multiply not implemented in ' + this.constructor.name);
  }

  /**
   * Divide the element by another element
   * @param {FiniteFieldElement|Number} other
   * @returns {FiniteFieldElement} The result of the division
   * @throws {Error} If the other element is 0
   */
  divide(other) {
    throw new Error('Method divide not implemented in ' + this.constructor.name);
  }

  /**
   * Raise the element to an integer power. If the power is negative, the inverse is used instead
   * @param {Number} n The power to raise the element to
   * @returns {FiniteFieldElement} The result of the power
   */
  pow(n) {
    throw new Error('Method pow not implemented in ' + this.constructor.name);
  }

  /**
   * Calculate the square root of the element if it exists
   * @returns {FiniteFieldElement} The square root of the element
   * @throws {Error} If the element has no square root
   */
  sqrt() {
    throw new Error('Method sqrt not implemented in ' + this.constructor.name);
  }

  /**
   * Calculate the absolute value of the element
   * @returns {FiniteFieldElement} The absolute value of the element
   */
  abs() {
    throw new Error('Method abs not implemented in ' + this.constructor.name);
  }

  /**
   * Checks if the element is equal to another element
   * @param {FiniteFieldElement|Number} other The other element to compare to
   * @returns {Boolean} whether the element is equal to the other element
   * @throws {Error} If the other element is not in the same field
   */
  equals(other) {
    throw new Error('Method equals not implemented in ' + this.constructor.name);
  }

  /**
   * Returns a copy of the element
   * @returns {FiniteFieldElement} The copy of the element
   */
  copy() {
    throw new Error('Method copy not implemented in ' + this.constructor.name);
  }
}


/**
 * A value in a prime finite field
 * @property {Number} value The value of the element
 * @property {FiniteField} field The field of the element
 * @extends FiniteFieldElement
 */
export class FiniteFieldValue extends FiniteFieldElement {
  /**
   * Create a new element in a finite field
   * @param {Number} value value of the element
   * @param {FiniteField} field field of the element
   */
  constructor(value, field) {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number');
    }
    if (!(field instanceof FiniteField)) {
      throw new Error('Field must be an instance of FiniteField');
    }
    if (!FiniteField.isPrime(field.order)) {
      throw new Error('Field must be a prime field');
    }

    super(FiniteField.mod(value, field.order), field);
  }

  /**
   * Apply an operation to two elements in a field
   * @param {FiniteFieldElement} other The other element to apply the operation to
   * @param {Function} operation The operation function to apply
   * @returns {FiniteFieldElement} The result of the operation
   */
  #applyOperation(other, operation) {

    if (other instanceof FiniteFieldElement) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot add two numbers in different fields');
      }
      return this.field.el(operation(this, other));
    }

    return this.#applyOperation(this.field.el(other), operation);
  }

  inverse() {
    if (this.value === 0) {
      throw new Error('Cannot divide by zero');
    }
    return this.pow(this.field.order - 2);
  }

  opposite() {
    return this.field.el(-this.value);
  }

  add(other) {
    return this.#applyOperation(other, (a, b) => a.value + b.value);
  }

  subtract(other) {
    return this.#applyOperation(other, (a, b) => a.value - b.value);
  }

  multiply(other) {
    return this.#applyOperation(other, (a, b) => a.value * b.value);
  }

  divide(other) {
    return this.#applyOperation(other, (a, b) => a.multiply(b.inverse()).value);
  }

  pow(n) {
    if (n === 0) return this.field.el(1);
    if (n === 1) return this.copy();
    if (n < 0) return this.inverse().pow(-n);

    let result = this;
    for (let i = 1; i < n; i++) {
      result = result.multiply(this);
    }
    return result;
  }

  sqrt() {
    if (this.value === 0) return this.field.el(0);
    if (this.value === 1) return this.field.el(1);

    let i = 1;
    while (i < this.field.order) {
      if (i * i % this.field.order === this.value) {
        return this.field.el(i);
      }
      i++;
    }
    throw new Error('Element has no square root');
  }

  abs() {
    return this.field.el(
      this.value === 0 ? 0 : 1
    )
  }

  equals(other) {
    if (other instanceof FiniteFieldElement) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot compare two numbers in different fields');
      }
      return this.value === other.value;
    }
    return this.value === other;
  }

  toString() {
    return `${this.value} (mod ${this.field.order})`;
  }

  [util.inspect?.custom]() {
    return this.toString();
  }

  copy() {
    return this.field.el(this.value);
  }
}

/**
 * A polynomial in a non-prime finite field
 * @property {FiniteField} field The field of the polynomial
 * @property {FiniteField} primeField The prime field for the coefficients of the polynomial
 * @property {FiniteFieldElement[]} coefficients The coefficients of the polynomial
 * @extends FiniteFieldElement
 */
export class FiniteFieldPolynomialAsElement extends FiniteFieldElement {

  /**
   * Create a new polynomial in a finite field
   * @param {Number[]|FiniteFieldElement[]} coefficients 
   * @param {FiniteField} field 
   */
  constructor(coefficients, field) {

    if (!(field instanceof FiniteField)) {
      throw new Error('Field must be an instance of FiniteField');
    }
    if (FiniteField.isPrime(field.order)) {
      console.warn('[warn] Creating polynomial in prime field. Use FiniteFieldValue instead');
    }

    
    super(FiniteFieldPolynomialAsElement.coefficientsToInteger(coefficients, field), field);
    
    this.field = field;
    this.primeField = FiniteField.fromOrder(field.p);

    this.poly = new FiniteFieldPolynomial(coefficients, this.primeField);
  }

  add(other) {
    if (other instanceof FiniteFieldPolynomialAsElement) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot add polynomials in different fields');
      }
      const coefficients = [];
      for (let i = 0; i < Math.max(this.coefficients.length, other.coefficients.length); i++) {
        const a = this.coefficients[i] ?? this.primeField.el(0);
        const b = other.coefficients[i] ?? this.primeField.el(0);
        coefficients.push(this.coefficients[a].add(b));
      }
      return this.field.el(coefficients);
    }

    if (other instanceof Array) {
      return this.add(this.field.el(other));
    }

    throw new Error('Cannot add polynomial to non-polynomial');
  }

  static fromInteger(n, field) {
    const str = n.toString(field.p);
    const coefficients = str.split('').map(e => parseInt(e));
    return new FiniteFieldPolynomialAsElement(coefficients, field);
  }

  static coefficientsToInteger(coefficients, field) {
    field = FiniteField.fromOrder(field.p);
    return parseInt(coefficients.map(e => field.el(e)).map(e => e.value).join(''), field.p);
  }

  toString() {
    return (this.coefficients.map((e, i) => {
      if (e.equals(0)) return '';
      const deg = this.coefficients.length - i - 1;
      if (deg === 0) return e.value.toString();
      const val = e.value === 1 ? '' : e.value;
      if (deg === 1) return `${val}x`;
      return `${val}x^${deg}`;
    }).filter(e => e)
      .join(' + ') || '0') 
      + ` (mod ${this.field.order})`;
  }

  [util.inspect?.custom]() {
    return this.toString();
  }
}

export class FiniteFieldPolynomial {
  constructor(coefficients, field) {

    if (!(field instanceof FiniteField)) {
      throw new Error('Field must be an instance of FiniteField');
    }
    if (!FiniteField.isPrime(field.order)) {
      throw new Error('Field must be a prime field');
    }

    this.field = field;

    this.coefficients = coefficients.map(e => this.field.el(e));
  }

  add(other) {
    if (other instanceof FiniteFieldPolynomial) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot add polynomials in different fields');
      }
      const coefficients = [];
      for (let i = 0; i < Math.max(this.coefficients.length, other.coefficients.length); i++) {
        const a = this.coefficients[i] ?? this.primeField.el(0);
        const b = other.coefficients[i] ?? this.primeField.el(0);
        coefficients.push(this.coefficients[a].add(b));
      }
      return this.field.el(coefficients);
    }

    if (other instanceof Array) {
      return this.add(this.field.el(other));
    }
    throw new Error('Cannot add polynomial to non-polynomial');
  }
}

/**
 * A matrix over a finite field
 * @property {Number} width The width of the matrix
 * @property {Number} height The height of the matrix
 * @property {FiniteField} field The field of the matrix
 * @property {FiniteFieldElement[][]} matrix The matrix
 */
export class FiniteFieldMatrix {
  /**
   * Create a new matrix in a finite field
   * @param {Number[][] | FiniteFieldElement[][]} matrix 2D array of numbers
   * @param {FiniteField} field field of the matrix
   */
  constructor(matrix, field) {
    this.field = field;
    this.width = matrix[0] ? matrix[0].length : 0;
    this.height = matrix.length;

    if (!matrix.every(row => row.length === this.width)) {
      throw new Error('All rows must have the same length');
    }

    this.matrix = matrix.map(row =>
      row.map(e => {
        if (e instanceof FiniteFieldElement) {
          if (e.field.order !== field.order) {
            throw new Error('Cannot create matrix with elements from different fields');
          }
          return e;
        }
        return field.el(e);
      }
      )
    );
  }

  /**
   * Checks if the matrix is square
   * @returns {Boolean} whether the matrix is square
   */
  isSquare() {
    return this.width === this.height;
  }

  /**
   * Checks if the matrix is symmetric
   * @returns {Boolean} whether the matrix is symmetric
   */
  isSymmetric() {
    if (!this.isSquare()) {
      return false;
    }
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < i; j++) {
        if (!this.matrix[i][j].equals(this.matrix[j][i])) {
          return false;
        }
      }
    }
    return true;
  }

  transpose() {
    const matrix = [];
    for (let i = 0; i < this.width; i++) {
      const row = [];
      for (let j = 0; j < this.height; j++) {
        row.push(this.matrix[j][i]);
      }
      matrix.push(row);
    }
    return new FiniteFieldMatrix(matrix, this.field);
  }

  /**
   * Multiplies the matrix by a scalar or another matrix
   * @param {Number | FiniteFieldElement | FiniteFieldMatrix} other The scalar or matrix to multiply by
   * @returns {FiniteFieldMatrix} The result of the multiplication
   */
  multiply(other) {
    if (typeof other === 'number' || other instanceof FiniteFieldElement) {
      other = this.field.el(other);
      return FiniteFieldMatrix.from2DArray(
        this.matrix.map(row => row.map(e => e.multiply(other))),
        this.field
      )
    }

    if (other instanceof FiniteFieldMatrix) {
      if (this.width !== other.height) {
        throw new Error('Cannot multiply matrices with incompatible dimensions');
      }

      const matrix = [];
      for (let i = 0; i < this.height; i++) {
        const row = [];
        for (let j = 0; j < other.width; j++) {
          let sum = this.field.el(0);
          for (let k = 0; k < this.width; k++) {
            sum = sum.add(this.matrix[i][k].multiply(other.matrix[k][j]));
          }
          row.push(sum);
        }
        matrix.push(row);
      }
      return FiniteFieldMatrix.from2DArray(matrix, this.field);
    }

    throw new Error('Cannot multiply matrix by non-scalar');
  }

  /**
   * Adds a scalar or another matrix to the matrix
   * @param {Number|FiniteFieldElement|FiniteFieldMatrix} other The scalar or matrix to add
   * @returns {FiniteFieldMatrix} The result of the addition
   */
  add(other) {
    if (other instanceof FiniteFieldElement || typeof other === 'number') {
      other = this.field.el(other);
      return new FiniteFieldMatrix(
        this.matrix.map(row => row.map(e => e.add(other))),
        this.field
      );
    }

    if (other instanceof FiniteFieldMatrix) {
      if (this.width !== other.width || this.height !== other.height) {
        throw new Error('Cannot add matrices with incompatible dimensions');
      }
      return new FiniteFieldMatrix(
        this.matrix.map((row, i) => row.map((e, j) => e.add(other.matrix[i][j]))),
        this.field
      );
    }

    throw new Error('Cannot add matrix to non-scalar');
  }

  /**
   * Raises the matrix to a integer power
   * @param {Number} n The power to raise the matrix to
   * @returns {FiniteFieldMatrix} The result of the power
   */
  pow(n) {
    if (!this.isSquare()) {
      throw new Error('Cannot raise non-square matrix to a power');
    }

    if (n === 0) return FiniteFieldMatrix.identity(this.width, this.field);
    if (n === 1) return this;
    if (n < 0) return this.inverse().pow(-n);

    let result = this;
    for (let i = 1; i < n; i++) {
      result = result.multiply(this);
    }
    return result;
  }

  static #detMap = new Map();

  /**
   * Calculates the determinant of the matrix
   * @returns {FiniteFieldElement} The determinant of the matrix
   */
  determinant() {
    if (!this.isSquare()) {
      throw new Error('Cannot calculate determinant of non-square matrix');
    }

    const key = `${this.width},${this.matrix.map(row => row.map(e => e.value).join('')).join('')}`;
    if (FiniteFieldMatrix.#detMap.has(key)) {
      return FiniteFieldMatrix.#detMap.get(key);
    }

    if (this.width === 1) {
      return this.matrix[0][0];
    }

    if (this.width === 2) {
      return this.matrix[0][0].multiply(this.matrix[1][1]).subtract(this.matrix[0][1].multiply(this.matrix[1][0]));
    }

    if (this.width <= 5) {
      let sum = this.field.el(0);
      for (let i = 0; i < this.width; i++) {
        const subMatrix = this.#subMatrix(0, i);
        const result = this.matrix[0][i].multiply(subMatrix.determinant());
        if (i % 2 === 1) {
          sum = sum.subtract(result);
        } else {
          sum = sum.add(result);
        }
      }
      FiniteFieldMatrix.#detMap.set(key, sum);
      return sum;
    }

    const det = this.PLUDeterminant();
    FiniteFieldMatrix.#detMap.set(key, det);
    return det;
  }

  inverse() {
    if (!this.isSquare()) {
      throw new Error('Cannot invert non-square matrix');
    }

    const determinant = this.determinant();
    if (determinant.equals(0)) {
      throw new Error('Cannot invert singular matrix');
    }

    if (this.width <= 5) {
      const adjugate = this.adjugate();
      return adjugate.multiply(determinant.inverse());
    }

    return this.gaussianInverse();
  }

  gaussianInverse() {
    const I = FiniteFieldMatrix.identity(this.width, this.field);

    const augmentedMatrix = FiniteFieldMatrix.from2DArray(
      this.matrix.map((row, i) => row.concat(I.matrix[i])),
      this.field
    );
    const rref = augmentedMatrix.reducedRowEchelonForm();
    const inverse = rref.#subMatrix([],
      new Array(this.width).fill().map((e, i) => i)
    );
    return inverse;
  }

  pseudoInverse() {
    const { A, B } = this.rankFactorization();

    // M = A * B
    // M+ = B*(BB*)-1(A*A)-1A*

    // B*(BB*)-1(A*A)-1A*
    return B.transpose()
      .multiply(
        B.multiply(B.transpose()).inverse()
      )
      .multiply(
        A.transpose().multiply(A).inverse()
      )
      .multiply(A.transpose());
  }

  adjugate() {
    if (!this.isSquare()) {
      throw new Error('Cannot calculate adjugate of non-square matrix');
    }

    if (this.width === 1) {
      return FiniteFieldMatrix.identity(1, this.field);
    }

    const matrix = [];
    for (let i = 0; i < this.height; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        const subMatrix = this.#subMatrix(i, j);
        const det = subMatrix.determinant();
        if ((i + j) % 2 === 1) {
          row.push(det.opposite());
        } else {
          row.push(det);
        }
      }
      matrix.push(row);
    }
    return new FiniteFieldMatrix(matrix, this.field).transpose();
  }

  reducedRowEchelonForm() {
    function scaleRow(matrix, rowIdx, scalar) {
      for (let j = 0; j < matrix[rowIdx].length; j++) {
        matrix[rowIdx][j] = matrix[rowIdx][j].multiply(scalar);
      }
    }

    function addScaledRow(matrix, targetRowIdx, sourceRowIdx, scalar) {
      for (let j = 0; j < matrix[targetRowIdx].length; j++) {
        matrix[targetRowIdx][j] = matrix[targetRowIdx][j].add(matrix[sourceRowIdx][j].multiply(scalar));
      }
    }

    function findPivotRow(matrix, colIdx, startRowIdx) {
      for (let i = startRowIdx; i < matrix.length; i++) {
        if (!matrix[i][colIdx].equals(0)) {
          return i;
        }
      }
      return -1; // No pivot found
    }

    const matrix = this.matrix.map(row => row.slice());
    let height = matrix.length;
    let width = matrix[0].length;

    let lead = 0;
    for (let currentRow = 0; currentRow < height; currentRow++) {
      if (lead >= width) {
        return FiniteFieldMatrix.from2DArray(matrix, this.field); // Matrix is in RREF
      }

      let pivotRow = findPivotRow(matrix, lead, currentRow);
      if (pivotRow === -1) {
        lead++;
        currentRow--;
        continue;
      }

      // Swap pivot row with current row
      let temp = matrix[pivotRow];
      matrix[pivotRow] = matrix[currentRow];
      matrix[currentRow] = temp;

      // Scale the pivot row to make the leading coefficient 1
      let pivotVal = matrix[currentRow][lead];
      scaleRow(matrix, currentRow, pivotVal.inverse());

      // Eliminate other entries in the current column
      for (let i = 0; i < height; i++) {
        if (i !== currentRow) {
          let factor = matrix[i][lead].opposite();
          addScaledRow(matrix, i, currentRow, factor);
        }
      }

      lead++;
    }

    return FiniteFieldMatrix.from2DArray(matrix, this.field);
  }

  rankFactorization() {
    const rref = this.reducedRowEchelonForm();

    const B = FiniteFieldMatrix.from2DArray(
      rref.matrix.filter((row, i) => !row.every(e => e.equals(0)) || i === 0),
      this.field
    );

    // Find the columns which are not pivot columns
    const nonPivotColumns = [];
    let currentRow = 0;
    for (let i = 0; i < rref.width; i++) {
      let row = -1;
      for (let j = rref.height - 1; j >= 0; j--) {
        if (!rref.matrix[j][i].equals(0)) {
          row = j;
          break;
        }
      }
      if (row >= currentRow) {
        currentRow = row + 1;
      } else {
        nonPivotColumns.push(i);
      }
    }

    const A = this.#subMatrix([], nonPivotColumns);

    return { A, B };
  }

  PLUFactorization() {

    const A = this.copy().matrix;
    const N = this.width;
    const P = new Array(N+1).fill().map((e, i) => i);

    for (let i = 0; i < N; i++) {
      let maxA = this.field.el(0);
      let imax = i;

      for (let k = i; k < N; k++) {
        const absA = A[k][i].abs();
        if (absA.value > maxA.value) {
          maxA = absA;
          imax = k;
        }
      }

      if (imax !== i) {
        // Pivoting P
        const j = P[i];
        P[i] = P[imax];
        P[imax] = j;

        // Pivoting rows of A
        [A[i], A[imax]] = [A[imax], A[i]];

        // Counting pivots starting from N (for determinant)
        P[N]++;
      }

      for (let j = i + 1; j < N; j++) {
        if (!A[i][i].equals(0)) {
          A[j][i] = A[j][i].divide(A[i][i]);
        }

        for (let k = i + 1; k < N; k++)
          A[j][k] = A[j][k].subtract(A[j][i].multiply(A[i][k]));
      }
    }

    return {
      A: FiniteFieldMatrix.from2DArray(A, this.field),
      P
    };
  }

  PLUDeterminant() {
    const { A, P } = this.PLUFactorization();

    const matrix = A.matrix;
    const N = matrix.length;

    let det = matrix[0][0];

    for (let i = 1; i < N; i++)
      det = det.multiply(matrix[i][i]);

    return (P[N] - N) % 2 == 0 ? det : det.opposite();
  }

  equals(other) {
    if (other instanceof FiniteFieldMatrix) {
      if (other.field !== this.field) {
        return false;
      }
      if (other.width !== this.width || other.height !== this.height) {
        return false;
      }
      return this.matrix.every((row, i) => row.every((e, j) => e.equals(other.matrix[i][j])));
    }
    return false;
  }

  copy() {
    return FiniteFieldMatrix.from2DArray(this.matrix, this.field);
  }

  #subMatrix(row, col) {
    if (typeof row === 'number') {
      row = [row];
    }
    if (typeof col === 'number') {
      col = [col];
    }
    const matrix = [];
    for (let i = 0; i < this.height; i++) {
      if (row.includes(i)) {
        continue;
      }
      const newRow = [];
      for (let j = 0; j < this.width; j++) {
        if (col.includes(j)) {
          continue;
        }
        newRow.push(this.matrix[i][j]);
      }
      matrix.push(newRow);
    }
    return new FiniteFieldMatrix(matrix, this.field);
  }

  /**
   * Returns the identity matrix of the specified size
   * @param {Number} size
   * @param {FiniteField} field 
   * @returns {FiniteFieldMatrix} The identity matrix
   */
  static identity(size, field) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let j = 0; j < size; j++) {
        row.push(i === j ? field.el(1) : field.el(0));
      }
      matrix.push(row);
    }
    return new FiniteFieldMatrix(matrix, field);
  }

  /**
   * Creates a matrix with the specified value in each element
   * @param {Number|FiniteFieldElement} value
   * @param {Number} width 
   * @param {Number} height 
   * @param {FiniteField} field 
   * @returns {FiniteFieldMatrix}
   */
  static fromValue(value, width, height, field) {

    if (value instanceof FiniteFieldElement) {
      if (value.field.order !== field.order) {
        throw new Error('Cannot create matrix with elements from different fields');
      }
    }

    const matrix = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(field.el(value));
      }
      matrix.push(row);
    }
    return new FiniteFieldMatrix(matrix, field);
  }

  /**
   * Creates a matrix of zeros
   * @param {Number} width 
   * @param {Number} height 
   * @param {FiniteField} field 
   * @returns {FiniteFieldMatrix}
   */
  static zeros(width, height, field) {
    return FiniteFieldMatrix.fromValue(0, width, height, field);
  }

  /**
   * Creates a matrix of ones
   * @param {Number} width 
   * @param {Number} height 
   * @param {FiniteField} field 
   * @returns {FiniteFieldMatrix}
   */
  static ones(width, height, field) {
    return FiniteFieldMatrix.fromValue(1, width, height, field);
  }

  static random(width, height, field) {
    const matrix = [];
    for (let i = 0; i < height; i++) {
      const row = [];
      for (let j = 0; j < width; j++) {
        row.push(field.el(Math.floor(Math.random() * field.order)));
      }
      matrix.push(row);
    }
    return FiniteFieldMatrix.from2DArray(matrix, field);
  }

  static randomSymmetric(width, field) {
    const matrix = [];
    for (let i = 0; i < width; i++) {
      const row = [];
      for (let j = 0; j < i; j++) {
        row.push(matrix[j][i]);
      }
      for (let j = i; j < width; j++) {
        row.push(field.el(Math.floor(Math.random() * field.order)));
      }
      matrix.push(row);
    }
    return FiniteFieldMatrix.from2DArray(matrix, field);
  }

  /**
   * Creates a matrix over a finite field from a 2D array
   * @param {Number[][]|FiniteFieldElement[][]} matrix 
   * @param {FiniteField} field 
   * @returns {FiniteFieldMatrix}
   */
  static from2DArray(matrix, field) {
    return new FiniteFieldMatrix(matrix, field);
  }

  toString() {
    let str = '';
    for (let i = 0; i < this.height; i++) {
      str += '|' +
        this.matrix[i].reduce(
          (prev, a) => {
            return prev + ' ' + a.value.toString().padStart(this.field.order.toString().length, ' ');
          }, '') + ' |';
      if (Math.floor(this.height / 2) === i) {
        str += ` mod ${this.field.order}`;
      }
      str += '\n';
    }
    return str;
  }

  [util.inspect?.custom]() {
    return this.toString();
  }
}