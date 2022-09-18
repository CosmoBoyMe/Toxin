/* eslint-disable prefer-destructuring */
const wording = (value, words, withValue=true) => {
  if (value === 0) {
    return '';
  }
  const num = Math.abs(value) % 100;
  const num1 = num % 10;
  let word = words[2];
  if (num > 10 && num < 20) word = words[2]
  else if (num1 > 1 && num1 < 5) word = words[1];
  else if (num1 === 1) word = words[0];
  if (withValue) return `${value} ${word}`;
  return word;
};
export { wording };
