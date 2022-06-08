import wNumb from 'wnumb';

class CardHeaderInfo {
  constructor(element) {
    const cardPriceEl = element.querySelector('.js-card-header-info__value');
    this.elements = {
      cardPriceEl,
      element,
    };
    this.init();
  }

  formatCardPrice() {
    const { cardPriceEl } = this.elements;

    const priceFormat = wNumb({
      thousand: ' ',
      suffix: '₽',
    });
    const cardPriceValue = Number(cardPriceEl.textContent);
    const formattedCardPriceValue = priceFormat.to(cardPriceValue);
    cardPriceEl.textContent = formattedCardPriceValue;
  }

  init() {
    this.formatCardPrice();
  }
}

export { CardHeaderInfo };
