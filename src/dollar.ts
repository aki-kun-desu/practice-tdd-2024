import { Money } from "./money";

export const Dollar = (initialAmount: number): Money => {
  const currency = "USD";
  let amount: number = initialAmount;
  const getAmount = () => amount;
  const times = (multiplier: number) => {
    return Dollar(amount * multiplier);
  };
  const { equals } = Money(initialAmount, currency);
  return {
    getAmount,
    times,
    equals,
    currency,
  };
};
