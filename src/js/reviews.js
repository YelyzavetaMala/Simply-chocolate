import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperParams = {
  modules: [Pagination, Navigation, Scrollbar, Keyboard, Mousewheel],

  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 14 },
    768: { slidesPerView: 2, spaceBetween: 14 },
    1200: { slidesPerView: 3.03, spaceBetween: 26 },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  keyboard: {
    enabled: true,
  },

  mousewheel: true,
};

const swiper = new Swiper('.swiper-review-init', swiperParams);

const orderBtn = document.getElementById('reviewBtn');
const popup = document.getElementById('reviewPopup');
const closePopup = document.getElementById('reviewClose');

orderBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  document.body.classList.add('noscroll');
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  document.body.classList.remove('noscroll');
});
