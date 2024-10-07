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
  const equals = (other: object): boolean => {
    const franc = other as Franc;
    return amount === franc.getAmount();
  };
  return {
    getAmount,
    times,
    equals,
  };
};
