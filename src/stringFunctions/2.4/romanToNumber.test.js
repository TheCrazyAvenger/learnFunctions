import { romanToNumber } from './romanToNumber';

test('Декодирование римских цифр', () => {
  expect(romanToNumber('XXI')).toBe(21);
  expect(romanToNumber('I')).toBe(1);
  expect(romanToNumber('IV')).toBe(4);
  expect(romanToNumber('MMVIII')).toBe(2008);
  expect(romanToNumber('MDCLXVI')).toBe(1666);
});
