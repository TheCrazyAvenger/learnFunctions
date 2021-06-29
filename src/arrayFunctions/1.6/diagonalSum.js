export const diagonalSum = (arr) =>
  arr.reduce((result, currentArr, i) => (result += currentArr[i]), 0);
