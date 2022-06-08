import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css'; // eslint-disable-line import/no-unresolved

class RoomCard {
  constructor(element) {
    const cardPriceEl = element.querySelector('.js-card-header-info__value');
    const ratingEl = element.querySelector('.js-rating');
    this.elements = {
      cardPriceEl,
      ratingEl,
      element,
    };
    this.init();
  }

  bindEventListeners() {
    const { ratingEl } = this.elements;
    ratingEl.addEventListener('click', (event) => event.preventDefault());
  }

  // eslint-disable-next-line class-methods-use-this
  initSwiper() {
    // eslint-disable-next-line no-new
    new Swiper('.room-card__slider', {
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
  }

  init() {
    this.bindEventListeners();
    this.initSwiper();
  }
}

export { RoomCard };
