import { sequenceSum } from './sequenceSum';

test('Сумма последовательности', () => {
  expect(sequenceSum(2, 2, 2)).toBe(2);
  expect(sequenceSum(4, 2, 2)).toBe(0);
  expect(sequenceSum(1, 5, 1)).toBe(15);
  expect(sequenceSum(1, 5, 3)).toBe(5);
});
