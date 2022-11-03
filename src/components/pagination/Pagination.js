const FIRST_PAGE_NUMBER = 1;
const PAGINATION_BUTTONS_COUNT = 5;

class Pagination {
  constructor(element) {
    this.element = element;
    this.activePageNumber = 1;
    this.init();
  }

  updateText() {
    const { activePageNumber, itemsPerPage, totalItemsCount, paginationTextCounterElement } = this;
    const lastItem = activePageNumber * itemsPerPage;
    const lastItemsNumber = lastItem > totalItemsCount ? totalItemsCount : lastItem;
    const totalCountText = totalItemsCount > 100 ? '100+' : totalItemsCount;

    paginationTextCounterElement.textContent = `${
      itemsPerPage * (activePageNumber - 1) + 1
    } - ${lastItemsNumber} из ${totalCountText}`;
  }

  createPageButton(pageNumber) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = pageNumber;
    buttonElement.classList.add('js-pagination__button', 'js-pagination__page');
    const handlePageButtonClick = () => {
      this.activePageNumber = pageNumber;
      this.render();
    };

    if (this.activePageNumber === pageNumber) {
      buttonElement.classList.add(
        'js-pagination__button',
        'js-pagination__page',
        'js-pagination__button_active'
      );
    } else {
      buttonElement.classList.add('js-pagination__button', 'js-pagination__page');
    }

    buttonElement.addEventListener('click', handlePageButtonClick);
    return buttonElement;
  }

  handleNextButtonClick = () => {
    this.activePageNumber += 1;
    this.render();
  };

  createNextButton() {
    const { activePageNumber, totalPage } = this;
    const nextButton = document.createElement('button');
    nextButton.classList.add('js-pagination__button', 'js-pagination__button-next');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = 'arrow_forward';

    if (activePageNumber === totalPage) {
      nextButton.setAttribute('disable', true);
    } else {
      nextButton.addEventListener('click', this.handleNextButtonClick);
    }
    return nextButton;
  }

  // eslint-disable-next-line class-methods-use-this
  createDotsIcon() {
    const dotsIconElement = document.createElement('span');
    dotsIconElement.textContent = '...';
    dotsIconElement.classList.add('js-pagination__dots');
    return dotsIconElement;
  }

  createMiddle() {
    const { activePageNumber, totalPage } = this;
    const result = [];
    const leftPageNumber = activePageNumber - 1;
    const rightPageNumber = activePageNumber + 1;

    switch (activePageNumber) {
      case 1:
      case 2:
        result.push(this.createPageButton(2));
        result.push(this.createPageButton(3));
        result.push(this.createDotsIcon());
        break;
      case 3:
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        result.push(this.createDotsIcon());
        break;
      case totalPage - 1:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(activePageNumber));
        break;
      case totalPage - 2:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        break;
      case totalPage:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(activePageNumber - 2));
        result.push(this.createPageButton(leftPageNumber));
        break;

      default:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        result.push(this.createDotsIcon());
    }
    return result;
  }

  render() {
    const { totalPage, buttonsContainerElement } = this;

    buttonsContainerElement.innerHTML = '';
    if (totalPage <= PAGINATION_BUTTONS_COUNT) {
      const buttons = [];
      const nextButton = this.createNextButton();
      for (let i = FIRST_PAGE_NUMBER; i <= totalPage; i += 1) {
        buttons.push(this.createPageButton(i));
      }
      buttonsContainerElement.append(...buttons, nextButton);
    } else {
      const firstButton = this.createPageButton(FIRST_PAGE_NUMBER);
      const lastButton = this.createPageButton(totalPage);
      const middleButtons = this.createMiddle();
      const nextButton = this.createNextButton();
      buttonsContainerElement.append(firstButton, ...middleButtons, lastButton, nextButton);
    }
    this.updateText();
  }

  init() {
    this.buttonsContainerElement = this.element.querySelector('.js-pagination__buttons');
    this.paginationTextCounterElement = this.element.querySelector('.js-pagination__text-counter');

    const totalItemsData = this.element.getAttribute('data-totalItems');
    const itemsPerPageData = this.element.getAttribute('data-itemsPerPage');

    this.totalItemsCount = Number(totalItemsData);
    this.itemsPerPage = Number(itemsPerPageData);
    this.totalPage = Math.ceil(this.totalItemsCount / this.itemsPerPage);
    this.render();
  }
}

export { Pagination };
