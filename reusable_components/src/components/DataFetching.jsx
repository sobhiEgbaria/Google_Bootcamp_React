import { useEffect, useState } from "react";

const DataFetching = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassage, setErrorMassage] = useState("");

  const fitchToDs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("http://jsonplaceholder.typicode.com/todos/");
      const data = await res.json();
      res.status === 200
        ? setIsLoading(false)
        : setErrorMassage("something wrong happened");
      setTasks(data);
    } catch (error) {
      setIsLoading(false);
      setErrorMassage("something wrong happened");
      console.log(error);
    }
  };
  useEffect(() => {
    fitchToDs();
  }, []);

  const content = tasks.map((task) => {
    return (
      <h3 key={Math.random() * 100000}>
        {task.title}
        <br />
      </h3>
    );
  });

  return (
    <>
      <h1>Welcome to the data fetching component</h1>
      {/* {tasks.length === 0 && <h1>Loading....</h1>} */}
      {isLoading && <h1>Loading....</h1>}
      {!isLoading && errorMassage && <h1>{errorMassage}</h1>} <br />
      <br />
      {content}
    </>
  );
};

export default DataFetching;
