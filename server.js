const express = require("express");
const cors = require("cors");
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
let score = 0;

// insert new highscore
app.get("/up", (request, response) => {
  score++;
	console.log("score increased to: " + score);
  let myobj = {score: score}
  response.header("Access-Control-Allow-Origin", "*");
  response.json(myobj);
});

app.get("/down", (request, response) => {
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

// start server
const port = 3001;
app.listen(port, () => console.log("Listening on port " + port));