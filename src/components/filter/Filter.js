class Filter {
  constructor(element) {
    this.element = element;
    this.init();
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
    this.filterButtonElement.addEventListener('click', this.handleButtonClick);
    this.filterButtonCloseElement.addEventListener('click', this.handleButtonClick);
  }

  init() {
    this.filterButtonElement = this.element.querySelector('.js-filter__button');
    this.filterButtonCloseElement = this.element.querySelector('.js-filter__content-button-close');
    this.filterContentElement = this.element.querySelector('.js-filter__content');
    this.bindListeners();
  }
}

export { Filter };
