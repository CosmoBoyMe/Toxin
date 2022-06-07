import { GuestDropdown } from './GuestDropdown';

const dropdownElements = document.querySelectorAll('.js-guest-dropdown');
dropdownElements.forEach((element) => new GuestDropdown(element));
