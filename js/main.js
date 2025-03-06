const swiperParams = {
  // Модулі можна підключити через `Swiper` без необхідності імпортувати їх окремо
  breakpoints: {
    375: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2.5, spaceBetween: 18 },
    1440: { slidesPerView: 4, spaceBetween: 18 },
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

// Ініціалізація Swiper з параметрами
const swiper = new Swiper('.swiper-gallery-init', swiperParams);
