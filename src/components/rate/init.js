import { Rate } from './Rate';

const rateElements = document.querySelectorAll('.js-rate');

rateElements.forEach((element) => new Rate(element));
