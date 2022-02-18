import { initCalender } from '../calender/calender.js';
import { initDropdown } from '../dropdown/dropdown.js';

const wordsDeclensions = [['гость', 'гостя', 'гостей']];

initDropdown('guestDropdown', wordsDeclensions);
initCalender('calender', 'datapicker', 'multiple');
