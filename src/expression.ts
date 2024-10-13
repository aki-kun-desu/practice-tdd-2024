import { Bank } from "./bank";
import { Currency, Money } from "./money";

export type Expression = {
  reduce: (bank: Bank, to: Currency) => Money;
};
