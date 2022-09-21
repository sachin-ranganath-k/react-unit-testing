import React, { useEffect, useState } from "react";

const Posts = () => {
  const postsStyle = {
    backgroundColor: "#eee",
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=4")
      .then((res) => {
        return res.json();
      })
      .then((resInJSON) => {
        setPosts(resInJSON);
        console.log(resInJSON);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  return (
    <div>
      <h2>Posts | Jest Spy</h2>
      {posts.map((post) => {
        return (
          <div key={post.id} style={postsStyle}>
            <p>#{post.id}</p>
            <p data-testid="postTitle">{post.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
