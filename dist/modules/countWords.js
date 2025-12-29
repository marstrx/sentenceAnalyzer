export const countWords = (sentence) => {
    const words = sentence.trim().split(/\s+/).filter(Boolean);
    return `Words: ${words.length}`;
};
//# sourceMappingURL=countWords.js.map