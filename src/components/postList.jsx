import React, { useEffect, useState } from "react";
import PostItem from "./postItem";
import { postsServices } from "@/services/postsServices";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postsServices.getAll().then((resp) => setPosts(resp.documents));
    const unsub = postsServices.listen(setPosts);

    return () => {
      unsub();
    };
  }, [posts]);

  return (
    <div>
      {posts.map((post) => {
        return <PostItem post={post} />;
      })}
    </div>
  );
}
