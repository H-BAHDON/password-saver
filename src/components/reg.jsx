import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Reg() {

    const history = useNavigate();

    const[data, setData] = useState([])

    const [details, setDetails] = useState({
      name: "",
      email: "",
      password: "",  
    })

    console.log(details);
    
    const handleChange = (e) => {
        const { value, name } = e.target;

        setDetails(() =>{
          return {
            ...details,
            [name]: value
          }
        })
    }

    const handleClick = (e) => {
        const {username, email, password} = details;

        if (username && email && password === ""){
          toast.error('name field is requred!');
        }else{
          console.log("data added succesfully");
          history("/Login")
          localStorage.setItem("Users",JSON.stringify([...data,details]));
        }
        e.preventDefault();

    }


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
  )
}

export default Reg
