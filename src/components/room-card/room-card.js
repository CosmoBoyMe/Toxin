import Swiper, { Navigation, Pagination } from 'swiper';
import wNumb from 'wnumb';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.card__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  pagination: {
    el: '.js_card__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'js-card__pagination-bullet',
    bulletActiveClass: 'js-card__pagination-bullet_active',
  },
  navigation: {
    nextEl: '.js-card__btn-next',
    prevEl: '.js-card__btn-prev',
  },
});

const cardEls = document.querySelectorAll('.js-card');
cardEls.forEach((cardEl) => {
  const cardPriceEl = cardEl.querySelector('.js-card__description-header-value');

  const priceFormat = wNumb({
    thousand: ' ',
    suffix: '₽',
  });

  const formatedCardPriceValue = priceFormat.to(Number(cardPriceEl.textContent));
  cardPriceEl.textContent = formatedCardPriceValue;
});
