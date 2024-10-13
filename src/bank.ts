import { Expression } from "./expression";
import { Currency, isMoney, Money } from "./money";
import { Pair } from "./pair";

export type Bank = {
  reduce: (source: Expression, to: Currency) => Money;
  addRate: (from: Currency, to: Currency, rate: number) => void;
  rate: (from: Currency, to: Currency) => number;
};
export const Bank = (): Bank => {
  const rates = new Map();
  const reduce = (source: Expression, to: Currency) => {
    return source.reduce(Bank(), to);
  };
  const addRate = (from: Currency, to: Currency, rate: number): void => {
    rates.set(Pair(from, to), rate);
  };
  const rate = (from: Currency, to: Currency) => {
    if (from === to) return 1;
    return rates.get(Pair(from, to));
  };
  return {
    reduce,
    addRate,
    rate,
  };
};
