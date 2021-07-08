1. Array

1.1. Усредненная сумма массивов [очень просто]
https://www.codewars.com/kata/56d5166ec87df55dbe000063
Написать функцию sumAverage(arr), где arr - это массив, который состоит из массивов,
заполненных числами, например:
sumAverage([[1, 2, 2, 1], [2, 2, 2, 1]]);

1. Вычислить среднее арифметическое каждого массива
2. Сложить все средние арифметические
3. Округлить в меньшую сторону

1.2. Сумма трех максимальных значений [очень просто]
https://www.codewars.com/kata/5aa1bcda373c2eb596000112
Написать функцию maxTripletSum(arr), где arr - это массив, который состоит из чисел,
например:
maxTripletSum([3, 2, 6, 8, 2, 3])

1. Найти три максимальных элемента (дубликаты игнорируются), в данном
   примере это 6, 8 и 3
2. Вычислить их сумму

1.3. Сортировка к максимальному значению [просто]
https://www.codewars.com/kata/56121f3312baa28c8500005b
Написать функцию biggest(nums), которая принимает в качестве аргумента массив
чисел и возвращает строковое значение максимально возможной комбинации:

1. [1, 2, 3] -> “321”
2. [3, 30, 34, 5, 9] -> “9534330”

1.4. Комбинации сдвига [просто]
https://www.codewars.com/kata/557592fcdfc2220bed000042
Написать функцию pattern(amount), которая создает нижеописанные паттерны от 1 до
числа amount, производит сдвиг и возвращает массив всех возможных комбинаций:
pattern(3) ->
[
“123”,
“231”,
“312”,
]
pattern(5): ->
[
“12345”,
“23451”,
“34512”,
“45123”,
“51234”,
]

1.5. Арифметическая последовательность - сумма из n элементов
[просто]
https://www.codewars.com/kata/55cb0597e12e896ab6000099
Написать функцию arithmeticSequenceSum(a, r, n), которая возвращает первых (n)
элементов последовательности, в которой каждый элемент является суммой
заданного целого числа (a) и количества вхождений данного целого числа (r),
основываясь на положении элемента в последовательности. Пример:
arithmeticSequenceSum(2, 3, 5)
// a = 2, r = 3, n = 5
1 2 3 4 5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r)
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40

1.6. Диагональная сумма матрицы [просто]
Написать функцию diagonalSum, которая возвращает сумма значений элементов по
диагонали с левого верхнего угла в нижний правый угол.
array = [
[1, 2]
[3, 4]
];
diagonalSum(array) = 5 // (1 + 4)
array = [
[5, 9, 1, 0],
[8, 7, 2, 3],
[1, 4, 1, 9],
[2, 3, 8, 2],
];
diagonalSum(array) = 15 // 5 + 7 + 1 + 2

2. String functions

2.1. Машиночитаемые имена [очень просто]
No link
Написать функцию toMachineName(name, separator), где name - это строка, которая
должна быть преобразована в kebab-case строку, а separator - это символ
разделитель. Результатом работы функции должна быть строка в нижнем регистре,
состоящая из букв латинского алфавита или цифр (не может быть в первой позиции)
без дубликатов символов сепаратора.
Примеры (в качестве разделителя выбран “-”):

1. “Hello, my name is Andrew” -> “hello-my-name-is-andrew”
2. “Lorem ipsum sit DOLOR” -> “lorem-ipsum-sit-dolor”
3. “3 basics and 1 advance” -> “basics-and-1-advance”

2.2. Валютный формат [просто]
https://www.codewars.com/kata/54ad586282bc65b7ec000182
Написать функцию formatCurrency(amount), которая будет преобразовывать число (или
строковое представление числа) в следующий формат: тысячи, миллионы, миллиарды
разделяются запятой, дробная часть отделяется точкой, причем она округляется до
сотых долей в меньшую сторону. Примеры:

1. 2546.2562 -> “2,546.25”
2. “1500.342626” -> “1,500.34”
3. 100.2134 -> “100.21”

2.3. Алфавитизация [очень просто]
https://www.codewars.com/kata/5970df092ef474680a0000c9
Написать функцию alphabetized(text), сортирующую строку в алфавитном порядке.
Пробелы и символы пунктуации должны быть исключены. Примеры:

1. “The Holy Bible.” -> “BbeehHilloTy”
2. “Hello!!!!!!!!!!!!!!!!!!!!!!” -> “eHllo”

2.4. Декодирование римских цифр [просто]
https://www.codewars.com/kata/51b6249c4612257ac0000005
Написать функцию romanToNumber(number), которая принимает в качестве аргумента
строку с римским представлением числа, а возвращает десятичное числовое
значение. Примеры:

1. “I” -> 1
2. “C” -> 100
3. “CI” -> 101
4. “XXI” -> 21

2.5. Счетчик дубликатов [просто]
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
Написать функцию countDuplicates(text), которая будет возвращать количество
символов, имеющих дубликаты (не чувствительна к регистру). Примеры:

1. “abcde” -> 0
2. “aabbcde” -> 2 (“a” имеет дубликат, “b” тоже имеет дубликат)
3. “aabBcde” -> 2 (так как функция не чувствительна к регистру и “b” и “B” для нее
   один и тот же символ)
4. “indivisibility” -> 1 (так как “i” повторяется 7 раз)
5. “aA11” -> 2 (“1” - тоже символ, который имеет дубликат)

