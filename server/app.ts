import express from "express";
import path from "path";

import postNameRoute from "./routes/postName.route";
import { ExpressRequest, ExpressResponse } from "./types/express.types";

const app = express();
const port = process.env.PORT || 3000;
const frontPath = path.join(__dirname, "..", "build", "index.html");

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", postNameRoute);

app.get("*", (req: ExpressRequest, res: ExpressResponse) => {
  res.sendFile(frontPath);
});

app.listen(port);
