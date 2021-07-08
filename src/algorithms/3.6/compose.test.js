import { compose } from './compose';

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

test('Функциональная композиция', () => {
  expect(compose(multTwo, addOne)(5)).toBe(12);
  expect(compose(addOne)(3)).toBe(4);
  expect(compose(addOne, multTwo, addOne, addOne)(2)).toBe(9);
  expect(compose()(10)).toBe(10);
});
