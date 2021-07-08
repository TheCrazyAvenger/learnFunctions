export const countDuplicates = (text) =>
  text
    .toLowerCase()
    .split('')
    .reduce((acc, item, i, arr) => {
      const findDupl = arr.find((currentItem, currentIndex) => {
        if (item === currentItem && i !== currentIndex) return currentItem;
      });
      findDupl && acc.add(findDupl);
      return acc;
    }, new Set([])).size;
