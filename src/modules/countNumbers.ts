export const countNumbers = (sentence) => {
  const numbers = "0123456789";
  let count = 0;
  for (const char of sentence) {
    if (numbers.includes(char)) {
      count++;
    }
  }
  return `Numbers: ${count}`;
};
