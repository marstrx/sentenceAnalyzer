export const countConsonants = (text) => {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;
  for (const char of text.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return `Consonants: ${count}`;
};
