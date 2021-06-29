export const uniqueSum = (arr) => [...new Set(arr)].reduce((acc, num) => acc + num, 0);
