import { Currency } from "./money";

export type Pair = {
  from: Currency;
  to: Currency;
  equals: (obj: Object) => boolean;
};

// Pair型ガード
export const isPair = (obj: any): obj is Pair => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "from" in obj &&
    "to" in obj &&
    "equals" in obj &&
    typeof obj.from === "string" &&
    typeof obj.to === "string" &&
    typeof obj.equals === "function"
  );
};
export const Pair = (argFrom: Currency, argTo: Currency): Pair => {
  const from: Currency = argFrom;
  const to: Currency = argTo;
  const equals = (obj: Object): boolean => {
    const pair = obj as Pair;
    return isPair(pair) && from === pair.from && to === pair.to;
  };
  return {
    from,
    to,
    equals,
  };
};
