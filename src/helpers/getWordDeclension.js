/* eslint-disable prefer-destructuring */
const getWordDeclension = (value, words, withValue = true) => {
  if (value === 0) {
    return '';
  }
  const remainderOfDivisionByHundred = Math.abs(value) % 100;
  const remainderOfDivisionByTen = remainderOfDivisionByHundred % 10;
  let word = words[2];
  if (remainderOfDivisionByHundred > 10 && remainderOfDivisionByHundred < 20) word = words[2];
  else if (remainderOfDivisionByTen > 1 && remainderOfDivisionByTen < 5) word = words[1];
  else if (remainderOfDivisionByTen === 1) word = words[0];
  if (withValue) return `${value} ${word}`;
  return word;
};
export { getWordDeclension };
