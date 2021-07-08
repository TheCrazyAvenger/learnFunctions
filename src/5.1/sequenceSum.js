export const sequenceSum = (begin, end, step, nextStep = begin, result = begin) => {
  if (begin > end) return 0;
  else {
    nextStep += step;
    if (nextStep > end) return result;
    result += nextStep;
    return sequenceSum(begin, end, step, nextStep, result);
  }
};
