import { MaskedField } from './MaskedField';

const maskedInputElements = document.querySelectorAll('.js-masked-field__input');

maskedInputElements.forEach((element) => new MaskedField(element));
