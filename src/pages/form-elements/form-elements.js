import './form-elements.scss';
import '../../components/expandable-list/expandable-list';
import '../../components/masked-field/masked-field';
import '../../components/like-btn/like-btn';
import '../../components/room-dropdown/room-dropdown';
import '../../components/guest-dropdown/guest-dropdown';
import { initCalendar } from '../../components/calendar/calendar';
import '../../components/range-slider/range-slider';
import '../../components/pagination/pagination';

const calendarFirstEl = document.querySelector('.js-main__multiple-calendar');
const filterCalendarEl = document.querySelector('.js-main__filter-calendar');
initCalendar(calendarFirstEl, 'date-picker-first');
initCalendar(filterCalendarEl, 'date-picker-second');
