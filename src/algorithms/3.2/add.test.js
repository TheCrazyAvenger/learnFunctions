import { addOne } from './add';

test('Прибавить 1 (замыкание)', () => {
  expect(addOne(4)).toBe(5);
  expect(addOne()).toBe(1);
});
