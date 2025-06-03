const text = document.getElementById("text");
const wordCountResult = document.getElementById("wordCountResult");
const countBtn = document.getElementById("countBtn");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


countBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(text.value.trim() === "") {
        return wordCountResult.innerHTML = "Please enter some text.";
    }
    let textValue = text.value.trim().split(/\s+/).length;
    console.log(textValue);
    
    wordCountResult.innerHTML = textValue ;

})

// searchBtn.addEventListener("click", (e) => {
//     let word = searchInput.value.trim();
//     let textValue = text.value.trim();
//     e.preventDefault();
//     if (textValue === "") {
//         return wordCountResult.innerHTML = "Please enter some text.";
//     }
//     const searchTerm = searchInput.value.trim();
//     if (searchTerm === "") {
//         return wordCountResult.innerHTML = "Please enter a word to search.";
//     }

//     const regex = new RegExp(`\\b(${word})\\b`,"gi");
    
    
    
// })