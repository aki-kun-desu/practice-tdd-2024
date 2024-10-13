import { Expression } from "./expression";
import { Currency, isMoney, Money } from "./money";
import { Pair } from "./pair";

export type Bank = {
  reduce: (source: Expression, to: Currency) => Money;
  addRate: (from: Currency, to: Currency, rate: number) => void;
  rate: (from: Currency, to: Currency) => number;
};
export const Bank = (argRates?: Map<any, any>): Bank => {
  const rates = argRates ? argRates : new Map();
  const reduce = (source: Expression, to: Currency) => {
    return source.reduce(Bank(rates), to);
  };
  const addRate = (from: Currency, to: Currency, rate: number): void => {
    rates.set(0, rate);
  };
  const rate = (from: Currency, to: Currency) => {
    if (from === to) return 1;
    console.log(rates.get(0));
    return rates.get(0);
  };
  return {
    reduce,
    addRate,
    rate,
  };
};
