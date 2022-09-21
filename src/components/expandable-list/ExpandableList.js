class ExpandableList {
  constructor(element) {
    const headerElement = element.querySelector('.js-expandable-list__header');
    const headerArrowElement = headerElement.querySelector('.js-expandable-list__arrow');
    const menuElement = element.querySelector('.js-expandable-list__menu');
    this.elements = {
      element,
      headerElement,
      headerArrowElement,
      menuElement,
    };
    this.init();
  }

  toggleMenu() {
    const { menuElement, headerArrowElement } = this.elements;
    menuElement.classList.toggle('expandable-list__menu_active');
    headerArrowElement.classList.toggle('expandable-list__arrow_active');
  }

  handlerOutsideClick = (event) => {
    const { element, menuElement, headerArrowElement } = this.elements;
    if (!element.contains(event.target)) {
      menuElement.classList.remove('expandable-list__menu_active');
      headerArrowElement.classList.remove('expandable-list__arrow_active');
      document.removeEventListener('click', this.handlerOutsideClick);
    }
  };

  handlerExpandableListHeaderClick = () => {
    this.toggleMenu();
    document.addEventListener('click', this.handlerOutsideClick);
  };

  init() {
    this.elements.headerElement.addEventListener('click', this.handlerExpandableListHeaderClick);
  }
}

export { ExpandableList };
