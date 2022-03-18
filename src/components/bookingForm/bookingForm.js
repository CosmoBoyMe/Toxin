import { initCalendar } from '../calendar/calendar.js';
import { initGuestDropdown } from '../guestDropdown/guestDropdown.js';

initGuestDropdown();
initCalendar('calendar', 'datapicker', 'multiple');
