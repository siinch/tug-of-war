setInterval(update, 200);

let score = 0;
let obj = document.body.appendChild(document.createElement("div"));
obj.style.position = "absolute";
obj.style.background = "green";
obj.style.height = "100%";
obj.style.width = "50%";
obj.style.left = 0 + "px";
obj.style.top = 0 + "px";
document.body.style.background = "red";


function update(){
  let url ="http://localhost:3001";

    fetch(url + "/score")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        //obj.innerHTML = score;
        obj.style.width = window.innerWidth/2+score+"px";
        console.log(score);
      }
    );
}
