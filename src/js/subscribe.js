const orderBtn = document.getElementById('orderBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

orderBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  document.body.classList.add('noscroll');
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.classList.remove('noscroll');
});
