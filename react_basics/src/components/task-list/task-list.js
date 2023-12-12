/**
 * Renders a list of tasks.
 * Inside props, we have the items array that
 * contains the list of tasks.
 * This is because we passed the itemList
 * as "prop": <TaskList items={[]}>
 */
export function TaskList({ items }) {
  return (
    <ul>
      {items.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
  );
}
