import noUiSlider from 'nouislider';
import wNumb from 'wnumb';

const initRangeSlider = (
  id,
  start = [5000, 10000],
  range = {
    min: 1000,
    max: 15500,
  },
  step = 100
) => {
  const sliderContainerEl = document.getElementById(id);
  const rangeSliderEl = sliderContainerEl.querySelector('.range-slider__slider');
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

  const rangeSliderValueEl = sliderContainerEl.querySelector('.range-slider__price');
  rangeSliderEl.noUiSlider.on('update', (values) => {
    const valuesString = values.join(' - ');
    rangeSliderValueEl.textContent = valuesString;
  });
};

export { initRangeSlider };
