import * as util from 'util';
import { FiniteField } from './FiniteField.js';

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

  multiply(other) {
    return this.#applyOperation(other, (a, b) => a.value * b.value);
  }

  subtract(other) {
    return this.add(other.opposite());
  }

  divide(other) {
    return this.multiply(other.inverse());
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

export class TableFieldValue extends FiniteFieldElement {
  constructor(value, field) {
    if (typeof value !== 'number') {
      throw new Error('Value must be a number');
    }
    if (!(field instanceof FiniteField)) {
      throw new Error('Field must be an instance of FiniteField');
    }
    if (FiniteField.isPrime(field.order)) {
      throw new Error('Field must not be a prime field');
    }

    super(value, field);
  }

  inverse() {
    if (this.value === 0) {
      throw new Error('Cannot divide by zero');
    }
    return this.field.el(
      this.field.multiplicationTable[this.value].findIndex(e => e === 1)
    );
  }

  opposite() {
    return this.field.el(
      this.field.additionTable[this.value].findIndex(e => e === 0)
    );
  }

  add(other) {
    return this.field.el(
      this.field.additionTable[this.value][other.value]
    );
  }

  multiply(other) {
    return this.field.el(
      this.field.multiplicationTable[this.value][other.value]
    );
  }

  subtract(other) {
    return this.add(other.opposite());
  }

  divide(other) {
    return this.multiply(other.inverse());
  }

  abs() {
    return this.field.el(
      this.value === 0 ? 0 : 1
    )
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
    return `[${this.value}]`;
  }

  [util.inspect?.custom]() {
    return this.toString();
  }

  copy() {
    return this.field.el(this.value);
  }
}