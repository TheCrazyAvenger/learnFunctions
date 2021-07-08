import { flattenAndSort } from './flattenAndSort';

test('Вывести одномерный массив', () => {
  expect(flattenAndSort([])).toStrictEqual([]);
  expect(flattenAndSort([], [])).toStrictEqual([]);
  expect(
    flattenAndSort([
      [3, 2, 1],
      [7, 9, 8],
      [6, 4, 5],
    ])
  ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(flattenAndSort([1, 7, [35, [100], [54, 23]], -4])).toStrictEqual([
    -4, 1, 7, 23, 35, 54, 100,
  ]);
});
