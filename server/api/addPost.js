let postList = [];

const addPost = (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(418).send({ message: "We need a name!" });

    return;
  }

  postList = [...postList, name];

  res.status(401);
};

const getPost = (req, res) => {
  res.send(postList);
};

module.exports = { addPost, getPost };
