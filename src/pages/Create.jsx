import React, {useEffect, useState} from 'react';
import axios from "axios";

import "../styles/create.css"

function Create(props) {
    const [credentials, setCredentials] = useState({email: "", password: ""});
    const [data, setData] = useState([])
  

    function handleChange(event) {
        const {name, value} = event.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    }
    function submitCredentials(event) {
        event.preventDefault(); 
        props.onAdd(credentials);

        const uniqueId = Date.now() + '-' + Math.floor(Math.random() * 1000000);
        setData([
            ...data, {
                ...credentials,
                _id: uniqueId
            }
        ])
        setCredentials({email: "", password: ""});
    }
    const handleDelete = (id) => {
        setData(data.filter((e) => e._id != id))
    }

 
    // axios.defaults.withCredentials = true;
    // useEffect(() => {
    //   axios.get("http://localhost:3001/login").then((response) => {
    //     if (response.data.loggedIn == true) {
    //         setAuth(response.data.user[0].auth?.email);
    //     }
    //   });
    // }, []);
    
       // axios.defaults.withCredentials = true;
    // useEffect(() => {
    //   axios.get("http://localhost:3001/login").then((response) => {
    //     if (response.data.loggedIn == true) {
    //         setAuth(response.data.user[0].auth?.email);
    //     }
    //   });
    // }, []);
    

    
  

    return (
        <div className="create-container">
            <h1>Create Credential</h1>
            <form>
                <label>Email:</label>
                <input type="email" name="email"
                    value={credentials.email}
                    onChange={handleChange}/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password"
                    value={
                        credentials.password
                    }
                    onChange={handleChange}/>
                <br/>
                <button onClick={submitCredentials}>Submit</button>
            </form>


            <div style={
                {
                    marginTop: "50px",
                    display: "flex",
                    gap: "2rem",
                    flexWrap: "wrap"
                }
            }>
                {
                data ?. map((e, i) => (
                    <div className="container"
                        key={i}>
                        <h1>{
                            e ?. email
                        }</h1>
                        <p>{
                            e ?. password
                        }</p>
                        <button onClick={
                            () => handleDelete(e ?. _id)
                        }>DELETE</button>
                    </div>
                ))
            } </div>
        </div>
    );
}

export default Create;
