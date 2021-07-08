export const compose =
  (...funcs) =>
  (a) =>
    funcs.reduceRight((currentValue, nextFunc) => nextFunc(currentValue), a);
