// count words 
const countWords=(sentence)=> {
    const countWords = sentence.trim().split(/\s+/);
    return countWords.length;
}

console.log(countWords("hello world Marstrx"));

// count all chars nums sym but no spaces
const countAllThingsExSpcs=(sentence)=>{
    const removeSpaces = sentence.replaceAll(" ","");
    const allThingsExSpcs = removeSpaces.length;
    return allThingsExSpcs;
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
    return count ;
}

console.log(countNumbers("hello world Marstrx2025"));