export const countParagraphs = (sentence) => {
  let count = 1;
  for (const char of sentence) {
    if (char === ".") {
      count++;
    }
  }
  return `Paragraphs: ${count}`;
};
