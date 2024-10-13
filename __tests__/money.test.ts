import { Bank } from "../src/bank";
import { Expression } from "../src/expression";
import { Money } from "../src/money";
import { Sum } from "../src/sum";

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

test("同じ通貨であること", () => {
  expect("USD").toBe(Money.dollar(1).getCurrency());
  expect("CHF").toBe(Money.franc(1).getCurrency());
});

test("$5 + $5 = $10", () => {
  const five: Money = Money.dollar(5);
  const sum: Expression = five.plus(Money.dollar(5));
  const bank = Bank();
  const reduced: Money = bank.reduce(sum, "USD");
  expect(Money.dollar(10).equals(reduced)).toBe(true);
});

test("plusがSUM型を返すこと", () => {
  const five: Money = Money.dollar(5);
  const result: Expression = five.plus(Money.dollar(5));
  const sum: Sum = result as Sum;
  expect(five.equals(sum.augend)).toBe(true);
  expect(five.equals(sum.addend)).toBe(true);
});

test("reduce sumのテスト", () => {
  const sum: Expression = Sum(Money.dollar(3), Money.dollar(4));
  const bank: Bank = Bank();
  const result: Money = bank.reduce(sum, "USD");
  expect(result.equals(Money.dollar(7))).toBe(true);
});

test("reduce Moneyのテスト", () => {
  const bank: Bank = Bank();
  const result: Money = bank.reduce(Money.dollar(1), "USD");
  expect(result.equals(Money.dollar(1))).toBe(true);
});
