export const countVowels = (sentence: string): string => {
  const vowels = "aeiou";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return `Vowels: ${count}`;
};