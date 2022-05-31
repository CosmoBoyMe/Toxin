import { initCalendar } from '../calendar/calendar';
import '../guest-dropdown/guest-dropdown';

const calendarElement = document.querySelector('.js-search-rooms-form__calendar');
initCalendar(calendarElement, 'search-rooms-form__datepicker');

