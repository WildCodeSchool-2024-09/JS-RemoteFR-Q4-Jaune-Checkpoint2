// ⚠️ NE PAS TOUCHER

import countLetters from "./countLetters";

test('"" et "b"', () => {
  expect(countLetters("", "b")).toBe(0);
});

test('"a" et "b"', () => {
  expect(countLetters("a", "b")).toBe(0);
});

test('"a" et "a"', () => {
  expect(countLetters("a", "a")).toBe(1);
});

test('"bbb" et "b"', () => {
  expect(countLetters("bbb", "b")).toBe(3);
});

test('"abababab" et "b"', () => {
  expect(countLetters("abababab", "b")).toBe(4);
});

test('"abcba" et "c"', () => {
  expect(countLetters("abcba", "c")).toBe(1);
});

test('"lorem ipsum..." et "e"', () => {
  expect(
    countLetters(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "e",
    ),
  ).toBe(37);
});
