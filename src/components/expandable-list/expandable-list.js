const initExpandableList = () => {
  const listElements = document.querySelectorAll('.js-expandable-list');

  listElements.forEach((listEl) => {
    const headerEl = listEl.querySelector('.js-expandable-list__header');
    const headerArrowEl = headerEl.querySelector('.js-expandable-list__arrow');
    const menuEl = listEl.querySelector('.js-expandable-list__menu');

    const toogleMenu = () => {
      menuEl.classList.toggle('js-expandable-list__menu--active');
      headerArrowEl.classList.toggle('js-expandable-list__arrow--active');
    };

    const outsideClickHandler = (event) => {
      if (!listEl.contains(event.target)) {
        menuEl.classList.remove('js-expandable-list__menu--active');
        headerArrowEl.classList.remove('js-expandable-list__arrow--active');
        removeOutsideClickHandler();
      }
    };

    const removeOutsideClickHandler = (event) => {
      document.removeEventListener('click', outsideClickHandler);
    };

    const onClickHeader = (event) => {
      toogleMenu();
      document.addEventListener('click', outsideClickHandler);
    };

    headerEl.addEventListener('click', onClickHeader);
  });
};

export { initExpandableList };
