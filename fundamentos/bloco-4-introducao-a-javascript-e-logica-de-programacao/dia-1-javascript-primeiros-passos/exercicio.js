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

/* 7- Conversão de nota para porcentagem */
let nota = 9999;

if (nota >= 90 && nota == 100) {
    console.log("Parabéns, você tirou um A!");
} else if (nota >= 80 && nota < 90) {
    console.log("Parabéns, você tirou um B!");
} else if (nota >= 70 && nota < 80) {
    console.log("Parabéns, você tirou um C!");
} else if (nota >= 60 && nota < 70) {
    console.log("Vish, estude um pouco mais, você tirou um D.");
} else if (nota >= 50 && nota < 60) {
    console.log("Vish, estude um pouco mais, você tirou um E.");
} else if (nota < 50) {
    console.log("Vish, você tirou um F.");
} else if (nota < 0 || nota > 100) {
    console.log("FATAL ERROR!!!!")
}

/* 8- Retornar true se um dos 3 números for par. */
const x = 23;
const y = 28;
const z = 35;

if (x%2 == 0 || y%2 == 0 || z%2 == 0) {
    console.log("True");
} else {
    console.log("False");
}