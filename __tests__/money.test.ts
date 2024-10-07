import { Dollar } from "../src/dollar";
import { Franc } from "../src/franc";

test("$5 * 2 = $10", () => {
  const five = Dollar(5);
  expect(five.times(2).getAmount()).toEqual(Dollar(10).getAmount());
  expect(five.times(3).getAmount()).toEqual(Dollar(15).getAmount());
});

test("equals()", () => {
  expect(Dollar(5).equals(Dollar(5))).toBe(true);
  expect(Dollar(5).equals(Dollar(6))).toBe(false);
  expect(Franc(5).equals(Franc(5))).toBe(true);
  expect(Franc(5).equals(Franc(6))).toBe(false);
  expect(Dollar(5).equals(Franc(5))).toBe(false);
});

test("5CHF * 2 = 10CHF", () => {
  const five = Franc(5);
  expect(five.times(2).getAmount()).toEqual(Franc(10).getAmount());
  expect(five.times(3).getAmount()).toEqual(Franc(15).getAmount());
});
