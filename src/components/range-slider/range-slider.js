import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const initRangeSlider = (element) => {
  const rangeSliderEl = element.querySelector('.js-range-slider__slider');
  const startData = element.getAttribute('data-start');
  const stepData = element.getAttribute('data-step');
  const rangeData = element.getAttribute('data-range');

  const start = JSON.parse(startData);
  const range = JSON.parse(rangeData);
  const step = Number(stepData);

  noUiSlider.create(rangeSliderEl, {
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

  const rangeSliderValueEl = element.querySelector('.js-range-slider__price');
  rangeSliderEl.noUiSlider.on('update', (values) => {
    const valuesString = values.join(' - ');
    rangeSliderValueEl.textContent = valuesString;
  });
};

const rangeSliderElements = document.querySelectorAll('.js-range-slider');
rangeSliderElements.forEach((element) => initRangeSlider(element));
