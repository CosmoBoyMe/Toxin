import { initDropdown } from '../dropdown/dropdown.js';

const initRoomDropdown = (element) => {
  const wordsDeclensions = [
    ['cпальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная комната', 'ванных комнат', 'ванных комнат'],
  ];

  initDropdown({ dropdownEl: element, wordsDeclensions });
};

export { initRoomDropdown };
