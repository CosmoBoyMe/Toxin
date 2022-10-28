class Header {
  constructor(element) {
    const burgerElement = element.querySelector('.js-header__nav-burger');
    const contentElement = element.querySelector('.js-header__nav-content');

    this.elements = {
      element,
      burgerElement,
      contentElement,
    };

    this.bindBurgerListener();
  }

  handleNavBurgerClick = () => {
    const { burgerElement, contentElement } = this.elements;
    burgerElement.classList.toggle('header__nav-burger_active');
    contentElement.classList.toggle('header__nav-content_active');
  };

  bindBurgerListener() {
    const { burgerElement } = this.elements;
    burgerElement.addEventListener('click', this.handleNavBurgerClick);
  }
}

export { Header };
