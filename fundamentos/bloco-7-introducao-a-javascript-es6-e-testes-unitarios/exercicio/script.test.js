const sum = require('./script');

test('Deverá somar os dois valores', () => {
  expect(sum(4, 5)).toBe(9);
}); 