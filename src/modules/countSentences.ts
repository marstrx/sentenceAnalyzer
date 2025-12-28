export const countSentences = (text) => {
  const sentences = text.match(/[.!?]+/g) || [];
  const count = sentences.length || 1;
  return `Sentences: ${count}`;
};
