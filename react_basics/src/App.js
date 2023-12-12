import { useState } from "react";
import { Admin } from "./components/admin";

export function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const clearPosts = () => {
    setPosts([]);
  };
  console.log(posts);

  return (
    <div>
      <p> you have a :{posts.length} items</p>

      <Admin addPost={addPost} clearPosts={clearPosts} />
      <div>
        {posts.map((item) => (
          <div>
            <p>
              {item.title} {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
