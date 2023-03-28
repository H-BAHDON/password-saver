import React, {useState} from "react";
import Axios from "axios";

import Login from "./Login"

export default function Registration() {


  const [registrationUser, setRegistrationUser] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  });

  // Axios.ddefaults.withCredentials = true;

  const register = (e) => {
    Axios.post("http://localhost:4001/register", {
      firstName: registrationUser.firstName,
      secondName: registrationUser.secondName,
      email: registrationUser.email,
      password: registrationUser.password,
    }).then((response) => {
      console.log(response);
    })
  };

  const handleChange = (event) => {
    setRegistrationUser({
      ...registrationUser,
      [event.target.name]: event.target.value,
    });
  };



  return (
    <div id="registration">
      <h2>Registration</h2>
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

      <Login/>

    </div>
  );
}