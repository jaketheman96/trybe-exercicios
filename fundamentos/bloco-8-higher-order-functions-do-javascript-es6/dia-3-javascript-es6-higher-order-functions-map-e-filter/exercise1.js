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

/* 1 */
const arrayBooks = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

// console.log(arrayBooks);

/* 2 */
function nameAndAge() {
  return books.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  })
  )
    .sort((a, b) => a.age - b.age); /* ordena ages do objeto criado */
};
// console.log(nameAndAge());

/* 3 */
function fantasyOrScienceFiction() {
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
};
// console.log(fantasyOrScienceFiction());

/* 4 */
function oldBooksOrdered() {
  return books.filter((book) => (book.releaseYear < 1962)).sort((a, b) => (a.releaseYear - b.releaseYear));
};
// console.log(oldBooksOrdered());

/* 5 */
function fantasyOrScienceFictionAuthors() {
  const gêneros = ['Fantasia', 'Ficção Científica'];
  return books.filter((book) => gêneros.includes(book.genre)).map((book) => book.author.name).sort();
};
// console.log(fantasyOrScienceFictionAuthors());
// função includes determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

/* 6 */
function oldBooks() {
  const currentYear = new Date().getFullYear();/* seleciona o ano atual */
  return books.filter((book) => ((currentYear - book.releaseYear) > 60)).map((book) => book.name);
};
// console.log(oldBooks());

/* 7 */
function authorWith3DotsOnName() {
  return books.filter((book) => book.author.name.includes('J. R. R.')).map((book) => book.name);
};
console.log(authorWith3DotsOnName());
/* Função includes certifica a informação dentro do parênteses) */