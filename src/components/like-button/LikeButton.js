class LikeButton {
  constructor(element) {
    this.element = element;
    this.init();
  }

  handleLikeButtonClick = ({ currentTarget }) => {
    const currentCount = Number(this.countElement.textContent);

    if (currentTarget.classList.contains('like-button_liked')) {
      currentTarget.classList.remove('like-button_liked');
      this.countElement.textContent = currentCount - 1;
    } else {
      currentTarget.classList.add('like-button_liked');
      this.countElement.textContent = currentCount + 1;
    }
  };

  bindLikeButtonListener() {
    this.element.addEventListener('click', this.handleLikeButtonClick);
  }

  init() {
    this.countElement = this.element.querySelector('.js-like-button__count');
    this.bindLikeButtonListener();
  }
}

export { LikeButton };
