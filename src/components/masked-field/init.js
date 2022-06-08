import { MaskedField } from './masked-field';

const maskedInputElements = document.querySelectorAll('.js-masked-field__input');

maskedInputElements.forEach((element) => new MaskedField(element));
