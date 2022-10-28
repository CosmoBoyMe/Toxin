import wNumb from 'wnumb';

import { bookingFormDaysWordsDeclensions } from '../../constants/words-declensions';
import { getWordDeclension } from '../../helpers/getWordDeclension';

class BookingForm {
  constructor(element) {
    const servicesPriceElements = element.querySelectorAll('.js-booking-form__services-item-price');
    const daysCountElement = element.querySelector('.js-booking-form__services-item-days');
    const daysWordElement = element.querySelector('.js-booking-form__services-item-days-word');

    this.elements = {
      element,
      servicesPriceElements,
      daysCountElement,
      daysWordElement,
    };
    this.init();
  }

  init() {
    const { servicesPriceElements, daysCountElement, daysWordElement } = this.elements;
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
    const daysCount = Number(daysCountElement.textContent);
    const dayDeclension = getWordDeclension(daysCount, bookingFormDaysWordsDeclensions, false);
    daysWordElement.textContent = dayDeclension;
  }
}

export { BookingForm };
