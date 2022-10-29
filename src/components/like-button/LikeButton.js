class LikeButton {
  constructor(element) {
    this.element = element;
    this.countElement = element.querySelector('.js-like-button__count');
    this.bindLikeButtonListener();
  }

  handleLikeButtonClick = (event) => {
    const { currentTarget } = event;
    const { countElement } = this;
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
    this.element.addEventListener('click', this.handleLikeButtonClick);
  }
}

export { LikeButton };
