export function Admin({ addPost, clearPosts }) {
  const handelSubmit = (e) => {
    e.preventDefault();

    const { title, content } = e.target.elements;

    addPost({
      title: title.value,
      content: content.value,
    });
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" />
        <button onClick={addPost} type="submit">
          Create
        </button>
      </form>
      <hr />
      <button onClick={clearPosts}>CLEAR</button>
    </div>
  );
}
