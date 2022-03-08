/* 1- imprimir valor do array */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/* 2- Somar todos os valores do array e imprimir resultado */
let soma = 0;

for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}
console.log(soma);

/* 3- Calcule a média aritmética dos valores do array */
let média = 0;

for (let i = 0; i < numbers.length; i++) {
    média = soma / numbers.length;
}
console.log(média);