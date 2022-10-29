class Header {
  constructor(element) {
    this.element = element;
    this.burgerElement = element.querySelector('.js-header__nav-burger');
    this.contentElement = element.querySelector('.js-header__nav-content');
    this.bindBurgerListener();
  }

  handleNavBurgerClick = () => {
    const { burgerElement, contentElement } = this;
    burgerElement.classList.toggle('header__nav-burger_active');
    contentElement.classList.toggle('header__nav-content_active');
  };

  bindBurgerListener() {
    this.burgerElement.addEventListener('click', this.handleNavBurgerClick);
  }
}

export { Header };
