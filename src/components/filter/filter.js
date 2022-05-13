import { initCalendar } from '../calendar/calendar';
import { initRangeSlider } from '../range-slider/range-slider';
import { initExpandableList } from '../expandable-list/expandable-list';
import { initRoomDropdown } from '../room-dropdown/room-dropdown';
import { initGuestDropdown } from '../guest-dropdown/guest-dropdown';

const filterRoomDropdownEl = document.querySelector('.js-filter__room-dropdown');
const guestDropdownEl = document.querySelector('.js-filter__guest-dropdown');
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

initCalendar('calendar', 'datepicker');
initRangeSlider('range-slider');
initExpandableList();

initGuestDropdown(guestDropdownEl);
initRoomDropdown(filterRoomDropdownEl);
