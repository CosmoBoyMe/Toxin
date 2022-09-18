import { Dropdown } from '../dropdown/Dropdown';
import { roomWordsDeclensions } from '../../const';

class RoomDropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    const { element } = this;

    new Dropdown({ element, roomWordsDeclensions }); // eslint-disable-line no-new
  }
}
export { RoomDropdown };
