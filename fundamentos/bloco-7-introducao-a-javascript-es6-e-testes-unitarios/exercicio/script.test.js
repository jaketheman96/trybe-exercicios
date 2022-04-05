const sum = require('./script');

test('Deverá somar os dois valores', () => {
  expect(sum(4, 5)).toBe(9);
}); 

test('Deverá somar os dois valores', () => {
  expect(sum(0, 0)).toBe(0);
}); 

test('Teste que não aceita o numero 4 e strings', () => {
  expect(() => {sum(4, '5')}).toThrow();
});

test('Testa se a mensagem de erro é "parameters must be numbers"', () => {
  expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
});