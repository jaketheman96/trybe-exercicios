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
