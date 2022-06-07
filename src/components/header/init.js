import { Header } from './Header';

const headerElements = document.querySelectorAll('.js-header');
headerElements.forEach((element) => new Header(element));
