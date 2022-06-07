import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

class RangeSlider {
  constructor(element) {
    const sliderEl = element.querySelector('.js-range-slider__slider');
    const priceEl = element.querySelector('.js-range-slider__price');
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
      sliderEl,
      priceEl,
    };
    this.initNoUiSlider();
  }

  updatePriceText(values) {
    const { priceEl } = this.elements;
    const valuesString = values.join(' - ');
    priceEl.textContent = valuesString;
  }

  initNoUiSlider() {
    const { sliderEl } = this.elements;
    const { start, range, step } = this.options;
    noUiSlider.create(sliderEl, {
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

    sliderEl.noUiSlider.on('update', this.updatePriceText.bind(this));
  }
}
export { RangeSlider };
