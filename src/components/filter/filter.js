import { initCalendar } from '../calendar/calendar';
import '../range-slider/range-slider';
import '../expandable-list/expandable-list';
import '../room-dropdown/room-dropdown';
import '../guest-dropdown/guest-dropdown';

const filterBtnElements = document.querySelectorAll('.js-filter__btn');
const filterContentEl = document.querySelector('.js-filter__content');

const handlerButtonClick = () => {
  filterContentEl.classList.toggle('js-filter__content_visible');
  if (document.body.style.overflowY === 'hidden') {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
};

filterBtnElements.forEach((btn) => btn.addEventListener('click', handlerButtonClick));
const filterCalendarEl = document.querySelector('.filter__calendar');
initCalendar(filterCalendarEl, 'datepicker');
