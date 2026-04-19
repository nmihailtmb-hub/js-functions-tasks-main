const takeLast = (str, n) => {
  if (str.length < n) return null;
  return str.slice(-n).split('').reverse().join('');
};

const run = (str) => takeLast(str, 4);

export default run;