import { initCalender } from '../calender/calender';
import { initDropdown } from '../dropdown/dropdown';
import { initRangeSlider } from '../rangeSlider/rangeSlider';
import { initExpandableList } from '../expandableList/expandableList';

const wordsGuestDropdown = [['гость', 'гостя', 'гостей']];
const wordsRoomDropdown = [
  ['cпальня', 'спальни', 'спален'],
  ['кровать', 'кровати', 'кроватей'],
  ['ванная комната', 'ванных комнат', 'ванных комнат'],
];
initCalender('calender', 'datepicker');
initDropdown('guest-dropdown', wordsGuestDropdown);
initDropdown('room-dropdown', wordsRoomDropdown);
initRangeSlider('range-slider');
initExpandableList('expandable-list');
