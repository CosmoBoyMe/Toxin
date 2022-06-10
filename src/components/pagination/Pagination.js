const FIRST_PAGE_NUMBER = 1;
const PAGINATION_BUTTONS_COUNT = 5;

class Pagination {
  constructor(element) {
    const totalItemsData = element.getAttribute('data-totalItems');
    const itemsPerPageData = element.getAttribute('data-itemsPerPage');
    const buttonsContainerEl = element.querySelector('.js-pagination__buttons');
    const paginationTextCounterEl = element.querySelector('.js-pagination__text-counter');

    const totalItemsCount = Number(totalItemsData);
    const itemsPerPage = Number(itemsPerPageData);
    const totalPage = Math.ceil(totalItemsCount / itemsPerPage);

    this.totalItemsCount = totalItemsCount;
    this.itemsPerPage = itemsPerPage;
    this.totalPage = totalPage;
    this.elements = { buttonsContainerEl, paginationTextCounterEl };
    this.activePageNumber = 1;
    this.render();
  }

  updateText() {
    const { activePageNumber, itemsPerPage, totalItemsCount, elements } = this;
    const lastItem = activePageNumber * itemsPerPage;
    const lastItemsNumber = lastItem > totalItemsCount ? totalItemsCount : lastItem;
    const totalCountText = totalItemsCount > 100 ? '100+' : totalItemsCount;

    elements.paginationTextCounterEl.textContent = `${
      itemsPerPage * (activePageNumber - 1) + 1
    } - ${lastItemsNumber} из ${totalCountText}`;
  }

  createPageButton(pageNumber) {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = pageNumber;
    buttonEl.classList.add('js-pagination__btn', 'js-pagination__page');
    const handlerPageButtonClick = () => {
      this.activePageNumber = pageNumber;
      this.render();
    };

    if (this.activePageNumber === pageNumber) {
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
  }

  createNextButton() {
    const { activePageNumber, totalPage } = this;
    const nextButton = document.createElement('button');
    nextButton.classList.add('js-pagination__btn', 'js-pagination__btn-next');
    nextButton.setAttribute('type', 'button');
    nextButton.textContent = 'arrow_forward';

    if (activePageNumber === totalPage) {
      nextButton.setAttribute('disable', true);
    } else {
      const handlerNextButtonClick = () => {
        this.activePageNumber += 1;
        this.render();
      };
      nextButton.addEventListener('click', handlerNextButtonClick);
    }
    return nextButton;
  }

  // eslint-disable-next-line class-methods-use-this
  createDotsIcon() {
    const dotsIconEl = document.createElement('span');
    dotsIconEl.textContent = '...';
    dotsIconEl.classList.add('js-pagination__dots');
    return dotsIconEl;
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
    const { totalPage, elements } = this;
    const { buttonsContainerEl } = elements;

    buttonsContainerEl.innerHTML = '';
    if (totalPage <= PAGINATION_BUTTONS_COUNT) {
      const buttons = [];
      const nextButton = this.createNextButton();
      for (let i = FIRST_PAGE_NUMBER; i <= totalPage; i += 1) {
        buttons.push(this.createPageButton(i));
      }
      buttonsContainerEl.append(...buttons, nextButton);
    } else {
      const firstButton = this.createPageButton(FIRST_PAGE_NUMBER);
      const lastButton = this.createPageButton(totalPage);
      const middleButtons = this.createMiddle();
      const nextButton = this.createNextButton();
      buttonsContainerEl.append(firstButton, ...middleButtons, lastButton, nextButton);
    }
    this.updateText();
  }
}

export { Pagination };
