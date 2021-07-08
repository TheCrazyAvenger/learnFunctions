import { arithmeticSum } from './arithmeticSum';

test('Арифметическая последовательность', () => {
  expect(arithmeticSum(2, 3, 5)).toBe(40);
  expect(arithmeticSum(3, 2, 20)).toBe(440);
  expect(arithmeticSum(1, -2, 10)).toBe(-80);
});
