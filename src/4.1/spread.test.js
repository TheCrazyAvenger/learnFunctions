import { spread } from './spread';

test('Распаковка аргументов', () => {
  expect(spread((x, y) => x + y, [1, 2])).toBe(3);
  expect(spread((x) => x === 5, [5])).toBe(true);
});
