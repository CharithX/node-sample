// app.test.js
const add = require("./app");

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 5 + 7 to equal 12", () => {
  expect(add(5, 7)).toBe(12);
});

test("adds 6 + 6 to not equal 12", () => {
  expect(add(6, 6)).not.toBe(12);
});

// Add more test cases as needed
