import { Currency, Money } from "./money";
import { Expression } from "./expression";
import { Bank } from "./bank";

export type Sum = {
  augend: Money;
  addend: Money;
  reduce: (bank: Bank, to: Currency) => Money;
} & Expression;

export const Sum = (argAugend: Money, argAddend: Money): Sum => {
  const augend = argAugend;
  const addend = argAddend;
  const reduce = (bank: Bank, to: Currency): Money => {
    const amount: number =
      augend.reduce(bank, to).getAmount() + addend.reduce(bank, to).getAmount();
    return Money(amount, to);
  };
  return {
    augend,
    addend,
    reduce,
  };
};
