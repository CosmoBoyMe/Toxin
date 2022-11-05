class Header {
  constructor(element) {
    this.element = element;
    this.init();
    this.isBurgerMenuActive = false;
  }

  toggleBodyScroll = () => {
    if (this.bodyElement.offsetWidth <= 768) {
      this.bodyElement.classList.add('body_scroll_disable');
    } else {
      this.bodyElement.classList.remove('body_scroll_disable');
    }
  }

  handleDocumentClick = (event) => {
    const { headerNavElement } = this;
    if (!headerNavElement.contains(event.target) ) {
      this.toggleBurgerMenu();
    }
  };

  toggleBurgerMenu = () => {
    this.isBurgerMenuActive  = !this.isBurgerMenuActive;
    const { burgerElement, headerNavElement } = this;
    burgerElement.classList.toggle('header__nav-burger_active');
    headerNavElement.classList.toggle('header__nav_active');
    if (this.isBurgerMenuActive) {
      this.toggleBodyScroll();
      document.addEventListener('click', this.handleDocumentClick);
      window.addEventListener('resize', this.toggleBodyScroll);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
      window.removeEventListener('resize', this.toggleBodyScroll);
      this.bodyElement.classList.remove('body_scroll_disable')
    }
  }

  handleNavBurgerClick = () => {
    this.toggleBurgerMenu()
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
