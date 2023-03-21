import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Registration() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

        setDetails(() =>{
          return {
            ...details,
            [name]: value
          }
        })
    }

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div>
    <form>  
        <div className="container">   
            <label>Your Name : </label>   
            <input type="text" placeholder="Enter Name" onChange={handleChange} name="name" value={details.name} required/> 

            <label>Email: </label>   
            <input type="email" placeholder="Enter Email" onChange={handleChange} name="email" value={details.email} required/> 

            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" value={details.password} required/>  
            
            <button type="submit" onClick={handleClick}>Login</button>  
        </div>   
     </form>  
    </div>
  );
}