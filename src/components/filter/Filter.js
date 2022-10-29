class Filter {
  constructor(element) {
    this.element = element;
    this.filterButtonElement = element.querySelector('.js-filter__button');
    this.filterButtonCloseElement = element.querySelector('.js-filter__content-button-close');
    this.filterContentElement = element.querySelector('.js-filter__content');

    this.bindListeners();
  }

  handleButtonClick = () => {
    this.filterContentElement.classList.toggle('filter__content_visible');
    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  };

  bindListeners() {
    const { filterButtonElement, filterButtonCloseElement } = this;
    filterButtonElement.addEventListener('click', this.handleButtonClick);
    filterButtonCloseElement.addEventListener('click', this.handleButtonClick);
  }
}

export { Filter };
