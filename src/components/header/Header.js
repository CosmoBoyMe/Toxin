class Header {
  constructor(element) {
    this.element = element;
    this.init();
  }

  handleNavBurgerClick = () => {
    const { burgerElement, contentElement } = this;
    burgerElement.classList.toggle('header__nav-burger_active');
    contentElement.classList.toggle('header__nav-content_active');
  };

  bindBurgerListener() {
    this.burgerElement.addEventListener('click', this.handleNavBurgerClick);
  }

  init() {
    this.burgerElement = this.element.querySelector('.js-header__nav-burger');
    this.contentElement = this.element.querySelector('.js-header__nav-content');
    this.bindBurgerListener();
  }
}

export { Header };
