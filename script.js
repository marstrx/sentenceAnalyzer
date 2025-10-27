// count words 
const countWords=(sentence)=> {
    const countWords = sentence.trim().split(/\s+/);
    return countWords.length;
}


console.log(countWords("hello world Marstrx"));