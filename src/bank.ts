import { Expression } from "./expression";
import { Currency, Money } from "./money";
import { Sum } from "./sum";

export type Bank = {
  reduce: (source: Expression, to: Currency) => Money;
};
export const Bank = () => {
  const reduce = (source: Expression, to: Currency) => {
    // TODO どんなExpression(式)でも正常に動作しなければならない
    const sum: Sum = source as Sum;
    const amount: number = sum.augend.getAmount() + sum.addend.getAmount();
    return Money(amount, to);
  };

  return {
    reduce,
  };
};
