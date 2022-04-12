const myFizzBuzz = require('./myFizzBuzz');

describe('Testando a função myFizzBuzz', () => {
  test('1- Deverá retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  test('2- Deverá retornar fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  test('3- Deverá retornar buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  test('4- Deverá retornar o próprio número', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  test('4- Deverá retornar false', () => {
    expect(myFizzBuzz(isNaN)).toBe(false);
  });

});