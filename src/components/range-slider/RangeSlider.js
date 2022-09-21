import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class RangeSlider {
  constructor(element) {
    const sliderElement = element.querySelector('.js-range-slider__slider');
    const priceElement = element.querySelector('.js-range-slider__price');
    const startData = element.getAttribute('data-start');
    const stepData = element.getAttribute('data-step');
    const rangeData = element.getAttribute('data-range');

    const start = JSON.parse(startData);
    const range = JSON.parse(rangeData);
    const step = Number(stepData);

    this.options = {
      start,
      range,
      step,
    };
    this.elements = {
      element,
      sliderElement,
      priceElement,
    };
    this.initNoUiSlider();
  }

  updatePriceText(values) {
    const { priceElement } = this.elements;
    const valuesString = values.join(' - ');
    priceElement.textContent = valuesString;
  }

  initNoUiSlider() {
    const { sliderElement } = this.elements;
    const { start, range, step } = this.options;
    noUiSlider.create(sliderElement, {
      start,
      connect: true,
      step,
      range,

      format: wNumb({
        decimals: 0,
        thousand: ' ',
        suffix: '₽',
      }),
    });

    sliderElement.noUiSlider.on('update', this.updatePriceText.bind(this));
  }
}
export { RangeSlider };
