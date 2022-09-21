import wNumb from 'wnumb';

class CardHeaderInfo {
  constructor(element) {
    const cardPriceElement = element.querySelector('.js-card-header-info__value');
    this.elements = {
      cardPriceElement,
      element,
    };
    this.init();
  }

  formatCardPrice() {
    const { cardPriceElement } = this.elements;

    const priceFormat = wNumb({
      thousand: ' ',
      suffix: '₽',
    });
    const cardPriceValue = Number(cardPriceElement.textContent);
    const formattedCardPriceValue = priceFormat.to(cardPriceValue);
    cardPriceElement.textContent = formattedCardPriceValue;
  }

  init() {
    this.formatCardPrice();
  }
}

export { CardHeaderInfo };
