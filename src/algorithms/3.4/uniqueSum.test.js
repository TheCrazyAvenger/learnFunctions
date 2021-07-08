import { uniqueSum } from './uniqueSum';

test('Сумма уникальных значений', () => {
  expect(uniqueSum([1, 2, 3])).toBe(6);
  expect(uniqueSum([1, 3, 8, 1, 8])).toBe(12);
  expect(uniqueSum([-1, -1, 5, 2, -7])).toBe(-1);
  expect(uniqueSum([])).toBe(0);
});
