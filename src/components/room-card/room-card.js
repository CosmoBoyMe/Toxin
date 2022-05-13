import Swiper, { Navigation, Pagination } from 'swiper';
import wNumb from 'wnumb';

import 'swiper/css';

new Swiper('.card__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  pagination: {
    el: '.card__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'card__pagination-bullet',
    bulletActiveClass: 'card__pagination-bullet_active',
  },
  navigation: {
    nextEl: '.card__btn_next',
    prevEl: '.card__btn_prev',
  },
});

const cardEls = document.querySelectorAll('.card');
cardEls.forEach((cardEl) => {
  const cardPriceEl = cardEl.querySelector('.card__description-header-value');

  const priceFormat = wNumb({
    thousand: ' ',
    suffix: '₽',
  });

  const formatedCardPriceValue = priceFormat.to(Number(cardPriceEl.textContent));
  cardPriceEl.textContent = formatedCardPriceValue;
});
