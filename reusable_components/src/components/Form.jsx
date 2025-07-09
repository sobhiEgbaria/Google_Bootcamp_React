import { useState } from "react";

const Form = () => {
  const [details, setDetails] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetails({
      name,
      password,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">login</button>
      </form>
      <br />
      <h1>{details.name}</h1>
      <h1>{details.password}</h1>
    </>
  );
};
export default Form;
