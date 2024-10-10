// ファクトリ関数ではプライベートフィールドは定義できない
export type Currency = "USD" | "CHF";
export type Money = {
  getAmount: () => number;
  times: (multiplier: number) => Money;
  equals: (other: Money) => boolean;
  currency: Currency;
};

type MoneyConstructor = {
  (initialAmount: number, currency: Currency): Money;
  dollar: (amount: number) => Money;
};

export const Money: MoneyConstructor = (
  initialAmount: number,
  currency: Currency
): Money => {
  let amount: number = initialAmount;
  const equals = (other: object): boolean => {
    const money = other as Money;
    return amount === money.getAmount() && currency === money.currency;
  };
  const times = (multiplier: number) => {
    return Money(amount * multiplier, currency);
  };
  return {
    getAmount: () => amount,
    times,
    equals,
    currency,
  };
};

Money.dollar = (amount: number): Money => {
  return Money(amount, "USD");
};
