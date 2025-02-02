// ⚠️ NE PAS TOUCHER

import getFibonacciSequence from "./getFibonacciSequence";

test("retourne [] si n = 0", () => {
  expect(getFibonacciSequence(0)).toEqual([]);
});

test("retourne [0] si n = 1", () => {
  expect(getFibonacciSequence(1)).toEqual([0]);
});

test("retourne [0, 1] si n = 2", () => {
  expect(getFibonacciSequence(2)).toEqual([0, 1]);
});

test("retourne les 5 premiers nombres de Fibonacci si n = 5", () => {
  expect(getFibonacciSequence(5)).toEqual([0, 1, 1, 2, 3]);
});

test("retourne les 10 premiers nombres de Fibonacci si n = 10", () => {
  expect(getFibonacciSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test("retourne un tableau vide pour n négatif", () => {
  expect(getFibonacciSequence(-5)).toEqual([]);
});
