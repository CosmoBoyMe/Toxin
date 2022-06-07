import { Filter } from './Filter';

const filterElements = document.querySelectorAll('.js-filter');
filterElements.forEach((element) => new Filter(element));
