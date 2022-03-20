import { initCalendar } from '../calendar/calendar.js';
import { initGuestDropdown } from '../guestDropdown/guestDropdown.js';

const initBookingForm = () => {
  const dropdownEl = document.querySelector('.js-booking-form__dropdown');
  initGuestDropdown(dropdownEl);
  initCalendar('booking-form__calendar', 'booking-form__datepicker', 'multiple');
};

export { initBookingForm };
