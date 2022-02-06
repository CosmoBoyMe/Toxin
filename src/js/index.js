import '../styles/index.scss';

const burger = document.querySelector('.header__nav-burger');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('header__nav-burger--active');
});
