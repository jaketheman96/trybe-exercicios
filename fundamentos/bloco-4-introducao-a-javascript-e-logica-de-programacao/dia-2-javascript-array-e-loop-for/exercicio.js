/* 1- imprimir valor do array */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

/* 2- Somar todos os valores do array e imprimir resultado */
let soma = 0;

for (let index = 0; index < numbers.length; index++) {
    soma = soma + numbers[index];
}
console.log(soma);

