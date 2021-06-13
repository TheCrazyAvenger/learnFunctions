// Тут мы пишем одну фунция из задания

const sum = (x, y) => x + y;

const sumAverage = (arr) => {
  let result = 0;
  arr.map(item => {
    const reducer = (acc, curentNum) => acc + curentNum;
    result += (item.reduce(reducer)) / item.length;
  })
  return Math.floor(result);
}

const maxTripletSum = (arr) => {
  let sumArray = [...new Set(arr)].sort((a, b) => b - a).slice(0,3);
  const reducer = (acc, num) => acc + num;
  return sumArray.reduce(reducer);
}

module.exports = {
  sum,
  sumAverage,
  maxTripletSum,
};
