'use strict';

const modalContent = document.querySelector('.modal');
const overlayContent = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');
const modalSelectorBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < modalSelectorBtns.length; i++) {
  modalSelectorBtns[i].addEventListener('click', openModal);
}

const closeModal = function () {
  modalContent.classList.add('hidden');
  overlayContent.classList.add('hidden');
};

closeModalButton.addEventListener('click', closeModal);
overlayContent.addEventListener('click', closeModal);
document.addEventListener('keydown', function (keyPressEvent) {
  if (
    keyPressEvent.key === 'Escape' &&
    !modalContent.classList.contains('hidden')
  ) {
    closeModal();
  }
});

function openModal() {
  modalContent.classList.remove('hidden');
  overlayContent.classList.remove('hidden');
}
