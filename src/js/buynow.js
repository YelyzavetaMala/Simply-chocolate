const buynowBtn = document.getElementById('buynowBtn');
const buynowPopup = document.getElementById('buynowPopup');
const buynowClose = document.getElementById('buynowClose');

buynowBtn.addEventListener('click', () => {
  buynowPopup.style.display = 'flex';
  document.body.classList.add('noscroll');
});

buynowClose.addEventListener('click', () => {
  buynowPopup.style.display = 'none';
  document.body.classList.remove('noscroll');
});
