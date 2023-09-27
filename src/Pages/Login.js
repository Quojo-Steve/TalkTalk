import React, { useState } from "react";
import "./Login.css";
import { AuthData } from "../auth/AuthWrapper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = AuthData();
  let log;

  const loginfunc = async (e) => {
    // e.preventDefault();

    try {
      log = await login(username, password);
      if (log === "Login Sucessful") {
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }else{
        toast.error(log, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again!!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };

  return (
    <div className="body">
      <div className="box">
        <div className="form">
          <h2>Sign In</h2>
          <div className="inputBox">
            <input
              type="email"
              required="required"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Email</span>
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
