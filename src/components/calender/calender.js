import { initDatePicker } from '../datepicker/datepicker';

const initCalender = (calenderId, datePickerId) => {
  const calenderEl = document.getElementById(calenderId);
  const datePickerContainerEl = calenderEl.querySelector('.calender__date-picker-container');
  const fieldElements = calenderEl.querySelectorAll('.calender__field-js');
  const inputElements = calenderEl.querySelectorAll('input');

  const datePickerToogleHandler = () => {
    datePickerContainerEl.classList.toggle('calender__date-picker-container--close');
  };

  const onClickOut = () => {
    document.addEventListener('click', (event) => {
      console.log(calenderEl.contains(event.target));
      if (!calenderEl.contains(event.target)) {
        datePickerContainerEl.classList.add('calender__date-picker-container--close');
      }
    });
  };

  fieldElements.forEach((field) => {
    field.addEventListener('click', datePickerToogleHandler);
  });

  const onSelectDate = ({ date, formattedDate, datePicker }) => {
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

  initDatePicker(datePickerId, { onClickApplyBtnHandler: datePickerToogleHandler, newOpts: { onSelectDate, dateFormat } });
  onClickOut();
};

export { initCalender };
