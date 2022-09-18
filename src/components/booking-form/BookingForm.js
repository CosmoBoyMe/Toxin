import wNumb from 'wnumb';
import { wording } from '../../helpers/wording';
import { bookingFormDaysWordsDeclensions } from '../../const';

class BookingForm {
  constructor(element) {
    const servicesPriceElements = element.querySelectorAll('.js-booking-form__services-item-price');
    const daysCountEl = element.querySelector('.js-booking-form__services-item-days');
    const daysWordEl= element.querySelector('.js-booking-form__services-item-days-word');

    this.elements = {
      element,
      servicesPriceElements,
      daysCountEl,
      daysWordEl
    }
    this.init();
  }

  init() {
    const { servicesPriceElements, daysCountEl, daysWordEl } = this.elements;
    const valueFormat = wNumb({
      decimals: 0,
      thousand: ' ',
      suffix: '₽',
    });
    servicesPriceElements.forEach((item) => {
      const value = Number(item.textContent);
      const formattedValue = valueFormat.to(value);
      // eslint-disable-next-line no-param-reassign
      item.textContent = formattedValue;
    });
    const daysCount = Number(daysCountEl.textContent);
    const dayDeclension = wording(daysCount, bookingFormDaysWordsDeclensions, false);
    daysWordEl.textContent = dayDeclension;
  }
}

export { BookingForm };