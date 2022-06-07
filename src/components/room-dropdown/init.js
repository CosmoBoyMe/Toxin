import { RoomDropdown } from './RoomDropdown';

const roomDropdownElements = document.querySelectorAll('.js-room-dropdown');
roomDropdownElements.forEach((element) => new RoomDropdown(element));
