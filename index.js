
let count=0
let countEl = document.getElementById('numberOfPeople');
let saveEl = document.getElementById('save-el');
function increment() {
    count += 1;
    countEl.innerText = count;
 
}
function save() {
    
    saveEl.innerText += "  "+count +" - ";
    
}
