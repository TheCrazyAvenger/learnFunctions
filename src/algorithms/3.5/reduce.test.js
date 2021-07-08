import { reduce } from './reduce';

test('Reduce', () => {
  expect(reduce([1, 2, 3, 4], (acc, value) => acc * value, 1)).toBe(24);
  expect(reduce([1, 2, 3, 4], (acc, value) => acc * value, 2)).toBe(48);
  expect(reduce([1, 2, 3, 4], (acc, value) => acc + value)).toBe(10);
  expect(reduce([1, 2, 3, 4], (acc, value) => acc + value, 5)).toBe(15);
});
