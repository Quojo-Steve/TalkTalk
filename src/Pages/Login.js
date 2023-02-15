import React from 'react'
import './Login.css'

const Login = () => {
    return (
      <div className="body">
            <div className="box">
        <div className="form">
            <h2>Sign In</h2>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Username</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
            </div>
            <div className="links">
                <a>Forgot Password</a>
                <a href="/signup">Signup</a>
            </div>
            <input type="submit" value="Login" />
        </div>
    </div>
      </div>
    
  )
}

export default Login
