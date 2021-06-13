const { sumAverage, maxTripletSum } = require('./index.js');

test('Сумма среднего арифметического массивов.', () => {
  expect(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])).toBe(44);
  expect(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]])).toBe(-6);
})

test('Сумма трех наибольших значений массива.', () => {
  expect(maxTripletSum([3,2,6,8,2,3])).toBe(17);
  expect(maxTripletSum([2,9,13,10,5,2,9,5])).toBe(32);
  expect(maxTripletSum([2,1,8,0,6,4,8,6,2,4])).toBe(18);
  expect(maxTripletSum([-3,-27,-4,-2,-27,-2])).toBe(-9);
  expect(maxTripletSum([-14,-12,-7,-42,-809,-14,-12])).toBe(-33);
  expect(maxTripletSum([-13,-50,57,13,67,-13,57,108,67])).toBe(232);
  expect(maxTripletSum([-7,12,-7,29,-5,0,-7,0,0,29])).toBe(41);
  expect(maxTripletSum([-2,0,2])).toBe(0);
  expect(maxTripletSum([-2,-4,0,-9,2])).toBe(0);
  expect(maxTripletSum([-5,-1,-9,0,2])).toBe(1);
})

