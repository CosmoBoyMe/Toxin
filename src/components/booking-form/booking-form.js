import { initCalendar } from '../calendar/calendar';
import { initGuestDropdown } from '../guest-dropdown/guest-dropdown';

const initBookingForm = () => {
  const dropdownEl = document.querySelector('.js-booking-form__dropdown');
  initGuestDropdown(dropdownEl);
  initCalendar('booking-form__calendar', 'booking-form__datepicker', 'multiple');
};

export { initBookingForm };
