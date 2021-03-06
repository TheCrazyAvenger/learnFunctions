import { sumAverage } from './sumAverage';

test('Сумма среднего арифметического массивов.', () => {
  expect(
    sumAverage([
      [3, 4, 1, 3, 5, 1, 4],
      [21, 54, 33, 21, 77],
    ])
  ).toBe(44);
  expect(
    sumAverage([
      [-4, 3, -8, -2],
      [2, 9, 1, -5],
      [-7, -2, -6, -4],
    ])
  ).toBe(-6);
});
