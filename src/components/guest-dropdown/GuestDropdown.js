
import { guestDropdownWordsDeclensions } from '../../const';
import { wording } from '../../helpers/wording';
import { Dropdown } from '../dropdown/Dropdown';

class GuestDropdown {
  constructor(element) {
    this.element = element;
    this.init();
  }

  // eslint-disable-next-line class-methods-use-this
  onChangeTextValue = (_, values) => {
    const guestCount = values[0] + values[1];
    const babyCount = values[2];
    const wordingTextArray = [guestCount, babyCount].map((count, index) =>
      wording(count, guestDropdownWordsDeclensions[index])
    );
    const removedEmptyText = wordingTextArray.filter((item) => item !== '');
    const formattedText = removedEmptyText.join(', ');
    return formattedText;
  };

  init() {
    // eslint-disable-next-line no-new
    new Dropdown({ element: this.element, onChangeTextValue: this.onChangeTextValue });
  }
}

export { GuestDropdown };
