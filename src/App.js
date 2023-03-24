import React from "react";

import "./App.css"
import Header from "./components/header"
// import Login from "./components/Login"
import Reg from "./components/reg"

function App() {
    return (
        <div>
            <Header/>
            {/* <Login /> */}
            <Reg />
        </div>
    );
}

export default App;
