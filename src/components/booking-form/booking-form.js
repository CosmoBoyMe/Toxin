import { initCalendar } from '../calendar/calendar';
import '../guest-dropdown/guest-dropdown';

const calendarEl = document.querySelector('.js-booking-form__calendar');
initCalendar(calendarEl, 'booking-form__datepicker');
