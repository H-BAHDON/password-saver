// Header.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  function handleLogout() {
    // send a post request to logout the user
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        // update the loggedIn state and navigate to the home page
        props.setLoggedIn(false);
        navigate("/");
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <h1>Header</h1>
      {props.loggedIn && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Header;
