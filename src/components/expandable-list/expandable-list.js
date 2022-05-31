const initExpandableList = (element) => {
  const headerEl = element.querySelector('.js-expandable-list__header');
  const headerArrowEl = headerEl.querySelector('.js-expandable-list__arrow');
  const menuEl = element.querySelector('.js-expandable-list__menu');

  const toggleMenu = () => {
    menuEl.classList.toggle('js-expandable-list__menu_active');
    headerArrowEl.classList.toggle('js-expandable-list__arrow_active');
  };

  const handlerOutsideClick = (event) => {
    if (!element.contains(event.target)) {
      menuEl.classList.remove('js-expandable-list__menu_active');
      headerArrowEl.classList.remove('js-expandable-list__arrow_active');
      document.removeEventListener('click', handlerOutsideClick);
    }
  };

  const handlerHeaderClick = () => {
    toggleMenu();
    document.addEventListener('click', handlerOutsideClick);
  };

  headerEl.addEventListener('click', handlerHeaderClick);
};

const listElements = document.querySelectorAll('.js-expandable-list');

listElements.forEach((element) => initExpandableList(element));
