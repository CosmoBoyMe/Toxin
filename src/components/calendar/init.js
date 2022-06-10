import { Calendar } from './Calendar';

const calendarElements = document.querySelectorAll('.js-calendar');
calendarElements.forEach((calendarEl) => new Calendar(calendarEl));
