const STAR_ICON_NAME = 'star';
const STAR_WITH_BORDER_ICON_NAME = 'star_border';

class Rate {
  constructor(element) {
    this.element = element;
    this.init();
  }

  handleStarIconClick = (event, index) => {
    const { starCounts, starIconElements } = this;

    const { target } = event;
    const text = target.textContent;
    if (text === STAR_ICON_NAME) {
      for (let i = index + 1; i < starCounts; i += 1) {
        starIconElements[i].textContent = STAR_WITH_BORDER_ICON_NAME;
      }
    } else {
      for (let i = index; i >= 0; i -= 1) {
        starIconElements[i].textContent = STAR_ICON_NAME;
      }
    }
  };

  bindStarIconsListeners() {
    this.starIconElements.forEach((element, index) =>
      element.addEventListener('click', (event) => this.handleStarIconClick(event, index))
    );
  }

  init() {
    this.starIconElements = this.element.querySelectorAll('.js-rate__icon');

    this.starCounts = this.starIconElements.length;
    this.bindStarIconsListeners();
  }
}

export { Rate };
