String.prototype.customUpperCase = function () {
  return this.toUpperCase();
};

test('Кастомный toUpperCase', () => {
  expect('abc'.customUpperCase()).toBe('ABC');
  expect('Hello, world!'.customUpperCase()).toBe('HELLO, WORLD!');
});
