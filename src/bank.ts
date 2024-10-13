import { Expression } from "./expression";
import { Currency, isMoney, Money } from "./money";

export type Bank = {
  reduce: (source: Expression, to: Currency) => Money;
};
export const Bank = () => {
  const reduce = (source: Expression, to: Currency) => {
    return source.reduce(to);
  };

  return {
    reduce,
  };
};
