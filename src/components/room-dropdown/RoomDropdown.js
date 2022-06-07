import { initDropdown } from '../dropdown/dropdown';

class RoomDropdown {
  constructor(element) {
    this.element = element;
    this.wordsDeclensions = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванных комнат', 'ванных комнат'],
    ];
    this.init();
  }

  init() {
    const { element, wordsDeclensions } = this;

    initDropdown({ dropdownEl: element, wordsDeclensions });
  }
}
export { RoomDropdown };
