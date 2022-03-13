import './landingPage.scss';

import '../../components/header/header';

import { initCalender } from '../../components/calender/calender';
import { initGuestDropdown } from '../../components/guestDropdown/guestDropdown';

initGuestDropdown();
initCalender('calenderId', 'datePickerId', 'multiple');
