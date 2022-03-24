window.onload;
let submit = document.querySelector('#submit-button');
let allTheInfos = document.getElementById('word');
let inputValue = document.querySelector('.paragrafo');
submit.addEventListener('click', submitDefault);

function submitDefault(event) {
    event.preventDefault();
    inputValue.innerHTML = allTheInfos.value; /* adicionar o valor dos inputs à tag <p></p> */
};

let clearButton = document.querySelector('.clearButton');
let inputs = document.getElementsByTagName('input');
clearButton.addEventListener('click', clearBox);

function clearBox() {
    for (let i = 0; i < inputs.length; i++) {
        inputs.value = '';
    };
};
 