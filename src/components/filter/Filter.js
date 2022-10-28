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

    this.bindListeners();
  }

  handleButtonClick = () => {
    const { filterContentElement } = this.elements;

    filterContentElement.classList.toggle('filter__content_visible');
    if (document.body.style.overflowY === 'hidden') {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  };

  bindListeners() {
    const { filterButtonElement, filterButtonCloseElement } = this.elements;
    filterButtonElement.addEventListener('click', this.handleButtonClick);
    filterButtonCloseElement.addEventListener('click', this.handleButtonClick);
  }
}

export { Filter };
