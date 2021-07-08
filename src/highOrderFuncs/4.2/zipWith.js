export const zipWith = (fn, a0, a1) =>
  a0.length <= a1.length ? a0.map((_, i) => fn(a0[i], a1[i])) : a1.map((_, i) => fn(a1[i], a0[i]));
