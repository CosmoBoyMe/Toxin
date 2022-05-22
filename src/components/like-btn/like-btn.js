const likeBtnElements = document.querySelectorAll('.like-btn');

likeBtnElements.forEach((item) => {
  const handlerLikeBtnClick = (event) => {
    const { currentTarget } = event;
    const countEl = currentTarget.querySelector('.like-btn__count');
    const currentCount = Number(countEl.textContent);

    if (currentTarget.classList.contains('like-btn_liked')) {
      currentTarget.classList.remove('like-btn_liked');
      countEl.textContent = currentCount - 1;
    } else {
      currentTarget.classList.add('like-btn_liked');
      countEl.textContent = currentCount + 1;
    }
  };
  item.addEventListener('click', handlerLikeBtnClick);
});
