
const { add, divide } = require("./index");

describe("Normal Cases", () => {

  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("divides correctly", () => {
    expect(divide(10, 2)).toBe(5);
  });

});

describe("Edge Cases", () => {

  test("adds zero", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("divide by zero returns null", () => {
    expect(divide(10, 0)).toBeNull();
  });

  test("divide negative numbers", () => {
    expect(divide(-10, 2)).toBe(-5);
  });

});