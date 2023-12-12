export function NewTaskInput({ setItemFn }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setItemFn(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div>
      {/* adding event listener to input */}
      <input onKeyDown={handleKeyDown} type="text" />
      <input
        onClick={() => {
          console.log("gogo");
        }}
        type="text"
      />
    </div>
  );
}
