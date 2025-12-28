export const findLongestWord = (sentence) => {
  const words = sentence.split(/\s+/);
  let longest = "";
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return `Longest Word: ${longest} (${longest.length} chars)`;
};
