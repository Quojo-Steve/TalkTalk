import React, { useState } from "react";
// import { useHistory } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");

  const navigat = useNavigate();

  const loginfunc = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:7000/token/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.auth_token;

        localStorage.setItem("token", token);

        navigat("/home");
      } else {
        seterr("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="body">
      <div className="box">
        <div className="form">
          <h2>Sign In</h2>
          <h5>{err}</h5>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              type="password"
              required="required"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a>Forgot Password</a>
            <a href="/signup">Signup</a>
          </div>
          <input type="submit" value="Login" onClick={loginfunc} />
        </div>
      </div>
    </div>
  );
};

export default Login;
