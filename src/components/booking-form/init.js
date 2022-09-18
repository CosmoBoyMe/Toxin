import { BookingForm } from "./BookingForm";

const bookingFormElements = document.querySelectorAll('.js-booking-form');
bookingFormElements.forEach((element) => new BookingForm(element));