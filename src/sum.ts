import { Currency, Money } from "./money";
import { Expression } from "./expression";

export type Sum = {
  augend: Money;
  addend: Money;
  reduce: (to: Currency) => Money;
} & Expression;

export const Sum = (argAugend: Money, argAddend: Money): Sum => {
  const augend = argAugend;
  const addend = argAddend;
  const reduce = (to: Currency): Money => {
    const amount: number = augend.getAmount() + addend.getAmount();
    return Money(amount, to);
  };
  return {
    augend,
    addend,
    reduce,
  };
};
