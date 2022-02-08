import AirDatepicker from 'air-datepicker';

const firstDateInputEl = document.querySelector('#first-date');
const lastDateInputEl = document.querySelector('#last-date');
const calenderDatePickerEl = document.querySelector('.calender__date-picker');
const dateFieldsElements = document.querySelectorAll('.date-field');

const calenderToogleHandler = () => {
  calenderDatePickerEl.classList.toggle('calender__date-picker--close');
};

const datePickerInstance = new AirDatepicker(calenderDatePickerEl, {
  visible: true,
  range: true,
  buttons: [
    'clear',
    {
      content: 'Применить',
      onClick: (dpInstance) => calenderToogleHandler(),
    },
  ],
  altField: lastDateInputEl,
  altFieldDateFormat: 'dd.MM.yyyy',
  dateFormat(date) {
    return date.toLocaleString('ru', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit',
    });
  },
  prevHtml: '<span class="air-datepicker-prev"></span>',
  nextHtml: '<span class="air-datepicker-next"></span>',
  navTitles: { days: 'MMMM yyyy' },
  onSelect({ date, formattedDate, datepicker }) {
    const [firstDate, lastDate] = formattedDate;
    firstDateInputEl.value = firstDate ?? '';
    lastDateInputEl.value = lastDate ?? '';
  },
});

dateFieldsElements.forEach((element) => {
  element.addEventListener('click', calenderToogleHandler);
});
