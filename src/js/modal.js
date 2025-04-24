const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modalBackdrop');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');
const listItems = document.querySelectorAll('.modal-item');

openModalBtn.onclick = function () {
  modal.classList.add('active');
  modalBackdrop.classList.add('active');
  modalBackdrop.style.display = 'block';
  document.body.classList.add('body-no-scroll');
};

function closeModal() {
  modal.classList.remove('active');
  modalBackdrop.classList.remove('active');
  document.body.classList.remove('body-no-scroll');

  // затримка для завершення анімації
  setTimeout(() => {
    modalBackdrop.style.display = 'none';
  }, 300);
}

closeModalBtn.onclick = closeModal;
modalBackdrop.onclick = closeModal;

listItems.forEach(item => {
  item.onclick = closeModal;
});
