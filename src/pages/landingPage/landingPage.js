import './landingPage.scss';

import '../../components/header/header';

import { initCalendar } from '../../components/calendar/calendar';
import { initGuestDropdown } from '../../components/guestDropdown/guestDropdown';

initGuestDropdown();
initCalendar('calendarId', 'datePickerId', 'multiple');
