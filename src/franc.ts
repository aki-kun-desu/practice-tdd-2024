import { Money } from "./money";

export const Franc = (initialAmount: number): Money => {
  const currency = "CHF";
  let amount: number = initialAmount;
  const getAmount = () => amount;
  const times = (multiplier: number) => {
    return Franc(amount * multiplier);
  };
  const { equals } = Money(initialAmount, currency);
  return {
    getAmount,
    times,
    equals,
    currency,
  };
};
