export const countWords = (sentence) => {
  const words = sentence.trim().split(/\s+/);
  return `Words: ${words.length}`;
};
