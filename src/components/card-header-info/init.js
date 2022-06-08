import { CardHeaderInfo } from './CardHeaderInfo';

const cardHeaderInfoElements = document.querySelectorAll('.js-card-header-info');

cardHeaderInfoElements.forEach((element) => new CardHeaderInfo(element));
