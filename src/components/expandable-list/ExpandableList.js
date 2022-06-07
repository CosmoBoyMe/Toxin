class ExpandableList {
  constructor(element) {
    const headerEl = element.querySelector('.js-expandable-list__header');
    const headerArrowEl = headerEl.querySelector('.js-expandable-list__arrow');
    const menuEl = element.querySelector('.js-expandable-list__menu');
    this.elements = {
      element,
      headerEl,
      headerArrowEl,
      menuEl,
    };
    this.init();
  }

  toggleMenu() {
    const { menuEl, headerArrowEl } = this.elements;
    menuEl.classList.toggle('js-expandable-list__menu_active');
    headerArrowEl.classList.toggle('js-expandable-list__arrow_active');
  }

  handlerOutsideClick = (event) => {
    const { element, menuEl, headerArrowEl } = this.elements;
    if (!element.contains(event.target)) {
      menuEl.classList.remove('js-expandable-list__menu_active');
      headerArrowEl.classList.remove('js-expandable-list__arrow_active');
      document.removeEventListener('click', this.handlerOutsideClick);
    }
  };

  handlerExpandableListHeaderClick = () => {
    this.toggleMenu();
    document.addEventListener('click', this.handlerOutsideClick);
  };

  init() {
    this.elements.headerEl.addEventListener('click', this.handlerExpandableListHeaderClick);
  }
}

export { ExpandableList };
