import { Expression } from "./expression";

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

export const Money: MoneyConstructor = (
  initialAmount: number,
  currency: Currency
): Money => {
  let amount: number = initialAmount;
  const equals = (other: object): boolean => {
    const money = other as Money;
    return amount === money.getAmount() && currency === money.getCurrency();
  };
  const times = (multiplier: number) => {
    return Money(amount * multiplier, currency);
  };
  const plus = (added: Money) => {
    return Money(amount + added.getAmount(), currency);
  };
  return {
    getAmount: () => amount,
    times,
    equals,
    getCurrency: () => currency,
    plus,
  };
};

Money.dollar = (amount: number): Money => {
  return Money(amount, "USD");
};

Money.franc = (amount: number): Money => {
  return Money(amount, "CHF");
};
