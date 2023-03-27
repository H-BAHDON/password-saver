import React, {useState} from "react";
import Axios from "axios";

export default function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    Axios.post("http://localhost:4001/login", {
      email: loginUser.email,
      password: loginUser.password,
    }).then((response) => {
      console.log(response);
    });
  };

  const handleChange = (event) => {
    setLoginUser({
      ...loginUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div id="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />

        <input type="submit" onClick={login} value="Login" />
      </form>
    </div>
  );
}