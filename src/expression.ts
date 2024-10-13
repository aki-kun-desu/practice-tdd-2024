import { Currency, Money } from "./money";

export type Expression = {
  reduce: (to: Currency) => Money;
};
