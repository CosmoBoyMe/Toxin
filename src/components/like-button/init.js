import { LikeButton } from './LikeButton';

const likeButtonElements = document.querySelectorAll('.js-like-button');

likeButtonElements.forEach((element) => new LikeButton(element));
