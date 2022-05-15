import { initDropdown } from '../dropdown/dropdown';
import { wording } from '../../helpers/wording';

const initGuestDropdown = (element) => {
  const wordsDeclensions = [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ];

  const onChangeTextValue = (totalCounts, values) => {
    const guestCount = values[0] + values[1];
    const babyCount = values[2];
    const wordingTextArray = [guestCount, babyCount].map((count, index) =>
      wording(count, wordsDeclensions[index])
    );
    const removedEmptyText = wordingTextArray.filter((item) => item !== '');
    const formattedText = removedEmptyText.join(', ');
    return formattedText;
  };

  initDropdown({ dropdownEl: element, onChangeTextValue });
};

export { initGuestDropdown };
