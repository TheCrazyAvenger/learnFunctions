import { expect } from '@jest/globals';
import { biggest } from './biggest';

test('Сортировка к максимальному значению', () => {
  expect(biggest([1, 2, 3])).toBe('321');
  expect(biggest([121, 12])).toBe('12121');
  expect(biggest([3, 30, 34, 5, 9])).toBe('9534330');
});
