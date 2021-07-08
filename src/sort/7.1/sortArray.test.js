import { sortArray } from './sortArray';

test('Сортировака по заданному полю', () => {
  expect(
    sortArray(
      [
        { a: 1, b: 3 },
        { a: 3, b: 2 },
        { a: 2, b: 40 },
        { a: 4, b: 12 },
      ],
      'a'
    )
  ).toStrictEqual([
    { a: 4, b: 12 },
    { a: 3, b: 2 },
    { a: 2, b: 40 },
    { a: 1, b: 3 },
  ]);
  expect(
    sortArray(
      [
        { a: 1, b: 3 },
        { a: 3, b: 2 },
        { a: 2, b: 40 },
        { a: 4, b: 12 },
      ],
      'b'
    )
  ).toStrictEqual([
    { a: 2, b: 40 },
    { a: 4, b: 12 },
    { a: 1, b: 3 },
    { a: 3, b: 2 },
  ]);
});
