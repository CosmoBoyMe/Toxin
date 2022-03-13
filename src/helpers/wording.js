const wording = (value, words) => {
  if (value === 0) {
    return '';
  }
  const num = Math.abs(value) % 100;
  const num1 = num % 10;
  if (num > 10 && num < 20) return `${value} ${words[2]}`;
  if (num1 > 1 && num1 < 5) return `${value} ${words[1]}`;
  if (num1 == 1) return `${value} ${words[0]}`;
  return `${value} ${words[2]}`;
};
export { wording };
