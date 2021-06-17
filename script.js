setInterval(update, 200);

let score = 0;
let obj = document.getElementById("obj");
obj.style.position = "absolute";


function update(){
  let url ="http://localhost:3001";

    fetch(url + "/score")
    .then(response => response.json())
    .then(
      data => {
        score = data.score;
        obj.innerHTML = score;
        obj.style.left = window.innerWidth/2+score+"px";
        console.log(score);
      }
    );
}
