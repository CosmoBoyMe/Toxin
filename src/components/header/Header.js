class Header {
  constructor(element) {
    this.element = element;
    this.init();
    this.isBurgerMenuActive = false;
  }

  toggleBodyScroll = () => {
    if (this.bodyElement.offsetWidth <= 768) {
      this.bodyElement.classList.add('body_with-disabled-scroll');
    } else {
      this.bodyElement.classList.remove('body_with-disabled-scroll');
    }
  };

  handleDocumentClick = ({ target }) => {
    if (!this.headerNavElement.contains(target)) {
      this.toggleBurgerMenu();
    }
  };

  toggleBurgerMenu = () => {
    this.isBurgerMenuActive = !this.isBurgerMenuActive;
    this.burgerElement.classList.toggle('header__nav-burger_active');
    this.headerNavElement.classList.toggle('header__nav_active');
    if (this.isBurgerMenuActive) {
      this.toggleBodyScroll();
      document.addEventListener('click', this.handleDocumentClick);
      window.addEventListener('resize', this.toggleBodyScroll);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
      window.removeEventListener('resize', this.toggleBodyScroll);
      this.bodyElement.classList.remove('body_with-disabled-scroll');
    }
  };

  handleNavBurgerClick = () => {
    this.toggleBurgerMenu();
  };

  bindBurgerListener() {
    this.burgerElement.addEventListener('click', this.handleNavBurgerClick);
  }

  init() {
    this.burgerElement = this.element.querySelector('.js-header__nav-burger');
    this.headerNavElement = this.element.querySelector('.js-header__nav');
    this.bodyElement = document.querySelector('body');
    this.bindBurgerListener();
  }
}

export { Header };
