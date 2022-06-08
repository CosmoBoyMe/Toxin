import { Dropdown } from '../dropdown/Dropdown';

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

    new Dropdown({ element, wordsDeclensions }); // eslint-disable-line no-new
  }
}
export { RoomDropdown };
