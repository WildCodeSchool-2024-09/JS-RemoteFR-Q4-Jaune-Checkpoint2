// ⚠️ NE PAS TOUCHER

import sumArrays from "./sumArrays";

test('Should return ["3", "6", "4"]', () => {
  expect(sumArrays(["1", "2", "3"], ["2", "4", "1"])[0]).toBe("3");
  expect(sumArrays(["1", "2", "3"], ["2", "4", "1"])[1]).toBe("6");
  expect(sumArrays(["1", "2", "3"], ["2", "4", "1"])[2]).toBe("4");
});

test('should return ["4", "11", "12", "8", "2"]', () => {
  expect(sumArrays(["2", "7", "3", "8", "2"], ["2", "4", "9"])[0]).toBe("4");
  expect(sumArrays(["2", "7", "3", "8", "2"], ["2", "4", "9"])[1]).toBe("11");
  expect(sumArrays(["2", "7", "3", "8", "2"], ["2", "4", "9"])[2]).toBe("12");
  expect(sumArrays(["2", "7", "3", "8", "2"], ["2", "4", "9"])[3]).toBe("8");
  expect(sumArrays(["2", "7", "3", "8", "2"], ["2", "4", "9"])[4]).toBe("2");
});

test('should return ["4", "9", "12", "5", "5"]', () => {
  expect(sumArrays(["2", "5", "3"], ["2", "4", "9", "5", "5"])[0]).toBe("4");
  expect(sumArrays(["2", "5", "3"], ["2", "4", "9", "5", "5"])[1]).toBe("9");
  expect(sumArrays(["2", "5", "3"], ["2", "4", "9", "5", "5"])[2]).toBe("12");
  expect(sumArrays(["2", "5", "3"], ["2", "4", "9", "5", "5"])[3]).toBe("5");
  expect(sumArrays(["2", "5", "3"], ["2", "4", "9", "5", "5"])[4]).toBe("5");
});
