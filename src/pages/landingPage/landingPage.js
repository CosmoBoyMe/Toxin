import './landingPage.scss';
import '../../components/calender/calender.js';
import { initDropdown } from '../../components/dropdown/dropdown';

const wordsDeclensions = [['гость', 'гостя', 'гостей']];

initDropdown('guestDropdown', wordsDeclensions);
