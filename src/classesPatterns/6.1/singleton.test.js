import { Singleton } from './singleton';

const singleton = () => {
  const s1 = new Singleton();
  const s2 = new Singleton();

  s1.name = 'Singleton';
  return s2.name;
};

test('Singleton', () => {
  expect(singleton()).toBe('Singleton');
});
