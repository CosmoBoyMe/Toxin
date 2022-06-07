import { initDropdown } from '../dropdown/dropdown';
import { wording } from '../../helpers/wording';

class GuestDropdown {
  constructor(element) {
    this.element = element;
    this.wordsDeclensions = [
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];
    this.init();
  }

  onChangeTextValue = (totalCounts, values) => {
    const guestCount = values[0] + values[1];
    const babyCount = values[2];
    const wordingTextArray = [guestCount, babyCount].map((count, index) =>
      wording(count, this.wordsDeclensions[index])
    );
    const removedEmptyText = wordingTextArray.filter((item) => item !== '');
    const formattedText = removedEmptyText.join(', ');
    return formattedText;
  };

  init() {
    initDropdown({ dropdownEl: this.element, onChangeTextValue: this.onChangeTextValue });
  }
}

export { GuestDropdown };
