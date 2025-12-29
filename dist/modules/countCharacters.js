export const countCharacters = (sentence) => {
    const removeSpaces = sentence.replaceAll(" ", "");
    return `Characters: ${removeSpaces.length}`;
};
//# sourceMappingURL=countCharacters.js.map