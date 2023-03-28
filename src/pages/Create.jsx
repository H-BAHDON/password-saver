import React, { useState } from 'react';

function Create(props) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCredentials(prevCredentials => {
      return {
        ...prevCredentials,
        [name]: value
      };
    });
  }

  function submitCredentials(event) {
    props.onAdd(credentials);
    setCredentials({
      email: "",
      password: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="email"
          onChange={handleChange}
          value={credentials.email}
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          value={credentials.password}
          placeholder="Password"
          type="password"
        />
        <button onClick={submitCredentials}>Submit</button>
      </form>
    </div>
  );
}

export default Create;