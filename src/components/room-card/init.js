import { RoomCard } from './RoomCard';

const cardElements = document.querySelectorAll('.js-room-card');
cardElements.forEach((element) => new RoomCard(element));
