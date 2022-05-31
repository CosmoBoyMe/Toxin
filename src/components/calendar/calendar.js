import { initDatePicker } from '../datepicker/datepicker';

const initCalendar = (element, datePickerId) => {
  const calendarEl = element.querySelector('.js-calendar');
  const datePickerEl = element.querySelector('.js-calendar__date-picker');
  const fieldElements = element.querySelectorAll('.js-calendar__field');
  const inputElements = element.querySelectorAll('input');
  const type = calendarEl.getAttribute('data-type');

  const datePickerToggleHandler = () => {
    datePickerEl.classList.toggle('js-calendar__date-picker_close');
  };

  const initOutsideClick = () => {
    const handlerOutsideClick = (event) => {
      if (!element.contains(event.target)) {
        datePickerEl.classList.add('js-calendar__date-picker_close');
      }
    };
    datePickerEl.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.addEventListener('click', handlerOutsideClick);
  };

  fieldElements.forEach((field) => {
    field.addEventListener('click', datePickerToggleHandler);
  });

  if (type === 'multiple') {
    const onSelect = ({ formattedDate }) => {
      const [firstDate, lastDate] = formattedDate;
      const [firstInputEl, lastInputEl] = inputElements;
      firstInputEl.value = firstDate ?? '';
      lastInputEl.value = lastDate ?? '';
    };

    const dateFormat = (date) =>
      date.toLocaleString('ru', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
      });

    initDatePicker(datePickerId, {
      onClickApplyBtnHandler: datePickerToggleHandler,
      newOpts: { onSelect, dateFormat },
    });
  } else {
    const onSelect = ({ formattedDate }) => {
      const inputElement = inputElements[0];
      const formattedDateValue = formattedDate.join(' - ');
      inputElement.value = formattedDateValue;
    };

    initDatePicker(datePickerId, {
      onClickApplyBtnHandler: datePickerToggleHandler,
      newOpts: {
        onSelect,
      },
    });
  }
  initOutsideClick();
};

export { initCalendar };
