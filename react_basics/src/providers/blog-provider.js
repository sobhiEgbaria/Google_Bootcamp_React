import { createContext, useEffect, useState } from "react";

// Create special context Object
export const BlogContext = createContext(null);

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const value = { posts, addPost };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}
