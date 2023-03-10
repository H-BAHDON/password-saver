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

  return (
    <div>
    <form>  
        <div class="container">   
            <label>Your Name : </label>   
            <input type="text" placeholder="Enter Email" name="username" required/> 

            <label>Email: </label>   
            <input type="email" placeholder="Enter Username" name="email" required/> 

            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            
            <button type="submit">Login</button>  
            <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p> 
        </div>   
     </form>  
      
    </div>
  )
}

export default Reg
