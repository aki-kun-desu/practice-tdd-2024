export const Dollar = (initialAmount: number) => {
  let amount: number = initialAmount;
  const times = (multiplier: number) => {
    amount *= multiplier;
  };
  return {
    getAmount: () => amount,
    times,
  };
};
