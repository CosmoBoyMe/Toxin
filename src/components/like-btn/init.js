import { LikeBtn } from './LikeBtn';

const likeBtnElements = document.querySelectorAll('.js-like-btn');

likeBtnElements.forEach((element) => new LikeBtn(element));
