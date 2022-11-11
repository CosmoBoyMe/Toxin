const FIRST_PAGE_NUMBER = 1;
const PAGINATION_BUTTONS_COUNT = 5;

class Pagination {
  constructor(element) {
    this.element = element;
    this.activePageNumber = 1;
    this.init();
  }

  updateText() {
    const lastItem = this.activePageNumber * this.itemsPerPage;
    const lastItemsNumber = lastItem > this.totalItemsCount ? this.totalItemsCount : lastItem;
    const totalCountText = this.totalItemsCount > 100 ? '100+' : this.totalItemsCount;

    this.paginationTextCounterElement.textContent = `${
      this.itemsPerPage * (this.activePageNumber - 1) + 1
    } - ${lastItemsNumber} из ${totalCountText}`;
  }

  createPageButton(pageNumber) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = pageNumber;
    buttonElement.classList.add('pagination__button');
    const handlePageButtonClick = () => {
      this.activePageNumber = pageNumber;
      this.render();
    };

    if (this.activePageNumber === pageNumber) {
      buttonElement.classList.add('pagination__button_active');
    }

    buttonElement.addEventListener('click', handlePageButtonClick);
    return buttonElement;
  }

  handleNextButtonClick = () => {
    this.activePageNumber += 1;
    this.render();
  };

  createNextButton() {
    const nextButton = document.createElement('button');
    nextButton.classList.add('pagination__button', 'pagination__button_type_next');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = 'arrow_forward';

    if (this.activePageNumber === this.totalPage) {
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
    dotsIconElement.classList.add('pagination__dots');
    return dotsIconElement;
  }

  createMiddle() {
    const result = [];
    const leftPageNumber = this.activePageNumber - 1;
    const rightPageNumber = this.activePageNumber + 1;

    switch (this.activePageNumber) {
      case 1:
      case 2:
        result.push(this.createPageButton(2));
        result.push(this.createPageButton(3));
        result.push(this.createDotsIcon());
        break;
      case 3:
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(this.activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        result.push(this.createDotsIcon());
        break;
      case this.totalPage - 1:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(this.activePageNumber));
        break;
      case this.totalPage - 2:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(this.activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        break;
      case this.totalPage:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(this.activePageNumber - 2));
        result.push(this.createPageButton(leftPageNumber));
        break;

      default:
        result.push(this.createDotsIcon());
        result.push(this.createPageButton(leftPageNumber));
        result.push(this.createPageButton(this.activePageNumber));
        result.push(this.createPageButton(rightPageNumber));
        result.push(this.createDotsIcon());
    }
    return result;
  }

  render() {
    this.buttonsContainerElement.innerHTML = '';
    if (this.totalPage <= PAGINATION_BUTTONS_COUNT) {
      const buttons = [];
      const nextButton = this.createNextButton();
      for (let i = FIRST_PAGE_NUMBER; i <= this.totalPage; i += 1) {
        buttons.push(this.createPageButton(i));
      }
      this.buttonsContainerElement.append(...buttons, nextButton);
    } else {
      const firstButton = this.createPageButton(FIRST_PAGE_NUMBER);
      const lastButton = this.createPageButton(this.totalPage);
      const middleButtons = this.createMiddle();
      const nextButton = this.createNextButton();
      this.buttonsContainerElement.append(firstButton, ...middleButtons, lastButton, nextButton);
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
