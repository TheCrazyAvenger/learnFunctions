import { countDuplicates } from './countDuplicates';

test('Поиск дубликатов', () => {
  expect(countDuplicates('')).toBe(0);
  expect(countDuplicates('abcde')).toBe(0);
  expect(countDuplicates('aabbcde')).toBe(2);
  expect(countDuplicates('aabBcde')).toBe(2);
  expect(countDuplicates('Indivisibility')).toBe(1);
  expect(countDuplicates('Indivisibilities')).toBe(2);
});
