
import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/header";
import Reg from "./components/reg";
import Create from "./pages/Create";
import Container from "./components/Container";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      if (response.data.loggedIn) {
        setLoggedIn(true);
        navigate("/Create");
      }
    });
  }, []);

  function handleLogin() {
    setLoggedIn(true);
    navigate("/Create");
  }

  function handleLogout() {
    // send a post request to logout the user
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(() => {
        // update the loggedIn state and navigate to the home page
        setLoggedIn(false);
        navigate("/");
      })
      .catch((error) => console.error(error));
  }

  const [credentials, setCredentials] = useState([]);

  function addCredentials(newCredential) {
    setCredentials((prevCredentials) => {
      return [...prevCredentials, newCredential];
    });
  }

  function deleteCredential(id) {
    setCredentials((prevCredentials) => {
      return prevCredentials.filter((credentialItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Reg onLogin={handleLogin} />} />
        <Route
          path="/Create"
          element={<Create onAdd={addCredentials} />}
        />
        {credentials.map((element, index) => {
          return (
            <Container
              key={index}
              id={index}
              email={element.email}
              password={element.password}
              onDelete={deleteCredential}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;