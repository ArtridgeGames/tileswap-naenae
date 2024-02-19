import { FiniteFieldElement, FiniteFieldValue, TableFieldValue } from './FiniteFieldElement.js';
import { FiniteFieldMatrix } from './FiniteFieldMatrix.js';
import { FiniteFieldPolynomialAsElement } from './FiniteFieldPolynomial.js';

/**
 * A finite field
 * @property {Number} order The order of the field (p^q)
 * @property {Number} p The prime number of the field
 * @property {Number} q The power of the prime number
 * @property {Boolean} isPrimeField Whether the field is a prime field (q = 1)
 */
export class FiniteField {
  /**
   * Constructs a finite field from the given order
   * @param {Number} order
   * @param {Number[][]} [additionTable] Optional addition table
   * @param {Number[][]} [multiplicationTable] Optional multiplication table
   */
  constructor(order, additionTable, multiplicationTable) {
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

    this.order = order; // order = p^q
    this.p = factors[0];
    this.q = factors.length;
    this.isPrimeField = this.q === 1;

    this.additionTable = additionTable;
    this.multiplicationTable = multiplicationTable;
    this.hasTables = additionTable && multiplicationTable;
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
      if (this.hasTables) {
        return new TableFieldValue(
          value,
          this
        );
      }
      if (this.isPrimeField) {
        return new FiniteFieldValue(
          value,
          this
        );
      }
      return FiniteFieldPolynomialAsElement.fromInteger(value, this);
    }
    
    throw new Error('Cannot create element from non-number');
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
    if (order === 4) {
      const additionTable = [
        [0, 1, 2, 3],
        [1, 2, 3, 0],
        [2, 3, 0, 1],
        [3, 0, 1, 2],
      ]
      const multiplicationTable = [
        [0, 0, 0, 0],
        [0, 1, 2, 3],
        [0, 2, 1, 2],
        [0, 3, 2, 1],
      ]
      return FiniteField.fromTables(additionTable, multiplicationTable);
    }
    return new FiniteField(order);
  }

  static fromTables(additionTable, multiplicationTable) {
    const order = additionTable.length;
    const field = new FiniteField(order, additionTable, multiplicationTable);
    return field;
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

