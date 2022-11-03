class ExpandableList {
  constructor(element) {
    this.element = element;
    this.init();
  }

  toggleMenu() {
    const { menuElement, headerArrowElement } = this;
    menuElement.classList.toggle('expandable-list__menu_active');
    headerArrowElement.classList.toggle('expandable-list__arrow_active');
  }

  handleDocumentClick = (event) => {
    const { element, menuElement, headerArrowElement } = this;
    if (!element.contains(event.target)) {
      menuElement.classList.remove('expandable-list__menu_active');
      headerArrowElement.classList.remove('expandable-list__arrow_active');
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };

  handleExpandableListHeaderClick = () => {
    this.toggleMenu();
    document.addEventListener('click', this.handleDocumentClick);
  };

  init() {
    this.headerElement = this.element.querySelector('.js-expandable-list__header');
    this.headerArrowElement = this.headerElement.querySelector('.js-expandable-list__arrow');
    this.menuElement = this.element.querySelector('.js-expandable-list__menu');
    this.headerElement.addEventListener('click', this.handleExpandableListHeaderClick);
  }
}

export { ExpandableList };
