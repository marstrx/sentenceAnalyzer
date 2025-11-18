export const averageWordLength = (text) => {
  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  if (words.length === 0) return "Average Word Length: 0";

  const totalChars = words.reduce((sum, word) => sum + word.length, 0);
  const average = (totalChars / words.length).toFixed(2);

  return `Avg Word Length: ${average}`;
};
