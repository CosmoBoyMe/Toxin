import wNumb from 'wnumb';

class CardHeaderInfo {
  constructor(element) {
    this.element = element;
    this.formatCardPrice();
  }

  formatCardPrice() {
    const cardPriceElement = this.element.querySelector('.js-card-header-info__value');
    const priceFormat = wNumb({
      thousand: ' ',
      suffix: '₽',
    });
    const cardPriceValue = Number(cardPriceElement.textContent);
    const formattedCardPriceValue = priceFormat.to(cardPriceValue);
    cardPriceElement.textContent = formattedCardPriceValue;
  }
}

export { CardHeaderInfo };
