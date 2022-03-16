import { initCalendar } from '../calendar/calendar';
import { initRangeSlider } from '../rangeSlider/rangeSlider';
import { initExpandableList } from '../expandableList/expandableList';
import { initRoomDropdown } from '../roomDropdown/roomDropdown';
import { initGuestDropdown } from '../guestDropdown/guestDropdown';

const filterRoomDropdownEl = document.querySelector('.js-filter__room-dropdown');
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
initGuestDropdown();

initRoomDropdown(filterRoomDropdownEl);
