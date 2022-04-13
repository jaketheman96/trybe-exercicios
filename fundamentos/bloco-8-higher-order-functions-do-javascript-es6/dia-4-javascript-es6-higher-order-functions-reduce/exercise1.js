/* 1 */
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}
// console.log(flatten());
// function concat, para concatenar as infos em uma array.

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

/* 2 */
function reduceNames() {
  const reduceBooks = books.reduce((acc, book, index, array) => index === array.length - 1 ? `${acc} ${book.author.name}.` : `${acc} ${book.author.name},` , '');
  return reduceBooks;
}
// console.log(reduceNames());
// condicional ternary operator utilizado para adicionar a "." na última posição do array e "," nos restantes

/* 3 */
function averageAge() {
  const numberOfBooks = books.length
  const idade = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0);/* soma de todas as idades dos autores. */
  return idade / numberOfBooks;
};
// console.log(averageAge());

/* 4 */
function longestNamedBook() {
  return books.reduce((currentBook, biggestBook) => {
    if (currentBook.name > biggestBook.name.length){
      return currentBook;
    }
    return biggestBook;
  });
};
console.log(longestNamedBook());