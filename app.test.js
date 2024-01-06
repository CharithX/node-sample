// test/add.test.js
const add = require("./add");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(add(5, 7)).toBe(12);
});

test("adds -1 + 5 to equal 4", () => {
  expect(add(-1, 5)).toBe(4);
});

test("adds 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});
