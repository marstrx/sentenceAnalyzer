const findLongestWordLengt=(sentence)=>{
    let words = sentence.split(/\s+/);
    let longestWord ="";

    for(let word of words){
        if(word.length > words.length){
            longestWord = word ;
        }
    }

    return `Longest word : ${longestWord}`
}


export default findLongestWordLengt;