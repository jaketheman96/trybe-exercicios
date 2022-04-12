function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* 1 */
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfCalendar() {
  let unordererList = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i++) {
    let lista = dezDaysList[i];
    let listaElement = document.createElement('li');
    lista.className = 'day';
    if (lista === 24 && lista === 25 && lista === 31) {
      unordererList.appendChild(listaElement);
      listaElement.className = 'day holiday';
      listaElement.innerHTML = lista;
    } else if (lista === 4 && lista === 11 && lista === 18 && lista === 25) {
      unordererList.appendChild(listaElement);
      listaElement.classname = 'day friday';
      listaElement.innerHTML = lista;
    } else if (lista === 25) {
      unordererList.appendChild(listaElement);
      listaElement.classname = 'day holiday friday';
      listaElement.innerHTML = lista;
    } else {
      unordererList.appendChild(listaElement);
      listaElement.classname = 'day';
      listaElement.innerHTML = lista;
    }
  };
};
daysOfCalendar();
