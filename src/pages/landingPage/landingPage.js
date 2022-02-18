import './landingPage.scss';
import { initCalender } from '../../components/calender/calender.js';
import { initDropdown } from '../../components/dropdown/dropdown';

const wordsDeclensions = [['гость', 'гостя', 'гостей']];

initDropdown('guestDropdown', wordsDeclensions);
initCalender('calenderId', 'datePickerId', 'multiple');
