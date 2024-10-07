import { Money } from "./money";

export const Dollar = (initialAmount: number): Money => {
  let amount: number = initialAmount;
  const getAmount = () => amount;
  const times = (multiplier: number) => {
    return Dollar(amount * multiplier);
  };
  const { equals } = Money(initialAmount);
  return {
    getAmount,
    times,
    equals,
  };
};
