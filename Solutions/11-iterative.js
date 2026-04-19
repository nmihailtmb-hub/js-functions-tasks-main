const smallestDivisor = (num) => {
  if (num === 1) return 1;
  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0) return i;
  }
  return num;
};

export default smallestDivisor;