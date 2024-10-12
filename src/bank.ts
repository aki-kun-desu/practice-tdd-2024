import { Expression } from "./expression";
import { Money } from "./money";

export const Bank = () => {
  const reduce = (source: Expression, to: String) => {
    return Money.dollar(10);
  };

  return {
    reduce,
  };
};
