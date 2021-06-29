export const arithmeticSum = (a, r, n) =>
  new Array(n)
    .fill(null)
    .reduce((acc, _, i) => (acc += new Array(i).fill(null).reduce((acc) => acc + r, a)), 0);
