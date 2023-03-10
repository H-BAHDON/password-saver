import React from 'react'


// import "../styles/login"

function Login() {
  return (
    <div className="login-container">
      <form>  
        <div class="container">   
            <label>Email : </label>   
            <input type="email" placeholder="Enter Email" name="email" required/> 

            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/>  
            
            <button type="submit">Login</button>   
        </div>   
     </form>   
    </div>
  )
}

export default Login
