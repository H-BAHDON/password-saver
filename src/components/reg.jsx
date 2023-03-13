
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Reg() {

    const histroy = useNavigate();

    const[date, setDate] = useState([])

    const [details, setDetails] = useState({
      name: "",
      email: "",
      password: "",  
    })

    const getDate = (e) => {
        const {value}
    }


    



  return (
    <div>
    <form>  
        <div className="container">   
            <label>Your Name : </label>   
            <input type="text" placeholder="Enter Email" name="username" required/> 

            <label>Email: </label>   
            <input type="email" placeholder="Enter Username" name="email" required/> 

            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            
            <button type="submit">Login</button>  
        </div>   
     </form>  
      
    </div>
  )
}

export default Reg
