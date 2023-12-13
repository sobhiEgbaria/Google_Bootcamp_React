import { Posts } from "./pages/posts";
import { Admin } from "./pages/admin";
import { Home } from "./pages/home";
import { useState } from "react";

export function App() {
  const [posts, setPosts] = useState([]);
  const [pageName, setPageName] = useState("");
  const [user, setUser] = useState(null);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const clearPosts = () => {
    setPosts([]);
  };

  const signIn = () => {
    setUser({ name: "Alex" });
  };

  const renderPageByPageName = () => {
    switch (pageName) {
      case "home":
        return <Home />;
      case "posts":
        return <Posts posts={posts} />;
      case "admin":
        return <Admin onPostSubmit={addPost} onClearList={clearPosts} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => setPageName("home")}>Home</button>
      <button onClick={() => setPageName("posts")}>Posts</button>
      <button onClick={() => setPageName("admin")}>Admin</button>

      {/*{renderPageByPageName()}*/}

      {pageName === "home" && <Home />}
      {pageName === "posts" && <Posts posts={posts} />}
      {pageName === "admin" && (
        <Admin onPostSubmit={addPost} onClearList={clearPosts} />
      )}

      {/*{ user ? <h3>Hello {user.name}</h3> : <button onClick={signIn}>Sign In</button>}*/}
    </div>
  );
}
