import { initCalendar } from '../calendar/calendar';
import { initGuestDropdown } from '../guestDropdown/guestDropdown';

const initSearchRoomsForm = () => {
  const dropdownEl = document.querySelector('.js-search-rooms-form__dropdown');
  initGuestDropdown(dropdownEl);
  initCalendar('search-rooms-form__calendar', 'search-rooms-form__datepicker', 'multiple');
};

export { initSearchRoomsForm };
