// Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. 
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.


const openButton = document.getElementById('open');
const closedButton = document.getElementById('closed');
const modalWindow = document.querySelector('.modal');

openButton.addEventListener('click', function() {
  if (modalWindow.classList.contains('open-window')) {
    modalWindow.classList.remove('open-window');
  } else {
    modalWindow.classList.add('open-window');
  }
});

closedButton.addEventListener('click', function() {
  modalWindow.classList.remove('open-window');
});


// Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const buttonTurn = document.querySelector('.btn-turn');
const lightGreen = document.querySelector('.green');
const lightYellow = document.querySelector('.yellow');
const lightRed = document.querySelector('.red');

let currentColor = lightGreen;

buttonTurn.addEventListener('click', function() {
  switch (currentColor) {
    case lightGreen:
      currentColor = lightYellow;
      lightGreen.style.opacity = '0.2';
      lightYellow.style.opacity = '1';
      break;
    case lightYellow:
      currentColor = lightRed;
      lightYellow.style.opacity = '0.2';
      lightRed.style.opacity = '1';
      break;
    case lightRed:
      currentColor = lightGreen;
      lightRed.style.opacity = '0.2';
      lightGreen.style.opacity = '1';
      break;
    default:
      break;
  }
});


