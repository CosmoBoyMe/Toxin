import { Calendar } from './calendar';

const calendarElements = document.querySelectorAll('.js-calendar');
calendarElements.forEach((calendarEl) => new Calendar(calendarEl));
