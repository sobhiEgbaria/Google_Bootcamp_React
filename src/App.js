import { useState } from "react";
import { NewTaskInput } from "./components/task-input";

/**
 * Creates the main application component.
 * It renders the NewTaskInput, TaskList and Filters components.
 */
export function App() {
  const [items, setItems] = useState([]);

  const addItem = (value) => {
    setItems([...items, value]);
  };

  return (
    <div>
      <NewTaskInput setItemFn={addItem} />
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
