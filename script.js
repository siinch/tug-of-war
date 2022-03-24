setInterval(updateScore, 200);
setInterval(updateColor, 1000/60)

let score = 0;
let speed = 10;
let aButtonWasClicked = false;
let obj = document.body.appendChild(document.createElement("div"));
obj.style.position = "absolute";
obj.style.background = "green";
obj.style.height = "100%";
obj.style.width = "50%";
obj.style.left = 0 + "px";
obj.style.top = 0 + "px";
obj.style.zIndex = -1;
document.body.style.background = "red";


let helpGreenButton = document.body
.appendChild(document.createElement("button"));
helpGreenButton.style.background = "lightgreen";
helpGreenButton.innerHTML = "HELP GREEN";
helpGreenButton.style.width = "30%";
helpGreenButton.style.height = "30%";
helpGreenButton.style.position = "fixed";
helpGreenButton.style.bottom = "1%";
helpGreenButton.style.left = "1%";
helpGreenButton.style.fontSize = "30px";
helpGreenButton.style.borderColor = "black";
helpGreenButton.style.border = "solid";
helpGreenButton.addEventListener("click", helpGreen);

function helpGreen () {
  aButtonWasClicked = true;
  fetch("/green")
  .then(response => response.json())
  .then(
    data => {
      score = data.score;
    }
  );
}

let helpRedButton = document.body
.appendChild(document.createElement("button"));
helpRedButton.style.background = "pink";
helpRedButton.innerHTML = "HELP RED";
helpRedButton.style.width = "30%";
helpRedButton.style.height = "30%";
helpRedButton.style.float = "right";
helpRedButton.style.position = "fixed";
helpRedButton.style.bottom = "1%";
helpRedButton.style.right = "1%";
helpRedButton.style.fontSize = "30px";
helpRedButton.style.borderColor = "black";
helpRedButton.style.border = "solid";
helpRedButton.addEventListener("click", helpRed);

function helpRed () {
  aButtonWasClicked = true;
  fetch("/red")
  .then(response => response.json())
  .then(
    data => {
      score = data.score;
    }
  );
}


function updateScore(){
    if(!aButtonWasClicked)
      fetch("/score")
      .then(response => response.json())
      .then(
        data => {
          score = data.score;
        }
      );
    aButtonWasClicked = false;
}

function updateColor () {
  let current = parseInt(obj.style.width);
  let target = score + 50;
  //let difference = (target - current)/10;
  obj.style.width = target + "%";

  if(target > 100) {
    fetch("/reset")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        console.log(score);
      }
    );
    //alert("GREEN TEAM WON!");
  }
  if(target < 0) {
    
    fetch("/reset")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
      }
    );
    //alert("RED TEAM WON!");
  }
}
