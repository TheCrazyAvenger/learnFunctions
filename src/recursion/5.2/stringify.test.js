import { stringify } from './stringify';

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
test('Связанный список в строку', () => {
  expect(stringify(new Node(1, new Node(2, new Node(3))))).toBe('1 -> 2 -> 3 -> null');
  expect(stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16))))))).toBe(
    '0 -> 1 -> 4 -> 9 -> 16 -> null'
  );
  expect(stringify(null)).toBe('null');
});
