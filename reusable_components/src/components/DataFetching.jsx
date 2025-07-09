import { useState } from "react";

const DataFetching = () => {
  const [tasks, setTasks] = useState([]);

  const fitchToDs = async () => {
    try {
      const res = await fetch("http://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const content = tasks.map((task) => {
    return (
      <>
        <h1>
          {task.title}
          <br />
        </h1>
      </>
    );
  });

  return (
    <>
      <button onClick={fitchToDs}>Fitch</button>
      <br />
      {content}
    </>
  );
};

export default DataFetching;
