import { countWords } from "./modules/countWords";
import { countCharacters } from "./modules/countCharacters";
import { countNumbers } from "./modules/countNumbers";
import { countParagraphs } from "./modules/countParagraphs";
import { countVowels } from "./modules/countVowels";
import { findLongestWord } from "./modules/findLongestWord";
import { calculateReadingTime } from "./modules/calculateReadingTime";
import { countSentences } from "./modules/countSentences";
import { averageWordLength } from "./modules/averageWordLength";
import { countConsonants } from "./modules/countConsonants";

const textInput = document.getElementById("textInput") as HTMLTextAreaElement;
const resultsContainer = document.getElementById("results") as HTMLDivElement;

function analyzeText(text :string) :void {
  if (!text.trim()) {
    resultsContainer.innerHTML =
      '<p class="placeholder">Enter text to analyze...</p>';
    return;
  }

  const readingTime :string = calculateReadingTime(text);
  const results :string[] = [
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
