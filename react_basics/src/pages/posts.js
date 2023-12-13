import {PostLIst} from "../components/post-list";

export function Posts({ posts }) {
  return (
      <div>
        <h2>Posts: {posts.length}</h2>
        <p>Here is the list of my posts!</p>
        <PostLIst feed={posts}  />
        <button>load more</button>
      </div>
  )
}
