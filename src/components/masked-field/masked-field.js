import Inputmask from 'inputmask';

class MaskedField {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    new Inputmask({
      alias: 'datetime',
      placeholder: 'ДД.ММ.ГГГГ',
      inputFormat: 'dd.mm.yyyy',
    }).mask(this.element);
  }
}

export { MaskedField };
