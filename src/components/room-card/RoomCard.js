import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css'; // eslint-disable-line import/no-unresolved

class RoomCard {
  constructor(element) {
    const cardPriceElement = element.querySelector('.js-card-header-info__value');
    const ratingElement = element.querySelector('.js-rating');
    this.elements = {
      cardPriceElement,
      ratingElement,
      element,
    };
    this.init();
  }

  bindEventListeners() {
    const { ratingElement } = this.elements;
    ratingElement.addEventListener('click', (event) => event.preventDefault());
  }

  // eslint-disable-next-line class-methods-use-this
  initSwiper() {
    // eslint-disable-next-line no-new
    new Swiper('.room-card__slider', {
      modules: [Navigation, Pagination],
      slidesPerView: 'auto',
      pagination: {
        el: '.js-room-card__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: 'room-card__pagination-bullet js-room-card__pagination-bullet',
        bulletActiveClass: 'room-card__pagination-bullet_active',
      },
      navigation: {
        nextEl: '.js-room-card__button-next',
        prevEl: '.js-room-card__button-prev',
      },
    });
  }

  init() {
    this.bindEventListeners();
    this.initSwiper();
  }
}

export { RoomCard };
