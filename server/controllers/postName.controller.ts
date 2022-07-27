import { ExpressRequest, ExpressResponse } from "../types/express.types";
import { getPostList, addPost } from "../services/postName.service";

export const post = (req: ExpressRequest, res: ExpressResponse) => {
  const { name }: { name: string } = req.body;

  try {
    addPost(name);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(404).send({ message: err.message });

    return;
  }
};

export const get = (req: ExpressRequest, res: ExpressResponse) => {
  let postList: string[];

  try {
    postList = getPostList();
  } catch (err) {
    res.sendStatus(404);

    return;
  }

  res.send(postList);
};
