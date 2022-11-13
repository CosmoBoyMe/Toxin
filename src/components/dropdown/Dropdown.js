import { getWordDeclension } from '../../helpers/getWordDeclension';

class Dropdown {
  constructor({ element, wordsDeclensions = [], onChangeTextValue = null }) {
    this.element = element;

    this.state = {};
    this.wordsDeclensions = wordsDeclensions;
    this.onChangeTextValue = onChangeTextValue;

    this.init();
  }

  updateState() {
    this.state.values = [...this.counterElements].map((counter) => Number(counter.value));
    this.state.totalCounts = [...this.counterElements].reduce(
      (prev, counter) => prev + Number(counter.value),
      0
    );
  }

  updateInputValueText() {
    if (this.state.totalCounts === 0) {
      this.inputElement.value = '';
    } else if (this.onChangeTextValue) {
      const inputText = this.onChangeTextValue(this.state.totalCounts, this.state.values);
      this.inputElement.value = inputText;
    } else {
      const wordingTextArray = this.wordsDeclensions.map((item, index) =>
        getWordDeclension(this.state.values[index], item)
      );
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formattedText = removedEmptyText.join(', ');
      this.inputElement.value = formattedText;
    }
  }

  toggleHiddenClearButton() {
    if (this.state.totalCounts === 0) {
      this.clearButtonElement?.classList.add('dropdown__button_hidden');
    } else {
      this.clearButtonElement?.classList.remove('dropdown__button_hidden');
    }
  }

  update() {
    this.updateState();
    this.state.values.forEach((value, index) => {
      const minusButton = this.counterElements[index].previousElementSibling;
      if (value === 0) {
        minusButton.setAttribute('disabled', true);
      } else if (value === 1) {
        minusButton.removeAttribute('disabled');
      }
    });

    this.updateInputValueText();
    this.toggleHiddenClearButton();
  }

  handleMinusButtonClick = ({ target }) => {
    const counterElement = target.nextElementSibling;
    counterElement.stepDown();
    this.update();
  };

  handlePlusButtonClick = ({ target }) => {
    const counterElement = target.previousElementSibling;
    counterElement.stepUp();
    this.update();
  };

  toggleDropdownMenu() {
    this.inputElement.classList.toggle('dropdown__input_active');
    this.menuElement.classList.toggle('dropdown__menu_active');
  }

  handleClearButtonClick = () => {
    [...this.counterElements].forEach((counter) => {
      const counterElement = counter;
      counterElement.value = 0;
    });
    this.updateState();
    this.update();
  };

  handleDocumentClick = (event) => {
    if (!this.element.contains(event.target)) {
      this.menuElement.classList.remove('dropdown__menu_active');
      this.inputElement.classList.remove('dropdown__input_active');
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };

  handleInputWrapperClick = () => {
    this.toggleDropdownMenu();
    document.addEventListener('click', this.handleDocumentClick);
  };

  bindEventListeners() {
    this.inputWrapperElement.addEventListener('click', this.handleInputWrapperClick);
    this.applyButtonElement?.addEventListener('click', () => this.toggleDropdownMenu());
    this.clearButtonElement?.addEventListener('click', this.handleClearButtonClick);
    this.minusButtonElements.forEach((button) => {
      button.addEventListener('click', this.handleMinusButtonClick);
    });
    this.plusButtonElements.forEach((button) => {
      button.addEventListener('click', this.handlePlusButtonClick);
    });
  }

  init() {
    this.inputWrapperElement = this.element.querySelector('.js-dropdown__input-wrapper');
    this.inputElement = this.element.querySelector('.js-dropdown__input');
    this.menuElement = this.element.querySelector('.js-dropdown__menu');
    this.counterElements = this.element.querySelectorAll('.js-dropdown__amount-select-number');
    this.minusButtonElements = this.element.querySelectorAll(
      '.js-dropdown__amount-select-button_sign_minus'
    );
    this.plusButtonElements = this.element.querySelectorAll(
      '.js-dropdown__amount-select-button_sign_plus'
    );
    this.clearButtonElement = this.element.querySelector('.js-dropdown__button_type_clear');
    this.applyButtonElement = this.element.querySelector('.js-dropdown__button_type_apply');
    this.update();
    this.bindEventListeners();
  }
}

export { Dropdown };
