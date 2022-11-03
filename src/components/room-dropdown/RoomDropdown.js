import { roomWordsDeclensions } from '../../constants/words-declensions';
import { Dropdown } from '../dropdown/Dropdown';

class RoomDropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const { element } = this;
    new Dropdown({ element, wordsDeclensions: roomWordsDeclensions }); // eslint-disable-line no-new
  }
}
export { RoomDropdown };
