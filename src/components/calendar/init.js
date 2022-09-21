import { Calendar } from './Calendar';

const calendarElements = document.querySelectorAll('.js-calendar');
calendarElements.forEach((calendarElement) => new Calendar(calendarElement));
