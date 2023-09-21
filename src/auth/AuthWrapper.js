import { createContext, useContext, useState, useEffect } from "react";
import {
  RenderMenu,
  RenderRoutes,
} from "../components/structure/RenderNavigation";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  const [isAuthenticated, setisAuthenticated] = useState(() =>
    localStorage.getItem("authTokens") ? true : false
  );
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const navigate = useNavigate();

  const login = (userName, password) => {
    let loginUser = async () => {
      let response = await fetch(" http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, password: password }),
      });
      let data = await response.json();

      if (response.status === 200) {
        setAuthTokens(data);
        let access = jwt_decode(data.access);
        setUser(access);
        setisAuthenticated(true);
        localStorage.setItem("authTokens", JSON.stringify(data));
        navigate("/");
      } else {
        alert("Something went wrong!!");
      }
    };
    loginUser();
  };

  const logout = async () => {
    navigate("/login");
    setAuthTokens(null);
    setUser(null);
    setisAuthenticated(false);
    localStorage.removeItem("authTokens");
  };


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      <>
        <RenderMenu />
        <RenderRoutes />
      </>
    </AuthContext.Provider>
  );
};
