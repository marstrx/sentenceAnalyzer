export const countWords = (sentence: string): string => {
  const words = sentence.trim().split(/\s+/).filter(Boolean);
  return `Words: ${words.length}`;
};