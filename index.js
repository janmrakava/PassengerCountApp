let count = 0;
let countEl = document.getElementById("count-el");

console.log(countEl);


function increment(){
  count+=1;
  countEl.innerText = count;
  console.log(count);
}
