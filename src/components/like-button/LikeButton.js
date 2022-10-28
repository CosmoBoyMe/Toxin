class LikeButton {
  constructor(element) {
    const countElement = element.querySelector('.js-like-button__count');
    this.elements = {
      element,
      countElement,
    };
    this.bindLikeButtonListener();
  }

  handleLikeButtonClick = (event) => {
    const { currentTarget } = event;
    const { countElement } = this.elements;
    const currentCount = Number(countElement.textContent);

    if (currentTarget.classList.contains('like-button_liked')) {
      currentTarget.classList.remove('like-button_liked');
      countElement.textContent = currentCount - 1;
    } else {
      currentTarget.classList.add('like-button_liked');
      countElement.textContent = currentCount + 1;
    }
  };

  bindLikeButtonListener() {
    this.elements.element.addEventListener('click', this.handleLikeButtonClick);
  }
}

export { LikeButton };
