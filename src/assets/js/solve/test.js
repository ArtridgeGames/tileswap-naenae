import { FiniteField, FiniteFieldElement, FiniteFieldPolynomialAsElement, FiniteFieldValue, FiniteFieldMatrix, FiniteFieldPolynomial } from './FiniteField.js';

const field = FiniteField.fromOrder(9);
const a = new FiniteFieldPolynomial([2], field);

console.log(a);

console.log(a.multiply(a));