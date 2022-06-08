import { wording } from '../../helpers/wording';

class Dropdown {
  constructor({ element, wordsDeclensions = [], onChangeTextValue = null }) {
    const inputWrapperEl = element.querySelector('.js-dropdown__input-wrapper');
    const inputEl = element.querySelector('.js-dropdown__input');

    const menuEl = element.querySelector('.js-dropdown__menu');
    const counterElements = element.querySelectorAll('.js-amount-select__number');
    const minusBtnElements = element.querySelectorAll('.js-amount-select__btn_sign_minus');
    const plusBtnElements = element.querySelectorAll('.js-amount-select__btn_sign_plus');
    const clearBtnEl = element.querySelector('.js-dropdown__btn_clear');
    const applyBtnEl = element.querySelector('.js-dropdown__btn_apply');

    this.elements = {
      element,
      inputWrapperEl,
      inputEl,
      menuEl,
      counterElements,
      minusBtnElements,
      plusBtnElements,
      clearBtnEl,
      applyBtnEl,
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
    const { inputEl } = elements;

    if (state.totalCounts === 0) {
      inputEl.value = '';
    } else if (this.onChangeTextValue) {
      const inputText = this.onChangeTextValue(state.totalCounts, state.values);
      inputEl.value = inputText;
    } else {
      const wordingTextArray = this.wordsDeclensions.map((item, index) =>
        wording(state.values[index], item)
      );
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formattedText = removedEmptyText.join(', ');
      inputEl.value = formattedText;
    }
  }

  toggleHiddenClearBtn() {
    const { elements, state } = this;
    const { clearBtnEl } = elements;

    if (state.totalCounts === 0) {
      clearBtnEl?.classList.add('dropdown__btn_hidden');
    } else {
      clearBtnEl?.classList.remove('dropdown__btn_hidden');
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
    this.toggleHiddenClearBtn();
  }

  handlerMinusButtonClick = ({ target }) => {
    const counterEl = target.nextElementSibling;
    counterEl.stepDown();
    this.update();
  };

  handlerPlusButtonClick = ({ target }) => {
    const counterEl = target.previousElementSibling;
    counterEl.stepUp();
    this.update();
  };

  toggleDropdownMenu() {
    const { menuEl } = this.elements;
    menuEl.classList.toggle('dropdown__menu_active');
  }

  handlerClearButtonClick = () => {
    const { counterElements } = this.elements;
    [...counterElements].forEach((counter) => {
      const counterEl = counter;
      counterEl.value = 0;
    });
    this.updateState();
    this.update();
  };

  handlerOutsideClick = (event) => {
    const { element, menuEl } = this.elements;
    if (!element.contains(event.target)) {
      menuEl.classList.remove('dropdown__menu_active');
      document.removeEventListener('click', this.handlerOutsideClick);
    }
  };

  handlerInputWrapperClick = () => {
    this.toggleDropdownMenu();
    document.addEventListener('click', this.handlerOutsideClick);
  };

  bindEventListeners() {
    const { inputWrapperEl, applyBtnEl, clearBtnEl, minusBtnElements, plusBtnElements } =
      this.elements;

    inputWrapperEl.addEventListener('click', this.handlerInputWrapperClick);
    applyBtnEl?.addEventListener('click', () => this.toggleDropdownMenu());
    clearBtnEl?.addEventListener('click', this.handlerClearButtonClick);
    minusBtnElements.forEach((btn) => {
      btn.addEventListener('click', this.handlerMinusButtonClick);
    });
    plusBtnElements.forEach((btn) => {
      btn.addEventListener('click', this.handlerPlusButtonClick);
    });
  }

  init() {
    this.update();
    this.bindEventListeners();
  }
}

export { Dropdown };
