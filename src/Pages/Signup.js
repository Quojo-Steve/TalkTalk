import React from 'react'
import './Login.css'


const Signup = () => {
  return (
    <div className="box">
        <div className="form">
            <h2>Sign Up</h2>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>First Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="text" required="required" />
                <span>Last Name</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="email" required="required" />
                <span>Email</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required="required" />
                <span>Password</span>
                <i></i>
            </div>
            <div className="inputBox">
                <input type="password" required="required" />
                <span>Confirm Password</span>
                <i></i>
            </div>
            <div className="links">
                <a>Forgot Password</a>
                <a href="./login">Signin</a>
            </div>
            <input type="submit" value="Register" />
        </div>
    </div>
  )
}

export default Signup
