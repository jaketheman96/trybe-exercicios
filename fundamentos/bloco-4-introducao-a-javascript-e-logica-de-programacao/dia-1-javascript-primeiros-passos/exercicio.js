const a = 28;
const b = 52;
const c = 89;

/* 1- */
/* Adição */
let adicao = a + b;

/* Subtração */
let subtracao = a - b;

/* Multiplicação */
let multiplicacao = a * b;

/* Divisão */
let divisao = a / b;

/* Módulo */
let modulo = a % b;

/* 2- Retornando o maior valor entre dois numeros */
if (a > b) {
    console.log(a);
}
else if (a < b) {
    console.log(b);
}

/* 3- Retornando o maior de três números */
if (a > b && a > c) {
    console.log(a);
}
else if (b > a && b > c) {
    console.log(b);
}
else if (c > a && c > b) {
    console.log(c);
}

/* 4- Retornar positivo ou negativo */
if (c > 0) {
    console.log("positive");
}
else if (c < 0) {
    console.log("negative");
}
else {
    console.log("zero");
}

/* 5- três angulos internos de um triangulo */
const ladoUm = 80;
const ladoDois = 20;
const ladoTres = 80;

if (ladoUm + ladoDois + ladoTres == 180) {
    console.log("É um triângulo")
}
else {
    console.log("Não é um triangulo")
}

/* 6- Peça de Xadrez */
let peçaXadrez = "rei";

if (peçaXadrez = "rei") {
    console.log("Peça: " + peçaXadrez.toLocaleUpperCase() + " / " + "Direção: " + "1 passo horizontal, vertical ou diagonal");
} else {
    console.log("ainda não temos informação dessa peça.")
}

