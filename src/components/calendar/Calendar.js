import AirDatepicker from 'air-datepicker';

class Calendar {
  constructor(element) {
    this.element = element;
    this.datePickerElement = element.querySelector('.js-calendar__date-picker');
    this.fieldElements = element.querySelectorAll('.js-calendar__field');
    this.inputElements = element.querySelectorAll('input');

    this.type = element.getAttribute('data-type');
    this.selectedDates = [...this.inputElements].map((input) => input.getAttribute('data-date'));
    this.init();
  }

  initDatePicker() {
    const { type, datePickerElement, inputElements } = this;

    let options = {};
    const defaultOptions = {
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
          onClick: () => this.toggleCloseDatePicker(),
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
    };

    if (type === 'multiple') {
      const onSelect = ({ formattedDate }) => {
        inputElements.forEach((input, index) => {
          const value = formattedDate[index] ?? '';
          input.value = value; // eslint-disable-line no-param-reassign
          input.dataset.date = value; // eslint-disable-line no-param-reassign
        });
      };

      const dateFormat = (date) =>
        date.toLocaleString('ru', {
          year: 'numeric',
          day: '2-digit',
          month: '2-digit',
        });

      options = {
        onSelect,
        dateFormat,
      };
    } else if (type === 'single') {
      const onSelect = ({ formattedDate }) => {
        const inputElement = inputElements[0];
        const formattedDateValue = formattedDate.join(' - ');
        inputElement.value = formattedDateValue;
      };

      options = {
        onSelect,
      };
    }

    const airDatepicker = new AirDatepicker(datePickerElement, { ...defaultOptions, ...options });
    airDatepicker.selectDate(this.selectedDates);
  }

  handleDocumentClick = (event) => {
    const { element, datePickerElement } = this;
    if (!element.contains(event.target)) {
      datePickerElement.classList.add('calendar__date-picker_closed');
      document.removeEventListener('click', this.handleDocumentClick);
    }
  };

  handleFieldClick = () => {
    this.toggleCloseDatePicker();
    document.addEventListener('click', this.handleDocumentClick);
  };

  toggleCloseDatePicker() {
    this.datePickerElement.classList.toggle('calendar__date-picker_closed');
  }

  bindEventListeners() {
    this.fieldElements.forEach((field) => {
      field.addEventListener('click', this.handleFieldClick);
    });
  }

  init() {
    this.initDatePicker();
    this.bindEventListeners();
  }
}

export { Calendar };
