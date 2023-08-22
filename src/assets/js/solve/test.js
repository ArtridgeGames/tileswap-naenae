import { FiniteField, FiniteFieldElement, FiniteFieldPolynomialAsElement, FiniteFieldValue, FiniteFieldMatrix } from './FiniteField.js';

const field = FiniteField.fromOrder(9);

console.log(field.irreduciblePolynomial());