import { alphabetized } from './alphabetized';

test('Сортировка строки в алфавитном порядке', () => {
  expect(alphabetized('The Holy     Bible.')).toBe('BbeehHilloTy');
  expect(alphabetized('Hello!!!!!!!!!!!!!!!!!!!!!')).toBe('eHllo');
});
