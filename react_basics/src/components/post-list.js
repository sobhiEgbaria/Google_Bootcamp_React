import {PostCard} from "./post-card";

/**
 * Renders a list of post cards based on the given feed.
 *
 * @param {Array} feed - The array of posts to render.
 * @return {React.Node} A div element containing the rendered post cards.
 */
export function PostLIst({ feed }) {
  return (
      <div>
        {feed.map((post) => <PostCard singlePost={post} />)}
      </div>
  );
}
