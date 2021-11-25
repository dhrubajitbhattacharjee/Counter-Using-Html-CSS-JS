let count = 0
let countEl = document.getElementById("count-el")
function increment() {
    console.log("the button was clicked")
    count++
    countEl.textContent = count

}

let saveEl = document.getElementById("save-el")
function save() {

    saveEl.textContent += count + " - "

}

function reset() {

    count = 0
    countEl.textContent = 0

}
