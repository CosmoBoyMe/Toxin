import { initCalender } from '../calender/calender';
import { initDropdown } from '../dropdown/dropdown';
import { initRangeSlider } from '../rangeSlider/rangeSlider';
import { initExpandableList } from '../expandableList/expandableList';

const wordsGuestDropdown = [['гость', 'гостя', 'гостей']];
const wordsRoomDropdown = [
  ['cпальня', 'спальни', 'спален'],
  ['кровать', 'кровати', 'кроватей'],
  ['ванная комната', 'ванных комнат', 'ванных комнат'],
];
initCalender('calender', 'datepicker');
initDropdown('guest-dropdown', wordsGuestDropdown);
initDropdown('room-dropdown', wordsRoomDropdown);
initRangeSlider('range-slider');
initExpandableList();

const filterBtnElements = document.querySelectorAll('.js-filter__btn');
const filterContentEl = document.querySelector('.js-filter__content');

const onClickFilterBtn = () => {
  filterContentEl.classList.toggle('js-filter__content--visible');
  if (document.body.style.overflowY === 'hidden') {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
};

filterBtnElements.forEach((btn) => btn.addEventListener('click', onClickFilterBtn));
