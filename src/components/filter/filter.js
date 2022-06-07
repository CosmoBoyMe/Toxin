class Filter {
  constructor(element) {
    const filterBtnEl = element.querySelector('.js-filter__btn');
    const filterBtnCloseEl = element.querySelector('.js-filter__content-btn-close');
    const filterContentEl = element.querySelector('.js-filter__content');

    this.elements = {
      element,
      filterBtnEl,
      filterBtnCloseEl,
      filterContentEl,
    };

    this.init();
  }

  handlerButtonClick = () => {
    const { filterContentEl } = this.elements;

    filterContentEl.classList.toggle('js-filter__content_visible');
    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  };

  bindButtonListeners() {
    const { filterBtnEl, filterBtnCloseEl } = this.elements;
    filterBtnEl.addEventListener('click', this.handlerButtonClick);
    filterBtnCloseEl.addEventListener('click', this.handlerButtonClick);
  }

  init() {
    this.bindButtonListeners();
  }
}

export { Filter };
