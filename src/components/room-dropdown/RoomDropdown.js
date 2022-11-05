import { roomWordsDeclensions } from '../../constants/words-declensions';
import { Dropdown } from '../dropdown/Dropdown';

class RoomDropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    new Dropdown({ element: this.element, wordsDeclensions: roomWordsDeclensions }); // eslint-disable-line no-new
  }
}
export { RoomDropdown };
