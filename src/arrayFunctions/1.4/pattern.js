export const pattern = (n) =>
  new Array(n)
    .fill(null)
    .reduce((acc, _, i) => {
      acc[i] = i + 1;
      return acc;
    }, [])
    .reduce((acc, _, i, arr) => {
      acc.push(arr.slice(i, arr.length).join('') + arr.slice(0, i).join(''));

      return acc;
    }, [])
    .join('\n');
