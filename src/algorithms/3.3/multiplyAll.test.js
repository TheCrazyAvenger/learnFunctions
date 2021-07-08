import { multiplyAll } from './multiplyAll';

test('Умножение всех элементов массива', () => {
  expect(multiplyAll([1, 2, 3])(2)).toStrictEqual([2, 4, 6]);
  expect(multiplyAll([1, 2, 3])(0)).toStrictEqual([0, 0, 0]);
  expect(multiplyAll([])(10)).toStrictEqual([]);
  expect(multiplyAll([])()).toStrictEqual([]);
});
