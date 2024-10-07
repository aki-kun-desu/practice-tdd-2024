import { Dollar } from "../src/dollar";

test("$5 * 2 = $10", () => {
  const five = Dollar(5);
  expect(five.times(2).getAmount()).toEqual(Dollar(10).getAmount());
  expect(five.times(3).getAmount()).toEqual(Dollar(15).getAmount());
});

test("equals()", () => {
  expect(Dollar(5).equals(Dollar(5))).toBe(true);
  expect(Dollar(5).equals(Dollar(6))).toBe(false);
});
