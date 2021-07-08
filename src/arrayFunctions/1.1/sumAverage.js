export const sumAverage = (arr) =>
  Math.floor(
    arr.reduce(
      (result, currentArr) =>
        (result += currentArr.reduce((acc, curentNum) => acc + curentNum) / currentArr.length),
      0
    )
  );
