const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.static("./"));
let score = 0;

app.get("/", (request, response) => {
  response.sendFile("index.html");
})

app.get("/green", (request, response) => {
  score++;
	console.log("score increased to: " + score);
  let myobj = {score: score}
  response.header("Access-Control-Allow-Origin", "*");
  response.json(myobj);
});

app.get("/red", (request, response) => {
  score--;
	console.log("score decreased to: " + score);
  let myobj = {score: score}
  response.header("Access-Control-Allow-Origin", "*");
  response.json(myobj);
});

app.get("/score", (request, response) => {
  console.log("score updated to: " + score);
  let myobj = {score: score}
  response.header("Access-Control-Allow-Origin", "*");
  response.json(myobj);

});

app.get("/reset", (request, response) => {
  score = 0;
  console.log("score reset to: " + score);
  let myobj = {score: score}
  response.header("Access-Control-Allow-Origin", "*");
  response.json(myobj);
});

// start server
const port = 3000;
app.listen(port, () => console.log("Listening on port " + port));
