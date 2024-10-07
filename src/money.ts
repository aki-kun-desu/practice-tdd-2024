// ファクトリ関数ではプライベートフィールドは定義できない
export type Currency = "USD" | "CHF";
export type Money = {
  getAmount: () => number;
  times: (multiplier: number) => Money;
  equals: (other: Money) => boolean;
  currency: Currency;
};
export const Money = (initialAmount: number, currency: Currency) => {
  let amount: number = initialAmount;
  const equals = (other: object): boolean => {
    const money = other as Money;
    return amount === money.getAmount() && currency === money.currency;
  };
  return {
    equals,
  };
};
