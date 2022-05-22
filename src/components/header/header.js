const headerElements = document.querySelectorAll('.js-header');

headerElements.forEach((headerEl) => {
  const burgerEl = headerEl.querySelector('.js-header__nav-burger');
  const contentEl = headerEl.querySelector('.js-header__nav-content');
  const handlerNavBurgerClick = () => {
    burgerEl.classList.toggle('js-header__nav-burger_active');
    contentEl.classList.toggle('js-header__nav-content_active');
  };
  burgerEl.addEventListener('click', handlerNavBurgerClick);
});
