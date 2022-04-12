const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  };
};

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(compare);
function compare(a, b) {
  return a - b;
}
console.log(oddsAndEvens);

/* parte 2 */

/* 1 */

const factorial = num => (num == 1 || num == 0) ? 1 : (num - 1) * num;
//   if (num == 1 || num == 0) {
//     return 1;
//   }
//   return factorial(num - 1) * num;
// }
console.log(factorial(20));

/* 2 */

let phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const getWord = () => {
  let words = phrase.split(" ");
  let biggerWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > biggerWord.length) {
      biggerWord = words[i];
    }
  };
  return biggerWord;
};
console.log(getWord(phrase));

/* 3 */

let contador = 0;

function counteringClick() {
  contador++;
  document.getElementById('display').innerHTML = ` ${contador} `;
};