const FIRST_PAGE_NUMBER = 1;
const PAGINATION_BUTTONS_COUNT = 5;

const initPagination = (totalItems, itemsPerPage) => {
  const containerEl = document.querySelector('.js-pagination__buttons');
  const paginationTextCounterEl = document.querySelector('.js-pagination__text-counter');
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  let activePageNumber = 1;

  const updateText = () => {
    const lastItem = activePageNumber * itemsPerPage;
    const lastItemsNumber = lastItem > totalItems ? totalItems : lastItem;
    const totalCountText = totalItems > 100 ? '100+' : totalItems;
    paginationTextCounterEl.textContent = `${
      itemsPerPage * (activePageNumber - 1) + 1
    } - ${lastItemsNumber} из ${totalCountText}`;
  };

  const createPageButton = (pageNumber) => {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = pageNumber;
    buttonEl.classList.add('js-pagination__btn', 'js-pagination__page');
    const handlerPageButtonClick = () => {
      activePageNumber = pageNumber;
      // eslint-disable-next-line no-use-before-define
      render();
    };

    if (activePageNumber === pageNumber) {
      buttonEl.classList.add(
        'js-pagination__btn',
        'js-pagination__page',
        'js-pagination__btn_active'
      );
    } else {
      buttonEl.classList.add('js-pagination__btn', 'js-pagination__page');
    }
    buttonEl.addEventListener('click', handlerPageButtonClick);
    return buttonEl;
  };

  const createNextButton = () => {
    const nextButton = document.createElement('button');
    nextButton.classList.add('js-pagination__btn', 'js-pagination__btn-next');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = 'arrow_forward';

    if (activePageNumber === totalPage) {
      nextButton.setAttribute('disable', true);
    } else {
      const handlerNextButtonClick = () => {
        activePageNumber += 1;
        // eslint-disable-next-line no-use-before-define
        render();
      };
      nextButton.addEventListener('click', handlerNextButtonClick);
    }
    return nextButton;
  };

  const createDotsIcon = () => {
    const dotsIconEl = document.createElement('i');
    dotsIconEl.textContent = '...';
    dotsIconEl.classList.add('js-pagination__dots');
    return dotsIconEl;
  };

  const getMiddle = () => {
    const result = [];
    const leftPageNumber = activePageNumber - 1;
    const rightPageNumber = activePageNumber + 1;

    switch (activePageNumber) {
      case 1:
      case 2:
        result.push(createPageButton(2));
        result.push(createPageButton(3));
        result.push(createDotsIcon());
        break;
      case 3:
        result.push(createPageButton(leftPageNumber));
        result.push(createPageButton(activePageNumber));
        result.push(createPageButton(rightPageNumber));
        result.push(createDotsIcon());
        break;
      case totalPage - 1:
        result.push(createDotsIcon());
        result.push(createPageButton(leftPageNumber));
        result.push(createPageButton(activePageNumber));
        break;
      case totalPage - 2:
        result.push(createDotsIcon());
        result.push(createPageButton(leftPageNumber));
        result.push(createPageButton(activePageNumber));
        result.push(createPageButton(rightPageNumber));
        break;
      case totalPage:
        result.push(createDotsIcon());
        result.push(createPageButton(activePageNumber - 2));
        result.push(createPageButton(leftPageNumber));
        break;

      default:
        result.push(createDotsIcon());
        result.push(createPageButton(leftPageNumber));
        result.push(createPageButton(activePageNumber));
        result.push(createPageButton(rightPageNumber));
        result.push(createDotsIcon());
    }
    return result;
  };

  const render = () => {
    containerEl.innerHTML = '';
    if (totalPage <= PAGINATION_BUTTONS_COUNT) {
      const buttons = [];
      const nextButton = createNextButton();
      for (let i = FIRST_PAGE_NUMBER; i <= totalPage; i += 1) {
        buttons.push(createPageButton(i));
      }
      containerEl.append(...buttons, nextButton);
    } else {
      const firstButton = createPageButton(FIRST_PAGE_NUMBER);
      const lastButton = createPageButton(totalPage);
      const middleButtons = getMiddle();
      const nextButton = createNextButton();
      containerEl.append(firstButton, ...middleButtons, lastButton, nextButton);
    }
    updateText();
  };

  render();
};

export { initPagination };
