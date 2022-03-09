/* 1- imprimir valor do array */
let numbers = [4, 22, 2, 18, 70, 8, 100, 2, 38, 28];

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

/* 4- imprimir caso o valor for maior ou menor que 20 */
if (média >= 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

/* 5- maior valor contido no array */
let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log(maior);
/* Trecho do código retirado aqui --> https://pt.stackoverflow.com/questions/35202/como-saber-o-maior-valor-de-um-array */

/* 6- Descobrir valores impares no array e imprimir */
let impar = 0;
let par = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impar++
    } else {
        par++
    }
}
if (impar > 0) {
    console.log("Temos " + impar + " " + "números ímpares!");
    console.log("Temos " + par + " " + "números pares!");
}
else {
    console.log("Não há ímpar");
}

/* 7- Menor valor contido no array */
let menor = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log("o menor número da array é " + menor);