import { Money } from "./money";
import { Expression } from "./expression";

export type Sum = {
  augend: Money;
  addend: Money;
} & Expression;

export const Sum = (argAugend: Money, argAddend: Money): Sum => {
  return {
    augend: argAugend,
    addend: argAddend,
  };
};
