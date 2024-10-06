type Dollar = {
  getAmount: () => number;
  times: (multiplier: number) => Dollar;
  equals: (other: Dollar) => boolean;
};
export const Dollar = (initialAmount: number): Dollar => {
  let amount: number = initialAmount;
  const getAmount = () => amount;
  const times = (multiplier: number) => {
    return Dollar(amount * multiplier);
  };
  const equals = (other: object): boolean => {
    const dollar = other as Dollar;
    return amount === dollar.getAmount();
  };
  return {
    getAmount,
    times,
    equals,
  };
};