2.6. Замена букв на их позиции [просто]
https://www.codewars.com/kata/546f922b54af40e1e90001da
Написать функцию replaceWithAlphPositions, которая заменяет буквы на их позиции в
алфавите (“a” = 1, “b” = 2 и так далее). Все остальные символы игнорируются.
Примеры:

1. “The sunset sets at twelve o’clock.” -> “20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20
   23 5 12 22 5 15 3 12 15 3 11”

2. Algorithms and functional programming

3.1. Сведение и сортировка массива [очень просто]
https://www.codewars.com/kata/57ee99a16c8df7b02d00045f
Написать функцию flattenAndSort(arr), которая принимает в качестве аргумент
двумерный массив, состоящих из чисел. Функция возвращает отсортированный
сведенный одномерный массив. Пример:
[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]] => [1, 2, 3, 4, 5, 6, 7, 8, 9]

3.2. Функциональное сложение [просто]
https://www.codewars.com/kata/538835ae443aae6e03000547
Написать функцию add(n), которая возвращает функцию, добавляющую n к любому
числу. Примеры:
const addOne = add(1);
addOne(3); // 4
const addThree = add(3);
addThree(3); // 6

3.3. Умножение всех элементов массива [просто]
https://www.codewars.com/kata/586909e4c66d18dd1800009b
Написать функцию multiplyAll(arr), которая принимает массив чисел в качестве
аргумента и возвращает функцию, которая принимает множитель и возвращает новый
массив, элементы которого умножены на множитель. Примеры:
multiplyAll([1, 2, 3])(2) -> [2, 4, 6];

3.4. Сумма уникальных значений [просто, имеет различные
решения]
https://www.codewars.com/kata/56b1eb19247c01493a000065
Написать функцию uniqueSum(arr), которая получает массив чисел и возвращает
сумму элементов, причем если одно из чисел уже было суммировано, оно
игнорируется. Примеры:
[1, 2, 3] -> 6
[1, 3, 8, 1, 8] -> 12 // 1 и 8 встречаются дважды, следовательно их прибавлять надо
только один раз
[-1, -1, 5, 2, -7] -> -1
[] -> 0

3.5. Reduce [просто +]
Написать функцию reduce(arr, callback, initialValue), который принимает три аргумента
и работает подобно Array.prototype.reduce: список array, функцию отложенного вызова,
которая принимает аккумулированное значение и текущий элемент (callback) и
значение по-умолчанию initialValue. Примеры:
reduce(
[1, 2, 3, 4],
(acc, value) => acc \* value,
1,
) -> 24

3.6. Функциональная композиция [не просто]
https://www.codewars.com/kata/5655c60db4c2ce0c2e000026
Написать функцию compose, которая принимает функции в качестве аргументов.
Compose должна вернуть функцию, которая принимает один аргумент, который
должен быть применен ко всем аргументам compose, пример:
const compose = (f, g, h) => (a) => f(g(h(a)));

4. Функции высшего порядка

4.1. Распаковка аргументов [просто]
https://www.codewars.com/kata/540de1f0716ab384b4000828
Написать функцию spread(callback, arr), которая принимает в качестве аргументов
функцию callback и массив аргументов, после чего производит вызов функции с
переданными аргументами и возвращает результат.
spread(fn, [1, true]) -> fn(1, true);

4.2. ZipWith [просто +]
https://www.codewars.com/kata/zipwith/train/javascript
Написать функцию zipWith(fn, a0, a1), которая принимает в качестве аргументов
функцию и два массива, применяя функцию к каждой паре значений. zipWith должна
вернуть массив значений. Если длина массивов отличается, используется длина
меньшего.
zipWith(Math.pow, [10,10,10,10], [0,1,2,3]) => [1,10,100,1000]
zipWith(Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1]) => [4,7,7,4,7,7]

5. Рекурсия

5.1. Сумма последовательности [просто]
https://www.codewars.com/kata/586f6741c66d18c22800010a
Написать функцию sequenceSum(begin, end, step), которая возвращает сумму
последовательности. Если begin больше end, должен вернуться ноль. Примеры:

- sequenceSum(2, 2, 2) -> 2
- sequenceSum(2, 6, 2) -> 12 // 2 + 4 + 6
- sequenceSum(1, 5, 1) -> 15 // 1 + 2 + 3 + 4 + 5
- sequenceSum(1, 5, 3) -> 5 // 1 + 4

  5.2. Связанный список в строку [просто]
  https://www.codewars.com/kata/582c297e56373f0426000098
  Написать функцию stringify(list), которая принимает в качестве аргументов экземпляр
  класса Node (описан ниже):
  class Node {
  constructor(data, next = null) {
  this.data = data;
  this.next = next;
  }
  }
  Примеры:

- stringify(new Node(1, new Node(2, new Node(3)))) -> ‘1 -> 2 -> 3 -> null’;
- stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))) -> ‘0
  -> 1 -> 4 -> 9 -> 16 -> null’.

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

7. Сортировка

7.1. Сортированный список объектов [очень просто]
https://www.codewars.com/kata/52705ed65de62b733f000064
Написать функцию, сортирующую массив объектов по указанному полю в убывающем
порядке. Функция принимает в качестве аргументов list и sortBy. List является
массивом объектов, например:
[
{"a": 1, "b": 3},
{"a": 3, "b": 2},
{"a": 2, "b": 40},
{"a": 4, "b": 12}
]
Если sortBy равен “a”, то результатом работы функции должен быть следующий
массив:
[
{"a": 4, "b": 12},
{"a": 3, "b": 2},
{"a": 2, "b": 40},
{"a": 1, "b": 3}
]
