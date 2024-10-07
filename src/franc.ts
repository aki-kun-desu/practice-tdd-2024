import { Money } from "./money";

type Franc = {
  getAmount: () => number;
  times: (multiplier: number) => Franc;
  equals: (other: Franc) => boolean;
};
export const Franc = (initialAmount: number): Franc => {
  let amount: number = initialAmount;
  const getAmount = () => amount;
  const times = (multiplier: number) => {
    return Franc(amount * multiplier);
  };
  const { equals } = Money(initialAmount);
  return {
    getAmount,
    times,
    equals,
  };
};
