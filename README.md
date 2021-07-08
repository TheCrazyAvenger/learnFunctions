6. Классы и паттерны

6.1. Singleton [просто]
https://www.codewars.com/kata/534fcca5edb124cfe6000f60
Написать класс Singleton (ES5 или ES6), который позволяет породить только один
экземпляр. При повторной попытке породить новый экземпляр, должен вернуться
первый. Примеры:
const o1 = new Singleton();
const o2 = new Singleton();
console.log(o1 === o2); // true
o1.name = ‘Singleton’;
console.log(o2.name); // ‘Singleton’;

6.2. Расширение String [просто]
https://www.codewars.com/kata/53d628de83db278fb1000710
Расширить String таким образом, чтобы у строк появился новый метод
customUpperCase, работающий аналогично toUpperCase. Примеры:

- ‘abc’.customUpperCase() -> ‘ABC’
- ‘Hello, world!’ -> ‘HELLO, WORLD!’
