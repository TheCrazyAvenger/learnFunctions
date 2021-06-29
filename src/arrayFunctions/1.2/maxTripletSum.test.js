import { maxTripletSum } from './maxTripletSum';

test('Сумма трех наибольших значений массива.', () => {
  expect(maxTripletSum([3, 2, 6, 8, 2, 3])).toBe(17);
  expect(maxTripletSum([-3, -27, -4, -2, -27, -2])).toBe(-9);
  expect(maxTripletSum([-13, -50, 57, 13, 67, -13, 57, 108, 67])).toBe(232);
  expect(maxTripletSum([-7, 12, -7, 29, -5, 0, -7, 0, 0, 29])).toBe(41);
  expect(maxTripletSum([-2, 0, 2])).toBe(0);
});
