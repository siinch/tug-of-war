setInterval(updateScore, 200);
setInterval(updateColor, 1000/60)

let score = 0;
let speed = 10;
let obj = document.body.appendChild(document.createElement("div"));
let url ="http://localhost:3001";
obj.style.position = "absolute";
obj.style.background = "green";
obj.style.height = "100%";
obj.style.width = "50%";
obj.style.left = 0 + "px";
obj.style.top = 0 + "px";
document.body.style.background = "red";


function updateScore(){

    fetch(url + "/score")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        //obj.innerHTML = score;
        //console.log(score);
      }
    );
}

function updateColor () {
  let current = parseInt(obj.style.width);
  let target = window.innerWidth/2+(score*speed);
  let difference = Math.ceil((target - current)/10);
  obj.style.width = current + difference + "px";


  if(target > window.innerWidth) {
    fetch(url + "/reset")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        //obj.innerHTML = score;
        console.log(score);
      }
    );
    alert("GREEN TEAM WON!");
  }
  if(target < 0) {
    
    fetch(url + "/reset")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        //obj.innerHTML = score;
        //console.log(score);
      }
    );
    alert("RED TEAM WON!");
  }
  //obj.style.width = window.innerWidth/2+(score*5)*2+"px";
  //console.log(difference);
}
