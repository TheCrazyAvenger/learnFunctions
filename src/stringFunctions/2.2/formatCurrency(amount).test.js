import { formatCurrency } from './formatCurrency(amount)';

test('Валютный формат', () => {
  expect(formatCurrency(2546.2562)).toBe('2,546.25');
  expect(formatCurrency('1500.342626')).toBe('1,500.34');
  expect(formatCurrency(100.2134)).toBe('100.21');
  expect(formatCurrency(1234567890)).toBe('1,234,567,890');
});
