import AirDatepicker from 'air-datepicker';

class Calendar {
  constructor(element) {
    this.element = element;
    this.init();
  }

  initDatePicker() {
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

    if (this.type === 'multiple') {
      const onSelect = ({ formattedDate }) => {
        this.inputElements.forEach((input, index) => {
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
    } else if (this.type === 'single') {
      const onSelect = ({ formattedDate }) => {
        const inputElement = this.inputElements[0];
        const formattedDateValue = formattedDate.join(' - ');
        inputElement.value = formattedDateValue;
      };

      options = {
        onSelect,
      };
    }

    const airDatepicker = new AirDatepicker(this.datePickerElement, {
      ...defaultOptions,
      ...options,
    });
    airDatepicker.selectDate(this.selectedDates);
  }

  handleDocumentClick = ({ target }) => {
    if (!this.element.contains(target)) {
      this.datePickerElement.classList.add('calendar__date-picker_closed');
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
    this.datePickerElement = this.element.querySelector('.js-calendar__date-picker');
    this.fieldElements = this.element.querySelectorAll('.js-calendar__field');
    this.inputElements = this.element.querySelectorAll('input');

    this.type = this.element.getAttribute('data-type');
    this.selectedDates = [...this.inputElements].map((input) => input.getAttribute('data-date'));

    this.initDatePicker();
    this.bindEventListeners();
  }
}

export { Calendar };
