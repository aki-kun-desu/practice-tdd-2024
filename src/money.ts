// ファクトリ関数ではプライベートフィールドは定義できない
export type Money = {
  getAmount: () => number;
  times: (multiplier: number) => Money;
  equals: (other: Money) => boolean;
};
export const Money = (initialAmount: number) => {
  let amount: number = initialAmount;
  const equals = (other: object): boolean => {
    const money = other as Money;
    return amount === money.getAmount();
  };
  return {
    equals,
  };
};
