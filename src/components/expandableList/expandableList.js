const initExpandableList = (id) => {
  const containerEl = document.getElementById(id);
  const headerEl = containerEl.querySelector('.expandable-list__header');
  const headerArrowEl = headerEl.querySelector('.expandable-list__arrow');
  const menuEl = containerEl.querySelector('.expandable-list__menu');

  const toogleMenu = () => {
    menuEl.classList.toggle('expandable-list__menu--active');
    headerArrowEl.classList.toggle('expandable-list__arrow--active');
  };

  const outsideClickHandler = (event) => {
    if (!event.target.closest('.expandable-list')) {
      toogleMenu();
      removeOutsideClickHandler();
    }
  };

  const removeOutsideClickHandler = (event) => {
    document.removeEventListener('click', outsideClickHandler);
  };

  headerEl.addEventListener('click', (event) => {
    toogleMenu();
    document.addEventListener('click', outsideClickHandler);
  });
};

export { initExpandableList };
