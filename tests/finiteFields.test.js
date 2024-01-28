import { FiniteField, FiniteFieldMatrix } from '../src/assets/js/solve/FiniteField.js';


test('Finite Field elements and operations', () => {

  expect(() => new FiniteField(6)).toThrow();

  const field = new FiniteField(2);
  const zero = field.el(0);
  const one = field.el(1);

  expect(zero.add(zero)).toEqual(zero);
  expect(one.add(zero)).toEqual(one);
  expect(one.add(one)).toEqual(zero);
  expect(one.multiply(one)).toEqual(one);
  expect(one.multiply(zero)).toEqual(zero);
  expect(one.multiply(one)).toEqual(one);
  expect(one.multiply(one)).toEqual(one);

  expect(one.inverse()).toEqual(one);
  
  const field2 = new FiniteField(7);

  expect(field2.el(3).add(field2.el(4))).toEqual(field2.el(0));
  expect(field2.el(3).opposite()).toEqual(field2.el(4));

  expect(field2.el(6).multiply(field2.el(3))).toEqual(field2.el(4));

  expect(field2.el(3).inverse()).toEqual(field2.el(5));
  expect(field2.el(5).inverse().multiply(field2.el(5))).toEqual(field2.el(1));

  expect(field2.el(2).sqrt().pow(2)).toEqual(field2.el(2));
  expect(() => field2.el(3).sqrt()).toThrow();
  expect(field2.el(3).equals(3)).toEqual(true);
  expect(field2.el(3).equals(4)).toEqual(false);

  expect(field2.el(5).pow(-1)).toEqual(field2.el(3));
  expect(field2.el(5).inverse()).toEqual(field2.el(3));

});

describe('Finite Field matrix operations', () => {

  const field = new FiniteField(2);

  const A = field.matrix([
    [1, 0, 1],
    [1, 1, 0],
    [0, 1, 1]
  ]);

  const B = field.matrix([
    [1, 1, 0],
    [1, 0, 1],
    [0, 1, 1]
  ]);

  // A * I = A
  expect(A.multiply(field.identity(3)).equals(A)).toEqual(true);
  
  expect(A.isSquare()).toEqual(true);
  expect(A.isSymmetric()).toEqual(false);
  expect(B.isSymmetric()).toEqual(true);

  // A^T
  expect(A.transpose().toRawMatrix()).toEqual([
    [1, 1, 0],
    [0, 1, 1],
    [1, 0, 1]
  ]);

  // A^T = A
  expect(B.transpose()).toEqual(B);

  // A + B
  expect(A.add(B).toRawMatrix()).toEqual([
    [0, 1, 1],
    [0, 1, 1],
    [0, 0, 0]
  ]);

  // A * B
  expect(A.multiply(B).toRawMatrix()).toEqual([
    [1, 0, 1],
    [0, 1, 1],
    [1, 1, 0]
  ]);

  // A^3
  expect(A.pow(3).toRawMatrix()).toEqual([
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0]
  ]);

  // -A = A
  expect(A.opposite()).toEqual(A);

  // (-A) - A = 0
  expect(A.opposite().subtract(A)).toEqual(FiniteFieldMatrix.fromValue(0, 3, 3, field));

  // det(A) = 0, det(B) = 1
  expect(A.determinant()).toEqual(field.el(0));
  expect(B.determinant()).toEqual(field.el(0));

  const C = field.matrix([
    [1, 0, 1],
    [0, 1, 0],
    [1, 1, 0]
  ]);

  // det(C) = 1
  expect(C.determinant()).toEqual(field.el(1));
  expect(C.determinant()).toEqual(C.PLUDeterminant());

  // C^-1 * C = I
  expect(C.inverse().multiply(C)).toEqual(field.identity(3));

  expect(C.inverse()).toEqual(C.gaussianInverse());

  // (C^T)^-1 = (C^-1)^T
  expect(C.transpose().inverse()).toEqual(C.inverse().transpose());

  // C * C+ * C = C
  expect(C.multiply(C.pseudoInverse().multiply(C))).toEqual(C);
  expect(B.multiply(B.pseudoInverse().multiply(B))).toEqual(B);
  
  // C+ * C * C+ = C+
  expect(C.pseudoInverse().multiply(C).multiply(C.pseudoInverse())).toEqual(C.pseudoInverse());
  expect(B.pseudoInverse().multiply(B).multiply(B.pseudoInverse())).toEqual(B.pseudoInverse());

  // (C * C+)^T = C * C+
  expect(C.multiply(C.pseudoInverse()).transpose()).toEqual(C.multiply(C.pseudoInverse()));
  expect(B.multiply(B.pseudoInverse()).transpose()).toEqual(B.multiply(B.pseudoInverse()));
  // (C+ * C)^T = C+ * C
  expect(C.pseudoInverse().multiply(C).transpose()).toEqual(C.pseudoInverse().multiply(C));
  expect(B.pseudoInverse().multiply(B).transpose()).toEqual(B.pseudoInverse().multiply(B));

  // C+ = C^-1
  expect(C.pseudoInverse()).toEqual(C.inverse());
  
  // adj(C) * C = I * det(C)
  expect(C.adjugate().multiply(C)).toEqual(field.identity(3).multiply(C.determinant()));
  expect(B.adjugate().multiply(B)).toEqual(field.identity(3).multiply(B.determinant()));

  // C^-1 = adj(C) / det(C)
  expect(C.inverse()).toEqual(C.adjugate().multiply(C.determinant().inverse()));

  expect(C.reducedRowEchelonForm()).toEqual(field.identity(3));
  expect(A.reducedRowEchelonForm().toRawMatrix()).toEqual([
    [1, 0, 1],
    [0, 1, 1],
    [0, 0, 0]
  ]);

  it('should correctly compute the rank factorization', () => {
    const { A, B } = C.rankFactorization();
    expect(A.multiply(B)).toEqual(C);
  });

  // P*A = L*U
  // P*A = R*U + U - U*U
  // P*A*U^-1 = R + I - U


  // R = L - I + U
  // L = R + I - U = P * A * U^-1
  // U = R + I - L = P * A * L^-1

});