import { Dollar } from "../src/dollar";
import { Franc } from "../src/franc";
import { Money } from "../src/money";

test("$5 * 2 = $10", () => {
  const five = Money.dollar(5);
  expect(five.times(2).getAmount()).toEqual(Money.dollar(10).getAmount());
  expect(five.times(3).getAmount()).toEqual(Money.dollar(15).getAmount());
});

test("equals()", () => {
  expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
  expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
  expect(Money.franc(5).equals(Money.franc(5))).toBe(true);
  expect(Money.franc(5).equals(Money.franc(6))).toBe(false);
  expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
});

test("5CHF * 2 = 10CHF", () => {
  const five = Money.franc(5);
  expect(five.times(2).getAmount()).toEqual(Money.franc(10).getAmount());
  expect(five.times(3).getAmount()).toEqual(Money.franc(15).getAmount());
});
