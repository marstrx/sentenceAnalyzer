import { countWords } from "./modules/countWords.js";
import { countCharacters } from "./modules/countCharacters.js";
import { countNumbers } from "./modules/countNumbers.js";
import { countParagraphs } from "./modules/countParagraphs.js";
import { countVowels } from "./modules/countVowels.js";
import { findLongestWord } from "./modules/findLongestWord.js";
import { calculateReadingTime } from "./modules/calculateReadingTime.js";
import { countSentences } from "./modules/countSentences.js";
import { averageWordLength } from "./modules/averageWordLength.js";
import { countConsonants } from "./modules/countConsonants.js";

const textInput = document.getElementById("textInput") as HTMLTextAreaElement;
const resultsContainer = document.getElementById("results") as HTMLDivElement;

function analyzeText(text: string): void {
  if (!text.trim()) {
    resultsContainer.innerHTML =
      '<p class="placeholder">Enter text to analyze...</p>';
    return;
  }

  const readingTime: string = calculateReadingTime(text);
  const results: string[] = [
    `Reading Time: ${readingTime}`,
    countWords(text),
    countCharacters(text),
    countSentences(text),
    countNumbers(text),
    countParagraphs(text),
    countVowels(text),
    countConsonants(text),
    averageWordLength(text),
    findLongestWord(text),
  ];

  resultsContainer.innerHTML = results
    .map(
      (result, index) =>
        `<p${index === 0 ? ' class="reading-time"' : ""}>${result}</p>`
    )
    .join("");
}

textInput.addEventListener("input", (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  analyzeText(target.value);
});

analyzeText("");
