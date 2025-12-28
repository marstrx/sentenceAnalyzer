export const countParagraphs = (text: string): string => {
  const paragraphs = text.trim().split(/\n+/).filter(Boolean);
  return `Paragraphs: ${paragraphs.length}`;
};
