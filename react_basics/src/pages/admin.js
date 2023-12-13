export function Admin({ onPostSubmit, onClearList }) {

  const handleNewPostSubmit = (event) => {
    event.preventDefault();

    const {title, content} = event.target.elements;

    onPostSubmit({
      title: title.value,
      content: content.value
    })

  }

  return (
      <div>
        <h1>Admin</h1>
        <form onSubmit={handleNewPostSubmit}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text"/>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content"/>
          <button type="submit">Create</button>
        </form>
        <button onClick={onClearList}>CLEAR</button>
      </div>
  );
}
