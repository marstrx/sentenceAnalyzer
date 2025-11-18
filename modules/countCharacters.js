export const countCharacters = (sentence) => {
  const removeSpaces = sentence.replaceAll(" ", "");
  const allCharsExSpaces = removeSpaces.length;
  return `Characters: ${allCharsExSpaces}`;
};
