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



