import AirDatepicker from 'air-datepicker';

class Calendar {
  constructor(element) {
    const datePickerElement = element.querySelector('.js-calendar__date-picker');
    const fieldElements = element.querySelectorAll('.js-calendar__field');
    const inputElements = element.querySelectorAll('input');
    const type = element.getAttribute('data-type');

    this.elements = {
      element,
      datePickerElement,
      fieldElements,
      inputElements,
    };
    this.type = type;

    this.init();
  }

  initDatePicker() {
    const { type, elements } = this;
    const { inputElements } = elements;
    const { datePickerElement } = this.elements;

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
        const [firstDate, lastDate] = formattedDate;
        const [firstInputElement, lastInputElement] = inputElements;
        firstInputElement.value = firstDate ?? '';
        lastInputElement.value = lastDate ?? '';
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

    new AirDatepicker(datePickerElement, { ...defaultOptions, ...options }); // eslint-disable-line no-new
  }

  handleDocumentClick = (event) => {
    const { element, datePickerElement } = this.elements;
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
    const { datePickerElement } = this.elements;
    datePickerElement.classList.toggle('calendar__date-picker_closed');
  }

  bindEventListeners() {
    const { fieldElements } = this.elements;
    fieldElements.forEach((field) => {
      field.addEventListener('click', this.handleFieldClick);
    });
  }

  init() {
    this.initDatePicker();
    this.bindEventListeners();
  }
}

export { Calendar };
