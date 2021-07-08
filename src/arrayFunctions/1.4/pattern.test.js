import { pattern } from './pattern';

test('Комбинация сдвига', () => {
  expect(pattern(7)).toBe('1234567\n2345671\n3456712\n4567123\n5671234\n6712345\n7123456');
  expect(pattern(1)).toBe('1');
  expect(pattern(0)).toBe('');
});
