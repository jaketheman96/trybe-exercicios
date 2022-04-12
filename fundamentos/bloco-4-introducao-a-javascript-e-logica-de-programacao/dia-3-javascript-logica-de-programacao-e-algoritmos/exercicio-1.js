/* Com base nessas informações, crie um algoritmo que retorne o fatorial de 10. */

let num1 = 10;
let resultado = num1;

for (let i = 1; i < num1; i++) {
    resultado *= i;
}
console.log(resultado);

/*  Agora, desenvolva um algoritmo que é capaz de inverter uma palavra */

let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// let word = 'tryber';
// let reverseWord = '';

// reverseWord = word.split('').reverse().join('');

// console.log(reverseWord);

/* Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i].length > maiorPalavra.length) {
      maiorPalavra = array[i];
    }
}
for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < menorPalavra.length) {
    menorPalavra = array[index];
  }
}
console.log(maiorPalavra);
console.log(menorPalavra);


/* escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);