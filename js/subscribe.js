const orderBtn = document.getElementById('orderBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

orderBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
