import { diagonalSum } from './diagonalSum';

test('Сумма всез значений основной диагонали матрицы', () => {
  expect(
    diagonalSum([
      [5, 9, 1, 0],
      [8, 7, 2, 3],
      [1, 4, 1, 9],
      [2, 3, 8, 2],
    ])
  ).toBe(15);
  expect(
    diagonalSum([
      [1, 2],
      [3, 4],
    ])
  ).toBe(5);
});
