let count = 0;
let countEl = document.getElementById("count-el");

let saveEl = document.getElementById("save-el");


function increment(){
  count+=1;
  countEl.textContent = count;
}

function decrement(){
  count-=1;
  countEl.textContent = count;
}

function save() {
  let text = count + " -";
  saveEl.textContent += text;
  count = 0;
  countEl.textContent = count;
}
