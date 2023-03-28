import { useNavigate } from 'react-router-dom'
import React, {useState} from "react";
import axios from "axios";
import { useAtom } from 'jotai';
import { authAtom } from '../config/state';

export default function Login() {

  const navigate = useNavigate()
  const [auth, setAuth] = useAtom(authAtom)

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const hanldeLogin = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4001/login", {
      email: loginUser.email,
      password: loginUser.password,
    }).then((response) => {
      setAuth(response.data)
      // navigate('/Create')
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
      <form onSubmit={hanldeLogin} >
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

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}