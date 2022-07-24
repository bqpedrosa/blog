import { useState } from "react";
import axios from "axios";

import "./PostPage.css";

export const PostPage: React.FC = () => {
  const [name, setName] = useState("");
  const [postList, setPostList] = useState([]);

  const handleAddPost = async () => {
    axios.post("/post", { name });

    setName("");

    await getPostList();
  };

  const getPostList = async () => {
    const response: any = await axios.get("/post");

    setPostList(response.data);
  };

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div className="post-page">
      <div className="post-page__list">
        <span>Post List:</span>
        <ul className="post-page__list-items">
          {postList.map((post) => (
            <li>{post}</li>
          ))}
        </ul>
      </div>
      <p>
        <input type="text" value={name} onChange={handleChangeName} />
      </p>
      <button onClick={handleAddPost}>Add post</button>
    </div>
  );
};
