/* 1 */
console.log('Exercicio 1:');
console.log(' ');

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vinda, ' + info.personagem);

/* 2 */
console.log(' ');
console.log('Exercicio 2: ');
console.log(' ');

info['recorrente'] = 'Sim';

console.log(info)

/* 3 */
console.log(' ');
console.log('Exercicio 3: ');
console.log(' ');

for (let index in info) {
  console.log(index);
}

/* 4 */
console.log(' ');
console.log('Exercicio 4: ');
console.log(' ');

for (let index in info) {
  console.log(info[index]);
}

/* 5 */
console.log(' ');
console.log('Exercicio 5: ');
console.log(' ');

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

/* 6 */
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

/* 7 */
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})

/* 8 */
if (leitor.livrosFavoritos.length === 1) {
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livro favorito.');
} else {
  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')
}

/* Exercícios funções */
/* 1 */
function verificaPalindrome(word) {
  for (index in word) {
    if (word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}
console.log(verificaPalindrome('arara'));
console.log(verificaPalindrome('desenvolvimento'));

/* 2 */
function maiorValor(array) {
  let maiorValor = 0;
  for (let index in array) {
    if (array[maiorValor] < array[index]) {
      maiorValor = index;
    }
  }
  console.log(maiorValor);
}
maiorValor([2, 3, 6, 7, 10, 1]);

/* 3 */

function menorValor(array) {
  let menorValor = 0;
  for (let index in array) {
    if (array[menorValor] > array[index]) {
      menorValor = index;
    }
  }
  console.log(menorValor);
}
menorValor([2, 3, 6, 7, 10, 1]);

