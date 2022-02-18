import { initDatePicker } from '../datepicker/datepicker';

const initCalender = (calenderId, datePickerId, type = '') => {
  const calenderEl = document.getElementById(calenderId);
  const datePickerEl = calenderEl.querySelector('.calender__date-picker');
  const fieldElements = calenderEl.querySelectorAll('.calender__field-js');
  const inputElements = calenderEl.querySelectorAll('input');

  const datePickerToogleHandler = () => {
    datePickerEl.classList.toggle('calender__date-picker--close');
  };

  const onClickOut = () => {
    datePickerEl.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.addEventListener('click', (event) => {
      if (!calenderEl.contains(event.target)) {
        datePickerEl.classList.add('calender__date-picker--close');
      }
    });
  };

  fieldElements.forEach((field) => {
    field.addEventListener('click', datePickerToogleHandler);
  });

  if (type === 'multiple') {
    const onSelect = ({ date, formattedDate, datePicker }) => {
      const [firstDate, lastDate] = formattedDate;
      const [firstInputEl, lastInputdEl] = inputElements;
      firstInputEl.value = firstDate ?? '';
      lastInputdEl.value = lastDate ?? '';
    };

    const dateFormat = (date) => {
      return date.toLocaleString('ru', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
      });
    };

    initDatePicker(datePickerId, { onClickApplyBtnHandler: datePickerToogleHandler, newOpts: { onSelect, dateFormat } });
  } else {
    const onSelect = ({ date, formattedDate, datePicker }) => {
      const inputElement = inputElements[0];
      const formattedDateValue = formattedDate.join(' - ');
      inputElement.value = formattedDateValue;
    };

    initDatePicker(datePickerId, {
      onClickApplyBtnHandler: datePickerToogleHandler,
      newOpts: {
        onSelect,
      },
    });
  }

  onClickOut();
};

export { initCalender };
