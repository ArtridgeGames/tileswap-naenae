import { FiniteField } from '../src/assets/js/solve/fields/FiniteField.js';
import { getIrreduciblePolynomialOfDegree } from '../src/assets/js/solve/irreduciblePolynomials.js';


const field = new FiniteField(4);


const polynomial = getIrreduciblePolynomialOfDegree(3);

console.log(polynomial);