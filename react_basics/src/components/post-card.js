import {useState} from "react";

const PostCardStyle = {
  border: '2px solid black'
}

export function PostCard({ singlePost }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
      <div style={PostCardStyle}>
        <h2 onClick={() => setIsVisible(!isVisible)}>{singlePost.title}</h2>
        {isVisible && <p>{singlePost.body}</p>}
      </div>
  )
}
