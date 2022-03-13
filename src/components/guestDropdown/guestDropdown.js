import { initDropdown } from '../dropdown/dropdown';
import { wording } from '../../helpers/wording';

const guestDropdownElements = document.querySelectorAll('.guest-dropdown');

const initGuestDropdown = () => {
  guestDropdownElements.forEach((element) => {
    const wordsDeclensions = [
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ];

    const onChangeTextValue = (totalCounts, values) => {
      const guestCount = values[0] + values[1];
      const babyCount = values[2];
      const wordingTextArray = [guestCount, babyCount].map((count, index) => wording(count, wordsDeclensions[index]));
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formatedText = removedEmptyText.join(', ');
      return formatedText;
    };

    initDropdown({ dropdownEl: element, onChangeTextValue });
  });
};

export { initGuestDropdown };
