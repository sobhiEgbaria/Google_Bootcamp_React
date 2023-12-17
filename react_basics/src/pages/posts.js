import {PostLIst} from "../components/post-list";
import {useContext} from "react";
import {BlogContext} from "../providers/blog-provider";
import {PostCard} from "../components/post-card";


export function Posts() {
  const {posts} = useContext(BlogContext);

  return (
      <div>
        <h2>Posts: {posts.length}</h2>
        <p>Here is the list of my posts!</p>
        <input className='form-control-lg' />
        <PostLIst>
          {posts.map((post) => <PostCard singlePost={post} />)}
        </PostLIst>
        <button>load more</button>
      </div>
  )
}
