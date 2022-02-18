import AirDatepicker from 'air-datepicker';

const initDatePicker = (elementId, settings = {}) => {
  const { onClickApplyBtnHandler, newOpts = {} } = settings;
  const containerEl = document.getElementById(elementId);

  const datePickerInstance = new AirDatepicker(containerEl, {
    range: true,
    buttons: [
      {
        content: 'очистить',
        attrs: { type: 'button' },
        onClick: (dpInstance) => dpInstance.clear(),
      },
      {
        content: 'Применить',
        attrs: { type: 'button' },
        onClick: (dpInstance) => {
          if (onClickApplyBtnHandler) {
            return onClickApplyBtnHandler();
          }
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

export { initDatePicker };
