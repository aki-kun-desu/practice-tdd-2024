import { Bank } from "./bank";
import { Expression } from "./expression";
import { Sum } from "./sum";

export type Currency = "USD" | "CHF";
export type Money = {
  getAmount: () => number;
  times: (multiplier: number) => Money;
  equals: (other: Money) => boolean;
  getCurrency: () => Currency;
  plus: (added: Money) => Expression;
} & Expression;

type MoneyConstructor = {
  (initialAmount: number, currency: Currency): Money;
  dollar: (amount: number) => Money;
  franc: (amount: number) => Money;
};

// Money型ガード
export const isMoney = (obj: any): obj is Money => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "getAmount" in obj &&
    "times" in obj &&
    "equals" in obj &&
    "getCurrency" in obj &&
    "plus" in obj &&
    typeof obj.getAmount === "function" &&
    typeof obj.times === "function" &&
    typeof obj.equals === "function" &&
    typeof obj.getCurrency === "function" &&
    typeof obj.plus === "function"
  );
};

export const Money: MoneyConstructor = (
  initialAmount: number,
  currency: Currency
): Money => {
  let amount: number = initialAmount;
  const equals = (other: object): boolean => {
    const money = other as Money;
    return (
      isMoney(money) &&
      amount === money.getAmount() &&
      currency === money.getCurrency()
    );
  };
  const times = (multiplier: number) => {
    return Money(amount * multiplier, currency);
  };
  const plus = (added: Money) => {
    return Sum(Money(amount, currency), added);
  };
  const reduce = (bank: Bank, to: Currency) => {
    const rate = bank.rate(currency, to);
    return Money(amount / rate, to);
  };
  return {
    getAmount: () => amount,
    times,
    equals,
    getCurrency: () => currency,
    plus,
    reduce,
  };
};

Money.dollar = (amount: number): Money => {
  return Money(amount, "USD");
};

Money.franc = (amount: number): Money => {
  return Money(amount, "CHF");
};
