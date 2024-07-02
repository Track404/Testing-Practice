import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyseArray,
} from "./index.js";

// capitalize test
test("capitalize word", () => {
  expect(capitalize("yes")).toMatch("Yes");
  expect(capitalize("ThIsAAa")).toMatch("Thisaaa");
  expect(capitalize("wHATISTHAT")).toMatch("Whatisthat");
});

// reverse sring test
test("reverse a string", () => {
  expect(reverseString("thisisit")).toMatch("tisisiht");
  expect(reverseString("what")).toMatch("tahw");
  expect(reverseString("what do you want to say")).toMatch(
    "yas ot tnaw uoy od tahw"
  );
});

// calculator test
test("calculator to be defined", () => {
  expect(calculator).toBeDefined();
});

test("method should return the sum of two numbers", () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.add(1, 3)).toBe(4);
});

test("method should return the substract of two numbers", () => {
  expect(calculator.substract(10, 5)).toBe(5);
  expect(calculator.substract(30, 3)).toBe(27);
});
test("method should return the division of two numbers", () => {
  expect(calculator.divide(3, 7)).toBeCloseTo(0.425);
  expect(calculator.divide(10, 5)).toBe(2);
});
test("method should return the multiply of two numbers", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
  expect(calculator.multiply(0.1, 3)).toBeCloseTo(0.3);
});

// ceasearCipher test

test("method should return the word with a certain shift to the alphabet", () => {
  expect(ceasarCipher("abcdef", 5)).toMatch("fghijk");
  expect(ceasarCipher("imnot", 10)).toMatch("swxyd");
});

test("method should return upperCase letter", () => {
  expect(ceasarCipher("AbCdEf", 5)).toMatch("FgHiJk");
  expect(ceasarCipher("IDontUnderstand", 14)).toMatch("WRcbhIbrsfghobr");
});

test("method should return the word with space ponctuation and non alphabetical caracters", () => {
  expect(ceasarCipher("I Don't Understand ?", 14)).toMatch(
    "W Rcb'h Ibrsfghobr ?"
  );
  expect(ceasarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

//analyseArray test

test("method should return an object with an object with an average,min,max,lenght in it", () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
