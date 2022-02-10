//document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById(`count-el`);

//console.log(countEl);

//this asks javascript to give us the element by id for count-el
//which lets us interact with it

//listen for clicks when button is pressed and increment the count variable when button is clicked
let count = 0;
function increment() {
  //console.log(`Test`);
  count += 1;
  countEl.textContent = count;
  //console.log(count);
}
//so u start count at 0 then u make
//the increment function
//where count is = to count + 1
//I put the console.log above it to test it out to
//make sure that each time I hit the button it said
//Test. That way I knew if I put the function in it
//would work

//display the count
let saveEl = document.getElementById(`save-el`);

function save() {
  let countStr = count + " , ";
  saveEl.textContent = saveEl.textContent + countStr;
  countEl.textContent = count = 0;
}

function reset() {
  countEl.textContent = count = 0;
}

function resetall() {
  saveEl.textContent = count = 0;
  countEl.textContent = count = 0;
  addEl.textContent = count = 0;
}
let addEl = document.getElementById(`add-el`);
function addall() {
  addEl.textContent = parseInt(saveEl.textContent);
  for (let i = 0; i < addEl.textContent.length; i++) {
    return addEl.textContent + addEl.textContent;
  }

  var audio = new Audio("clicknoise.mp3");

  document.onclick = function () {
    audio.play();
  };
}
