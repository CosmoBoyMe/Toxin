import { wording } from '../../helpers/wording';

const initDropdown = ({ dropdownEl, wordsDeclensions = '', onChangeTextValue = null }) => {
  const dropdownInputWrapperEl = dropdownEl.querySelector('.js-dropdown__input-wrapper');
  const dropdownInputEl = dropdownEl.querySelector('.js-dropdown__input');
  const dropdownMenuEl = dropdownEl.querySelector('.js-dropdown__menu');
  const counterElements = dropdownEl.querySelectorAll('.js-amount-select__number');
  const minusBtnElements = dropdownEl.querySelectorAll('.js-amount-select__btn_sign_minus');
  const plusBtnElements = dropdownEl.querySelectorAll('.js-amount-select__btn_sign_plus');
  const clearBtnEl = dropdownEl.querySelector('.js-dropdown__btn_clear');
  const applyBtnEl = dropdownEl.querySelector('.js-dropdown__btn_apply');

  const state = {};
  const setState = () => {
    state.values = [...counterElements].map((counter) => Number(counter.value));
    state.totalCounts = [...counterElements].reduce(
      (prev, counter) => prev + Number(counter.value),
      0
    );
  };

  const updateInputValueText = () => {
    if (state.totalCounts === 0) {
      dropdownInputEl.value = '';
    } else if (onChangeTextValue) {
      const inputText = onChangeTextValue(state.totalCounts, state.values);
      dropdownInputEl.value = inputText;
    } else {
      const wordingTextArray = wordsDeclensions.map((item, index) =>
        wording(state.values[index], item)
      );
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formattedText = removedEmptyText.join(', ');
      dropdownInputEl.value = formattedText;
    }
  };

  const updateClearBtn = () => {
    if (state.totalCounts === 0) {
      clearBtnEl?.classList.add('js-dropdown__btn_hidden');
    } else {
      clearBtnEl?.classList.remove('js-dropdown__btn_hidden');
    }
  };

  const update = () => {
    setState();
    state.values.forEach((value, index) => {
      const minusButton = counterElements[index].previousElementSibling;
      if (value === 0) {
        minusButton.setAttribute('disabled', true);
      } else if (value === 1) {
        minusButton.removeAttribute('disabled');
      }
    });
    updateInputValueText();
    updateClearBtn();
  };

  const handlerMinusButtonClick = ({ target }) => {
    const counterEl = target.nextElementSibling;
    counterEl.stepDown();
    update();
  };

  const handlerPlusButtonClick = ({ target }) => {
    const counterEl = target.previousElementSibling;
    counterEl.stepUp();
    update();
  };

  minusBtnElements.forEach((btn) => {
    btn.addEventListener('click', handlerMinusButtonClick);
  });

  plusBtnElements.forEach((btn) => {
    btn.addEventListener('click', handlerPlusButtonClick);
  });

  const toggleDropdownMenu = () => {
    dropdownMenuEl.classList.toggle('js-dropdown__menu_active');
  };

  const handlerClearButtonClick = () => {
    [...counterElements].forEach((counter) => {
      const counterEl = counter;
      counterEl.value = 0;
    });
    setState();
    update();
  };

  const handlerOutsideClick = (event) => {
    if (!dropdownEl.contains(event.target)) {
      dropdownMenuEl.classList.remove('js-dropdown__menu_active');
    }
  };

  dropdownInputWrapperEl.addEventListener('click', toggleDropdownMenu);
  applyBtnEl?.addEventListener('click', toggleDropdownMenu);
  clearBtnEl?.addEventListener('click', handlerClearButtonClick);
  update();
  document.addEventListener('click', handlerOutsideClick);
};

export { initDropdown };
