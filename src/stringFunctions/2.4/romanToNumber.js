export const romanToNumber = (number) => {
  const numbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  return number
    .split('')
    .map((item) => numbers[item])
    .reduce((acc, item, i, arr) => {
      if (i === 0) acc += item;
      else if (acc < item) acc = Math.abs(item - acc);
      else if (acc >= item) {
        acc += item;
      }
      return acc;
    }, 0);
};
