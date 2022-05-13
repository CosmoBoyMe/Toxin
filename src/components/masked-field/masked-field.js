import Inputmask from 'inputmask';

const maskedInputEl = document.querySelector('.js-masked-field__input');

Inputmask({
  alias: 'datetime',
  placeholder: 'ДД.ММ.ГГГГ',
  inputFormat: 'dd.mm.yyyy',
}).mask(maskedInputEl);
