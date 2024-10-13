import { Currency } from "./money";

export type Pair = {
  from: Currency;
  to: Currency;
  equals: (obj: Object) => boolean;
  hashCode: () => number;
};

// Pair型ガード
export const isPair = (obj: any): obj is Pair => {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "from" in obj &&
    "to" in obj &&
    "equals" in obj &&
    "hashCode" in obj &&
    typeof obj.from === "string" &&
    typeof obj.to === "string" &&
    typeof obj.equals === "function" &&
    typeof obj.hashCode === "function"
  );
};
export const Pair = (argFrom: Currency, argTo: Currency): Pair => {
  const from: Currency = argFrom;
  const to: Currency = argTo;
  const equals = (obj: Object): boolean => {
    const pair = obj as Pair;
    return isPair(pair) && from === pair.from && to === pair.to;
  };
  const hashCode = () => {
    return 0;
  };
  return {
    from,
    to,
    equals,
    hashCode,
  };
};
