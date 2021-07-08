import { zipWith } from './zipWith';

const plus = (a, b) => a + b;

test('Применить функцию к каждой паре значений массивов', () => {
  expect(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1])).toStrictEqual([6, 6, 6, 6, 6, 6]);
  expect(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])).toStrictEqual([6, 6, 6, 6, 6]);
  expect(zipWith((a, b) => a + b, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2])).toStrictEqual([
    6, 6, 6, 6, 6,
  ]);
  expect(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])).toStrictEqual([1, 10, 100, 1000]);
  expect(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1])).toStrictEqual([
    4, 7, 7, 4, 7, 7,
  ]);
});
