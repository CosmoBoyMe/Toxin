class Filter {
  constructor(element) {
    const filterButtonElement = element.querySelector('.js-filter__button');
    const filterButtonCloseElement = element.querySelector('.js-filter__content-button-close');
    const filterContentElement = element.querySelector('.js-filter__content');

    this.elements = {
      element,
      filterButtonElement,
      filterButtonCloseElement,
      filterContentElement,
    };

    this.init();
  }

  handlerButtonClick = () => {
    const { filterContentElement } = this.elements;

    filterContentElement.classList.toggle('filter__content_visible');
    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  };

  bindButtonListeners() {
    const { filterButtonElement, filterButtonCloseElement } = this.elements;
    filterButtonElement.addEventListener('click', this.handlerButtonClick);
    filterButtonCloseElement.addEventListener('click', this.handlerButtonClick);
  }

  init() {
    this.bindButtonListeners();
  }
}

export { Filter };
