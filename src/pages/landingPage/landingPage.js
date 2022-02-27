import './landingPage.scss';

import '../../components/header/header';

import { initCalender } from '../../components/calender/calender';
import { initDropdown } from '../../components/dropdown/dropdown';

const wordsDeclensions = [['гость', 'гостя', 'гостей']];

initDropdown('guestDropdown', wordsDeclensions);
initCalender('calenderId', 'datePickerId', 'multiple');
