import { ExpressRequest, ExpressResponse } from "../types/express.types";

let postList: string[] = [];

const addPost = (req: ExpressRequest, res: ExpressResponse) => {
  const { name }: { name: string } = req.body;

  if (!name) {
    res.status(418).send({ message: "We need a name!" });

    return;
  }

  postList = [...postList, name];

  res.status(401);
};

const getPost = (req: ExpressRequest, res: ExpressResponse) => {
  res.send(postList);
};

module.exports = { addPost, getPost };
