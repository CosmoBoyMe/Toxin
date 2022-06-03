const STAR_ICON_NAME = 'star';
const STAR_WITH_BORDER_ICON_NAME = 'star_border';

const initRate = (element) => {
  const starElements = element.querySelectorAll('.js-rate__icon');
  const starCounts = starElements.length;

  starElements.forEach((starElement, index) => {
    const handleStarClick = (event) => {
      const { target } = event;
      const text = target.textContent;
      if (text === STAR_ICON_NAME) {
        for (let i = index + 1; i < starCounts; i += 1) {
          starElements[i].textContent = STAR_WITH_BORDER_ICON_NAME;
        }
      } else {
        for (let i = index; i >= 0; i -= 1) {
          starElements[i].textContent = STAR_ICON_NAME;
        }
      }
    };
    starElement.addEventListener('click', handleStarClick);
  });
};

const rateElements = document.querySelectorAll('.js-rate');

rateElements.forEach((element) => {
  initRate(element);
});
