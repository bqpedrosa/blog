import express from "express";
import path from "path";

import { ExpressRequest, ExpressResponse } from "./types/express.types";

const app = express();

const frontPath = path.join(__dirname, "..", "build", "index.html");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());

const postApi = require(__dirname + "/api/addPost.ts");

app.get("/", (req: ExpressRequest, res: ExpressResponse) => {
  res.sendFile(frontPath);
});

app.post("/post", (req: ExpressRequest, res: ExpressResponse) =>
  postApi.addPost(req, res)
);
app.get("/post", (req: ExpressRequest, res: ExpressResponse) =>
  postApi.getPost(req, res)
);

app.listen(3000);
