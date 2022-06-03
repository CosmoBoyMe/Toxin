import Swiper, { Navigation, Pagination } from 'swiper';
import wNumb from 'wnumb';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.room-card__slider', {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  pagination: {
    el: '.js_room-card__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'js-room-card__pagination-bullet',
    bulletActiveClass: 'js-room-card__pagination-bullet_active',
  },
  navigation: {
    nextEl: '.js-room-card__btn-next',
    prevEl: '.js-room-card__btn-prev',
  },
});

const cardElements = document.querySelectorAll('.js-room-card');
cardElements.forEach((element) => {
  const cardPriceEl = element.querySelector('.js-room-card__description-header-value');

  const priceFormat = wNumb({
    thousand: ' ',
    suffix: '₽',
  });
  const formattedCardPriceValue = priceFormat.to(Number(cardPriceEl.textContent));
  cardPriceEl.textContent = formattedCardPriceValue;
  const ratingEl = element.querySelector('.js-rating');
  ratingEl.addEventListener('click', (event) => event.preventDefault());
});
