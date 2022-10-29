import wNumb from 'wnumb';

class CardHeaderInfo {
  constructor(element) {
    this.element = element;
    this.cardPriceElement = element.querySelector('.js-card-header-info__value');
    this.init();
  }

  formatCardPrice() {
    const { cardPriceElement } = this;

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
