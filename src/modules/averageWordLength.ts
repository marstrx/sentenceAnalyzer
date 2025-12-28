export const averageWordLength = (text: string): string => {
  const words: string[] = text
    .trim()
    .split(/\s+/)
    .filter((word: string) => word.length > 0);

  if (words.length === 0) {
    return "Avg Word Length: 0";
  }

  const totalChars: number = words.reduce(
    (sum: number, word: string) => sum + word.length,
    0
  );

  const average: string = (totalChars / words.length).toFixed(2);

  return `Avg Word Length: ${average}`;
};