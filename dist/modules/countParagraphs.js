export const countParagraphs = (text) => {
    const paragraphs = text.trim().split(/\n+/).filter(Boolean);
    return `Paragraphs: ${paragraphs.length}`;
};
//# sourceMappingURL=countParagraphs.js.map