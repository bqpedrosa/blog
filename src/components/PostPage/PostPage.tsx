import { useEffect, useState } from "react";
import axios from "axios";

import "./PostPage.scss";

import { Button } from "../shared/Button/Button";
import { Input } from "../shared/Input/Input";
import { ExpansionPanel } from "../shared/ExpansionPanel/ExpansionPanel";

export const PostPage: React.FC = () => {
  const [name, setName] = useState("");
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPostList = async () => await getPostList();
    fetchPostList();
  }, []);

  const isPostListEmpty = (): boolean => {
    return !postList?.length;
  };

  const handleAddPost = async () => {
    axios.post("/api/post", { name });

    setName("");

    await getPostList();
  };

  const getPostList = async () => {
    const response: any = await axios.get("/api/post");

    setPostList(response.data);
  };

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };

  return (
    <div className="post-page">
      <div className="post-page__main">
        <div className="post-page__list">
          <h1>Post List</h1>
          <div className="post-page__list-interactive">
            <Input
              placeholder="Insert a post"
              width="200px"
              value={name}
              onChange={handleChangeName}
            />
            <Button buttonName="Add Post" onClick={handleAddPost} />
          </div>
          {isPostListEmpty() ? (
            <span className="post-page__list-not-available">
              No posts available
            </span>
          ) : (
            <ul className="post-page__list-items">
              {postList?.map((post) => (
                <ExpansionPanel
                  title={post}
                  slot={<>This post is named {post}</>}
                  key={post}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
