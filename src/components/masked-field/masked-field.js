import Inputmask from 'inputmask';

const maskedInputElements = document.querySelectorAll('.js-masked-field__input');

maskedInputElements.forEach((element) => {
  Inputmask({
    alias: 'datetime',
    placeholder: 'ДД.ММ.ГГГГ',
    inputFormat: 'dd.mm.yyyy',
  }).mask(element);
});
