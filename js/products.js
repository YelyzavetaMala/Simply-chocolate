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
    375: { slidesPerView: 1, spaceBetween: 18 },
    768: { slidesPerView: 2.5, spaceBetween: 18 },
    1200: { slidesPerView: 4, spaceBetween: 18 },
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

const swiper = new Swiper('.swiper-gallery-init', swiperParams);
