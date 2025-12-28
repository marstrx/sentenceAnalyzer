export const countCharacters = (sentence: string): string => {
  const removeSpaces = sentence.replaceAll(" ", "");
  return `Characters: ${removeSpaces.length}`;
};
