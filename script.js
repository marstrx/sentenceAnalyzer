// count words 
const countWords=(sentence)=> {
    const countWords = sentence.trim().split(/\s+/);
    return `words :${countWords.length}`;
}

console.log(countWords("hello world Marstrx"));

// count all chars nums sym but no spaces
const countAllThingsExSpcs=(sentence)=>{
    const removeSpaces = sentence.replaceAll(" ","");
    const allThingsExSpcs = removeSpaces.length;
    return `Chars : ${allThingsExSpcs}`;
}

console.log(countAllThingsExSpcs("hello world Marstrx"));

// count numbers in the sentence

const countNumbers=(sentence)=>{
    const numbers = "0123456789";
    let count =0;
    for(const chars of sentence){
        if(numbers.includes(chars)){
            count++;
        }
    }
    return `Numers : ${count}` ;
}

console.log(countNumbers("hello world Marstrx2025"));

// count paragraphs 

const countParagraphs=(sentence)=>{
    let count =1;
    for(const chars of sentence){
        if(chars === "."){
            count++;
        }
    }
    return `Paragraphs : ${count}` ;
}

console.log(countParagraphs("hello world . Marstrx2025 . Marstrx2025"));


// count vowels
const countVowels=(sentence)=>{
    const vowels = "aeiou";
    let count =0;
    for(const chars of sentence.toLowerCase()){
        if(vowels.includes(chars)){
            count++;
        }
    }
    return `Vowels : ${count}`;
}

console.log(countVowels("hello world Marstrx2025"));
