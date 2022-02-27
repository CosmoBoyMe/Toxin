const headerNavElements = document.querySelectorAll('.js-header-nav');

headerNavElements.forEach((headerNavEl) => {
  const burgerEl = headerNavEl.querySelector('.js-header-nav__burger');
  const contentEl = headerNavEl.querySelector('.js-header-nav__content');

  burgerEl.addEventListener('click', (e) => {
    burgerEl.classList.toggle('js-header-nav__burger--active');
    contentEl.classList.toggle('js-header-nav__content--active');
  });
});
