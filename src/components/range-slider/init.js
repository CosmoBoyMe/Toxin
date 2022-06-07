import { RangeSlider } from './RangeSlider';

const rangeSliderElements = document.querySelectorAll('.js-range-slider');
rangeSliderElements.forEach((element) => new RangeSlider(element));
