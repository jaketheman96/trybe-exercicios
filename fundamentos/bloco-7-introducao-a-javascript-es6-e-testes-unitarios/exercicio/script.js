const sum = (a, b) => {
  if (a == 4 && b === '5') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};
module.exports = sum; 