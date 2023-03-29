import React, {useState} from "react";
import axios from "axios";
import { useAtom } from 'jotai';
import { authAtom } from '../config/state';
import Login from "./Login"

export default function Registration() {


  const [registrationUser, setRegistrationUser] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  const [auth, setAuth] = useAtom(authAtom)


  axios.defaults.withCredentials = true;

  const register = (e) => {
    axios.post("http://localhost:4001/register", {
      firstName: registrationUser.firstName,
      secondName: registrationUser.secondName,
      email: registrationUser.email,
      password: registrationUser.password,
    }).then((response) => {
      console.log(response);
      setAuth(response.data)
    })
  };

  const handleChange = (event) => {
    setRegistrationUser({
      ...registrationUser,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <div className="registration-container" id="registration">
      <h2>Registration</h2>
      <div className="registration-form-container">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          required
        />

        <label htmlFor="secondName">Second Name:</label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          onChange={handleChange}
          required
        />

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

        <input type="submit" onClick={register} value="Register" />
      </form>
      </div>
      <div className="registration-login-container">
        <div className="registration-divider"></div>
        <div className="registration-login-text">Already have an account?</div>
      <Login/>
      </div>

    </div>
  );
}