export const reduce = (arr, callback, initialValue) => {
  let result = 0;

  if (!initialValue) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (i === 0) {
        result = callback(arr[i], arr[i + 1]);
      } else {
        result = callback(result, arr[i + 1]);
      }
    }
  } else {
    for (let i = -1; i < arr.length - 1; i++) {
      if (i === -1) {
        result = callback(initialValue, arr[i + 1]);
      } else {
        result = callback(result, arr[i + 1]);
      }
    }
  }
  return result;
};
