class LikeBtn {
  constructor(element) {
    const countEl = element.querySelector('.js-like-btn__count');
    this.elements = {
      element,
      countEl,
    };
    this.bindLikeBtnListener();
  }

  handlerLikeBtnClick = (event) => {
    const { currentTarget } = event;
    const { countEl } = this.elements;
    const currentCount = Number(countEl.textContent);

    if (currentTarget.classList.contains('like-btn_liked')) {
      currentTarget.classList.remove('like-btn_liked');
      countEl.textContent = currentCount - 1;
    } else {
      currentTarget.classList.add('like-btn_liked');
      countEl.textContent = currentCount + 1;
    }
  };

  bindLikeBtnListener() {
    this.elements.element.addEventListener('click', this.handlerLikeBtnClick);
  }
}

export { LikeBtn };
