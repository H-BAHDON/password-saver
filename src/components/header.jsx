import { useAtom } from "jotai";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAtom } from "../config/state";
import axios from "axios";

import "../styles/header.css"

function Header(props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useAtom(authAtom)

  axios.defaults.withCredentials = true;

  function handleLogout() {
    // send a post request to logout the user
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        navigate("/");
        setAuth({})
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="header">
      <h1>Headers</h1>
      {props.loggedIn && auth?.email ? (
        <div>
          <p>Welcome, {auth?.firstName} {auth?.secondName}!</p>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
