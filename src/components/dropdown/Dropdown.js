import { wording } from '../../helpers/wording';

class Dropdown {
  constructor({ element, wordsDeclensions = [], onChangeTextValue = null }) {
    const inputWrapperElement = element.querySelector('.js-dropdown__input-wrapper');
    const inputElement = element.querySelector('.js-dropdown__input');

    const menuElement = element.querySelector('.js-dropdown__menu');
    const counterElements = element.querySelectorAll('.js-amount-select__number');
    const minusButtonElements = element.querySelectorAll('.js-amount-select__button_sign_minus');
    const plusButtonElements = element.querySelectorAll('.js-amount-select__button_sign_plus');
    const clearButtonElement = element.querySelector('.js-dropdown__button_clear');
    const applyButtonElement = element.querySelector('.js-dropdown__button_apply');

    this.elements = {
      element,
      inputWrapperElement,
      inputElement,
      menuElement,
      counterElements,
      minusButtonElements,
      plusButtonElements,
      clearButtonElement,
      applyButtonElement,
    };
    this.state = {};
    this.wordsDeclensions = wordsDeclensions;
    this.onChangeTextValue = onChangeTextValue;

    this.init();
  }

  updateState() {
    const { elements, state } = this;
    const { counterElements } = elements;
    state.values = [...counterElements].map((counter) => Number(counter.value));
    state.totalCounts = [...counterElements].reduce(
      (prev, counter) => prev + Number(counter.value),
      0
    );
  }

  updateInputValueText() {
    const { elements, state } = this;
    const { inputElement } = elements;

    if (state.totalCounts === 0) {
      inputElement.value = '';
    } else if (this.onChangeTextValue) {
      const inputText = this.onChangeTextValue(state.totalCounts, state.values);
      inputElement.value = inputText;
    } else {
      const wordingTextArray = this.wordsDeclensions.map((item, index) =>
        wording(state.values[index], item)
      );
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formattedText = removedEmptyText.join(', ');
      inputElement.value = formattedText;
    }
  }

  toggleHiddenClearButton() {
    const { elements, state } = this;
    const { clearButtonElement } = elements;

    if (state.totalCounts === 0) {
      clearButtonElement?.classList.add('dropdown__button_hidden');
    } else {
      clearButtonElement?.classList.remove('dropdown__button_hidden');
    }
  }

  update() {
    const { elements, state } = this;
    const { counterElements } = elements;
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
    const { menuElement, inputElement } = this.elements;
    inputElement.classList.toggle('dropdown__input_active');
    menuElement.classList.toggle('dropdown__menu_active');
  }

  handleClearButtonClick = () => {
    const { counterElements } = this.elements;
    [...counterElements].forEach((counter) => {
      const counterElement = counter;
      counterElement.value = 0;
    });
    this.updateState();
    this.update();
  };

  handleDocumentClick = (event) => {
    const { element, menuElement, inputElement } = this.elements;
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
    } = this.elements;

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
    this.update();
    this.bindEventListeners();
  }
}

export { Dropdown };
