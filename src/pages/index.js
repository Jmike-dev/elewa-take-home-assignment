import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const API = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  return (
    <div>
      <h1>hello</h1>
      {posts.slice(0, 20).map((post) => (
        <div key={post.it}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}
