export const findLongestWord = (sentence: string): string => {
  const words = sentence.split(/\s+/).filter(Boolean);
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return `Longest Word: ${longest} (${longest.length} chars)`;
};