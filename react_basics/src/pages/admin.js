import {useContext, useState} from "react";
import {BlogContext} from "../providers/blog-provider";
import {AuthContext} from "../providers/auth-provider";

export function Admin() {
  const {addPost} = useContext(BlogContext);
  const {user} = useContext(AuthContext);

  const [msg, setMsg] = useState('');

  if(!user) {
    return <p>You must sign in first!</p>
  }

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    const {title, content} = event.target.elements;

    addPost({
      title: title.value,
      content: content.value
    })
  }

  const handleOnCopy = (event) => {
    event.preventDefault();
    alert('copy is not allowed!')
  }

  const handleOnPaste = (event) => {
    event.preventDefault();
    setMsg('paste is not allowed!');
  }

  return (
      <div>
        <h1>Admin</h1>
        <form className='form' onSubmit={handleNewPostSubmit}>
          <label htmlFor="title">Title</label>
          <input onPaste={handleOnPaste}
                 onCopy={handleOnCopy}
                 id="title"
                 name="title"
                 type="text"/>
            <span>{msg}</span>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content"/>
          <button type="submit">Create</button>
        </form>
      </div>
  );
}
