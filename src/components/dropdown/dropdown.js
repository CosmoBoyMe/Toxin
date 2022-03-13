import { wording } from '../../helpers/wording';

const initDropdown = ({ dropdownEl, wordsDeclensions = '', onChangeTextValue = null }) => {
  const dropdownInputWrapperEl = dropdownEl.querySelector('.js-dropdown__input-wrapper');
  const dropdownInputEl = dropdownEl.querySelector('.js-dropdown__input');
  const dropdownMenuEl = dropdownEl.querySelector('.js-dropdown__menu');
  const counterElements = dropdownEl.querySelectorAll('.js-amount-select__number');
  const minusBtnElements = dropdownEl.querySelectorAll('.js-amount-select__btn-minus');
  const plusBtnElements = dropdownEl.querySelectorAll('.js-amount-select__btn-plus');
  const clearBtnEl = dropdownEl.querySelector('.js-dropdown__btn--clear');
  const applyBtnEl = dropdownEl.querySelector('.js-dropdown__btn--apply');

  const state = {};
  const setState = () => {
    state.values = [...counterElements].map((counter) => Number(counter.value));
    state.totalCounts = [...counterElements].reduce((prev, counter) => prev + Number(counter.value), 0);
  };

  const updateInputValueText = () => {
    if (state.totalCounts === 0) {
      dropdownInputEl.value = '';
    } else if (onChangeTextValue) {
      const inputText = onChangeTextValue(state.totalCounts, state.values);
      dropdownInputEl.value = inputText;
    } else {
      const wordingTextArray = wordsDeclensions.map((item, index) => wording(state.values[index], item));
      const removedEmptyText = wordingTextArray.filter((item) => item !== '');
      const formatedText = removedEmptyText.join(', ');
      dropdownInputEl.value = formatedText;
    }
  };

  const updateClearBtn = () => {
    if (state.totalCounts === 0) {
      clearBtnEl?.classList.add('js-dropdown__btn--hidden');
    } else {
      clearBtnEl?.classList.remove('js-dropdown__btn--hidden');
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

  const onClickMinusBtnHandler = ({ target }) => {
    const counterEl = target.nextElementSibling;
    counterEl.stepDown();
    update();
  };

  const onClickPlusBtnHandler = ({ target }) => {
    const counterEl = target.previousElementSibling;
    counterEl.stepUp();
    update();
  };

  minusBtnElements.forEach((btn) => {
    btn.addEventListener('click', onClickMinusBtnHandler);
  });

  plusBtnElements.forEach((btn) => {
    btn.addEventListener('click', onClickPlusBtnHandler);
  });

  const toggleDropdownMenuHandler = () => {
    dropdownMenuEl.classList.toggle('js-dropdown__menu--active');
  };

  const onClickClearBtnHandler = () => {
    [...counterElements].forEach((counter) => {
      counter.value = 0;
    });
    setState();
    update();
  };

  const onClickOutsideDropdown = () => {
    document.addEventListener('click', (event) => {
      if (!dropdownEl.contains(event.target)) {
        dropdownMenuEl.classList.remove('js-dropdown__menu--active');
      }
    });
  };

  dropdownInputWrapperEl.addEventListener('click', toggleDropdownMenuHandler);
  applyBtnEl?.addEventListener('click', toggleDropdownMenuHandler);
  clearBtnEl?.addEventListener('click', onClickClearBtnHandler);
  update();
  onClickOutsideDropdown();
};

export { initDropdown };
