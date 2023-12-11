export function NewTaskInput({ setItemFn }) {
  // This function will be called when the user
  // presses the Enter key
  // Will be attached to the onKeyDown event
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
    </div>
  );
}
