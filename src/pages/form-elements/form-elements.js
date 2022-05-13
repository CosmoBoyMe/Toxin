import './form-elements.scss';
import { initExpandableList } from '../../components/expandable-list/expandable-list';
import '../../components/masked-field/masked-field';
import '../../components/like-btn/like-btn';
import { initRoomDropdown } from '../../components/room-dropdown/room-dropdown';
import { initGuestDropdown } from '../../components/guest-dropdown/guest-dropdown';
import { initCalendar } from '../../components/calendar/calendar';
import { initRangeSlider } from '../../components/range-slider/range-slider';
import { initPagination } from '../../components/pagination/pagination';

const roomDropdownElemenets = document.querySelectorAll('.js-main__room-dropdown');
const guestDropdownElements = document.querySelectorAll('.js-main__guest-dropdown');

roomDropdownElemenets.forEach((element) => {
  initRoomDropdown(element);
});

guestDropdownElements.forEach((element) => {
  initGuestDropdown(element);
});

initExpandableList();
initCalendar('calendar-first', 'date-picker-first', 'multiple');
initCalendar('filter-calendar', 'date-picker-second');
initRangeSlider('range-slider');
initPagination(170, 12);
