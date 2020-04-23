import React from "react";
import { ListItem } from "./lib/Lib";

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." },
];

function Blog() {
  const sidebar = (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} value={post.title}></ListItem>
      ))}
    </ul>
  );
  const content = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export default Blog;
