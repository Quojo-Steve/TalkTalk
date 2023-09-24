import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [username1, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const navigate = useNavigate();


  const signup = async () => {
    let response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email,username:username1, password: password, password2:password2 }),
      });
      let data = await response.json();

      if (response.status === 201) {
        navigate("/login");
        toast.success("Registered Sucessfully!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if(response.status === 400){
        if (data.username) {
          data.username.forEach(r => {
            toast.error(r, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        }
        if (data.password) {
          data.password.forEach(r => {
            toast.error(r, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        }
        if(data.email){
          data.email.forEach(r => {
            toast.error(r, {
              position: toast.POSITION.TOP_RIGHT,
            });
          });
        }
      }
  }
  return (
    <div className="body">
      <div className="box">
        <div className="form">
          <h2>Sign Up</h2>
          <div className="inputBox">
            <input type="text" required="required" onChange={(e) => setUsername(e.target.value)}/>
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="email" required="required" onChange={(e) => setEmail(e.target.value)} />
            <span>Email</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" onChange={(e) => setPassword(e.target.value)} />
            <span>Password</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input type="password" required="required" onChange={(e) => setPassword2(e.target.value)} />
            <span>Confirm Password</span>
            <i></i>
          </div>
          <div className="links">
            <a>Forgot Password</a>
            <a href="./login">Signin</a>
          </div>
          <input type="submit" value="Register" onClick={signup} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
