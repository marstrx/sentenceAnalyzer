const text = document.getElementById("text");
const wordCountResult = document.getElementById("wordCountResult");
const countBtn = document.getElementById("countBtn");



countBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let textValue = text.value.trim().split(/\s+/).length;
    console.log(textValue);
    
    wordCountResult.innerHTML = textValue ;

})