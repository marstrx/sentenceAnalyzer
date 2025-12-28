export const countConsonants = (text: string): string => {
  const count = Array.from(text.toLowerCase()).filter(char =>
    "bcdfghjklmnpqrstvwxyz".includes(char)
  ).length;

  return `Consonants: ${count}`;
};