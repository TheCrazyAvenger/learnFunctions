export const replaceWithAlphPositions = (text) =>
  [...text]
    .map((letter) => parseInt(letter, 36) - 9)
    .filter((num) => num >= 0)
    .join(' ');
