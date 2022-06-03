import AirDatepicker from 'air-datepicker';

const initDatePicker = (element, settings = {}) => {
  const { onClickApplyBtnHandler, newOpts = {} } = settings;
  const datePickerInstance = new AirDatepicker(element, {
    range: true,
    minDate: new Date(),
    buttons: [
      {
        content: 'очистить',
        attrs: { type: 'button' },
        onClick: (dpInstance) => dpInstance.clear(),
      },
      {
        content: 'Применить',
        attrs: { type: 'button' },
        onClick: () => {
          if (onClickApplyBtnHandler) {
            return onClickApplyBtnHandler();
          }
          return undefined;
        },
      },
    ],
    dateFormat(date) {
      return date.toLocaleString('ru', {
        day: '2-digit',
        month: 'short',
      });
    },
    prevHtml: '<span class="air-datepicker-prev"></span>',
    nextHtml: '<span class="air-datepicker-next"></span>',
    navTitles: { days: 'MMMM yyyy' },
  });

  datePickerInstance.update(newOpts);
};

const initCalendar = (calendarEl) => {
  const datePickerEl = calendarEl.querySelector('.js-calendar__date-picker');
  const fieldElements = calendarEl.querySelectorAll('.js-calendar__field');
  const inputElements = calendarEl.querySelectorAll('input');
  const type = calendarEl.getAttribute('data-type');

  const handlerDatePickerClick = () => {
    datePickerEl.classList.toggle('js-calendar__date-picker_close');
  };

  const initOutsideClick = () => {
    const handlerOutsideClick = (event) => {
      if (!calendarEl.contains(event.target)) {
        datePickerEl.classList.add('js-calendar__date-picker_close');
      }
    };
    datePickerEl.addEventListener('click', (event) => {
      event.stopPropagation();
    });
    document.addEventListener('click', handlerOutsideClick);
  };

  fieldElements.forEach((field) => {
    field.addEventListener('click', handlerDatePickerClick);
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

    initDatePicker(datePickerEl, {
      onClickApplyBtnHandler: handlerDatePickerClick,
      newOpts: { onSelect, dateFormat },
    });
    initOutsideClick();
  } else if (type === 'single') {
    const onSelect = ({ formattedDate }) => {
      const inputElement = inputElements[0];
      const formattedDateValue = formattedDate.join(' - ');
      inputElement.value = formattedDateValue;
    };

    initDatePicker(datePickerEl, {
      onClickApplyBtnHandler: handlerDatePickerClick,
      newOpts: {
        onSelect,
      },
    });
    initOutsideClick();
  } else {
    initDatePicker(datePickerEl);
  }
};

const calendarElements = document.querySelectorAll('.js-calendar');
calendarElements.forEach((calendarEl) => {
  initCalendar(calendarEl);
});
