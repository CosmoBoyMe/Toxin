import './formElements.scss';
import { initExpandableList } from '../../components/expandableList/expandableList';
import '../../components/maskedField/maskedField';
import '../../components/likeBtn/likeBtn';
import { initRoomDropdown } from '../../components/roomDropdown/roomDropdown';
import { initGuestDropdown } from '../../components/guestDropdown/guestDropdown';
import { initCalendar } from '../../components/calendar/calendar';
import { initRangeSlider } from '../../components/rangeSlider/rangeSlider';
import { initPagination } from '../../components/pagination/pagination';

const roomDropdownElemenets = document.querySelectorAll('.js-main__room-dropdown');
roomDropdownElemenets.forEach((element) => {
  initRoomDropdown(element);
});

initGuestDropdown();
initExpandableList();
initCalendar('calendar-first', 'date-picker-first', 'multiple');
initCalendar('filter-calendar', 'date-picker-second');
initRangeSlider('range-slider');
initPagination(170, 12);
