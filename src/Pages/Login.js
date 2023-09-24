import React, { useState } from "react";
import "./Login.css";
import { AuthData } from "../auth/AuthWrapper";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, seterr] = useState("");

  const {login} = AuthData();

  const loginfunc = async (e) => {
    e.preventDefault();

    try {
      await login(username, password)
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
