const express = require("express");
const path = require("path");
const app = express();

const frontPath = path.join(__dirname, "..", "build", "index.html");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());

const postApi = require(__dirname + "/api/addPost.js");

app.get("/", (req, res) => {
  res.sendFile(frontPath);
});

app.post("/post", (req, res) => postApi.addPost(req, res));
app.get("/post", (req, res) => postApi.getPost(req, res));

app.listen(3000);
