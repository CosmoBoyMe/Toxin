class Header {
  constructor(element) {
    const burgerEl = element.querySelector('.js-header__nav-burger');
    const contentEl = element.querySelector('.js-header__nav-content');

    this.elements = {
      element,
      burgerEl,
      contentEl,
    };

    this.init();
  }

  handlerNavBurgerClick = () => {
    const { burgerEl, contentEl } = this.elements;
    burgerEl.classList.toggle('header__nav-burger_active');
    contentEl.classList.toggle('header__nav-content_active');
  };

  bindBurgerListener() {
    const { burgerEl } = this.elements;
    burgerEl.addEventListener('click', this.handlerNavBurgerClick);
  }

  init() {
    this.bindBurgerListener();
  }
}

export { Header };
