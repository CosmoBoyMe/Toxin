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
    const { counterElements, state } = this;
    state.values = [...counterElements].map((counter) => Number(counter.value));
    state.totalCounts = [...counterElements].reduce(
      (prev, counter) => prev + Number(counter.value),
      0
    );
  }

  updateInputValueText() {
    const { inputElement, state } = this;

    if (state.totalCounts === 0) {
      inputElement.value = '';
    } else if (this.onChangeTextValue) {
      const inputText = this.onChangeTextValue(state.totalCounts, state.values);
      inputElement.value = inputText;
    } else {
      const wordingTextArray = this.wordsDeclensions.map((item, index) =>
        getWordDeclension(state.values[index], item)
      );
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formattedText = removedEmptyText.join(', ');
      inputElement.value = formattedText;
    }
  }

  toggleHiddenClearButton() {
    const { clearButtonElement, state } = this;

    if (state.totalCounts === 0) {
      clearButtonElement?.classList.add('dropdown__button_hidden');
    } else {
      clearButtonElement?.classList.remove('dropdown__button_hidden');
    }
  }

  update() {
    const { counterElements, state } = this;
    this.updateState();
    state.values.forEach((value, index) => {
      const minusButton = counterElements[index].previousElementSibling;
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
    const { menuElement, inputElement } = this;
    inputElement.classList.toggle('dropdown__input_active');
    menuElement.classList.toggle('dropdown__menu_active');
  }

  handleClearButtonClick = () => {
    const { counterElements } = this;
    [...counterElements].forEach((counter) => {
      const counterElement = counter;
      counterElement.value = 0;
    });
    this.updateState();
    this.update();
  };

  handleDocumentClick = (event) => {
    const { element, menuElement, inputElement } = this;
    if (!element.contains(event.target)) {
      menuElement.classList.remove('dropdown__menu_active');
      inputElement.classList.remove('dropdown__input_active');
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };

  handleInputWrapperClick = () => {
    this.toggleDropdownMenu();
    document.addEventListener('click', this.handleDocumentClick);
  };

  bindEventListeners() {
    const {
      inputWrapperElement,
      applyButtonElement,
      clearButtonElement,
      minusButtonElements,
      plusButtonElements,
    } = this;

    inputWrapperElement.addEventListener('click', this.handleInputWrapperClick);
    applyButtonElement?.addEventListener('click', () => this.toggleDropdownMenu());
    clearButtonElement?.addEventListener('click', this.handleClearButtonClick);
    minusButtonElements.forEach((button) => {
      button.addEventListener('click', this.handleMinusButtonClick);
    });
    plusButtonElements.forEach((button) => {
      button.addEventListener('click', this.handlePlusButtonClick);
    });
  }

  init() {
    this.inputWrapperElement = this.element.querySelector('.js-dropdown__input-wrapper');
    this.inputElement = this.element.querySelector('.js-dropdown__input');
    this.menuElement = this.element.querySelector('.js-dropdown__menu');
    this.counterElements = this.element.querySelectorAll('.js-amount-select__number');
    this.minusButtonElements = this.element.querySelectorAll('.js-amount-select__button_sign_minus');
    this.plusButtonElements = this.element.querySelectorAll('.js-amount-select__button_sign_plus');
    this.clearButtonElement = this.element.querySelector('.js-dropdown__button_clear');
    this.applyButtonElement = this.element.querySelector('.js-dropdown__button_apply');
    this.update();
    this.bindEventListeners();
  }
}

export { Dropdown };
