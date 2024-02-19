import * as util from 'util';
import { FiniteFieldElement } from './FiniteFieldElement.js';
import { FiniteField } from './FiniteField.js';

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
    return (this.poly.coefficients.map((e, i) => {
      if (e.equals(0)) return '';
      const deg = this.poly.coefficients.length - i - 1;
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

    this.field = field;
    this.primeField = FiniteField.fromOrder(field.p);

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

  multiply(other) {
    if (other instanceof FiniteFieldPolynomial) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot multiply polynomials in different fields');
      }
      const coefficients = [];
      for (let i = 0; i < this.coefficients.length + other.coefficients.length - 1; i++) {
        coefficients.push(this.field.el(0));
      }
      for (let i = 0; i < this.coefficients.length; i++) {
        for (let j = 0; j < other.coefficients.length; j++) {
          coefficients[i + j] = coefficients[i + j].add(this.coefficients[i].multiply(other.coefficients[j]));
        }
      }
      return this.field.el(coefficients);
    }

    if (other instanceof Array) {
      return this.multiply(this.field.el(other));
    }

    throw new Error('Cannot multiply polynomial by non-polynomial');
  }

  equals(other) {
    if (other instanceof FiniteFieldPolynomial) {
      if (other.field.order !== this.field.order) {
        throw new Error('Cannot compare polynomials in different fields');
      }
      return this.coefficients.every((e, i) => e.equals(other.coefficients[i]));
    }

    if (other instanceof Array) {
      return this.equals(this.field.el(other));
    }

    throw new Error('Cannot compare polynomial to non-polynomial');
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