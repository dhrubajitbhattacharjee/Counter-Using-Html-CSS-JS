  

count = 0
let countEl=document.getElementById("count-el")
function increment(){
    console.log("the button was clicked") 
    count++
    countEl.innerText=count
}
