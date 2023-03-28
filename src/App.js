import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import axios from "axios";

import Header from "./components/header";
import Reg from "./components/reg";
import Create from "./pages/Create";
import Container from "./components/Container";
import { authAtom } from "./config/state";
import { useAtom } from "jotai";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [auth, setAuth] = useAtom(authAtom)
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      if (response.data.loggedIn) {
        setLoggedIn(true);
        navigate("/Create");
      }
    });
  }, []);

  useEffect(() => {
    // check if user is logged in
    fetch("http://localhost:3000/login", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.loggedIn) {
          setLoggedIn(true);
          setUser(data.user);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  function handleLogin() {
    setLoggedIn(true);
    navigate("/Create");
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

  useEffect(() => {
    if(auth?.email){
      setLoggedIn(true)
      navigate('/Create')
    }else{
      setLoggedIn(false)
      navigate('/')
    }
  }, [auth])


  return (
    <div>
      <Header loggedIn={loggedIn} user={user} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Reg onLogin={handleLogin} />} />
        <Route
          path="/Create"
          element={<Create onAdd={addCredentials} />}
        />
        {loggedIn &&
          credentials.map((element, index) => {
            return (
              <Route
                key={index}
                path={`/Container/${index}`}
                element={
                  <Container
                    key={index}
                    id={index}
                    email={element.email}
                    password={element.password}
                    onDelete={deleteCredential}
                  />
                }
              />
            );
          })}
      </Routes>
    </div>
  );
}

export default App;
