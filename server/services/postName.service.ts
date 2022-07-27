let postList: string[] = [];

export const addPost = (post: string): string => {
  let message: string = "Post created";

  if (!post) {
    throw new Error("Post missing");
  }

  postList = [...postList, post];

  return message;
};

export const getPostList = (): string[] => {
  return postList;
};
