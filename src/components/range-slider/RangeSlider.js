import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class RangeSlider {
  constructor(element) {
    this.element = element;
    this.init();
  }

  updatePriceText = (values) => {
    const valuesString = values.join(' - ');
    this.priceElement.textContent = valuesString;
  };

  initNoUiSlider() {
    const { sliderElement } = this;
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

    sliderElement.noUiSlider.on('update', this.updatePriceText);
  }

  init() {
    this.sliderElement = this.element.querySelector('.js-range-slider__slider');
    this.priceElement = this.element.querySelector('.js-range-slider__price');

    const startData = this.element.getAttribute('data-start');
    const stepData = this.element.getAttribute('data-step');
    const rangeData = this.element.getAttribute('data-range');

    const start = JSON.parse(startData);
    const range = JSON.parse(rangeData);
    const step = Number(stepData);

    this.options = {
      start,
      range,
      step,
    };
    this.initNoUiSlider();
  }
}
export { RangeSlider };
