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