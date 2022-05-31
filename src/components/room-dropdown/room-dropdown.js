import { initDropdown } from '../dropdown/dropdown';

const initRoomDropdown = (element) => {
  const wordsDeclensions = [
    ['спальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная комната', 'ванных комнат', 'ванных комнат'],
  ];

  initDropdown({ dropdownEl: element, wordsDeclensions });
};

const roomDropdownElements = document.querySelectorAll('.js-room-dropdown');
roomDropdownElements.forEach(initRoomDropdown);
