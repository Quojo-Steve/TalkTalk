import { createContext, useContext, useState, useEffect } from "react";
import { RenderRoutes } from "../context/RenderNavigation";
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
  const [image, setImage] = useState("");
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = (userName, password) => {
    let loginUser = async () => {
      let response = await fetch(" http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userName, password: password }),
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

  let updateToken = async () => {
    console.log("update called");
    let response = await fetch(" http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });
    let data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      let profileimage = "http://127.0.0.1:8000/"+user.image
      setImage(profileimage)
    } else {
      logout();
    }
    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }
    let fourminutes = 1000 * 60 * 4;
    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourminutes);
    return () => clearInterval(interval);
  }, [loading, authTokens]);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, authTokens,image }}
    >
      {loading ? null : (
        <>
          <RenderRoutes />
        </>
      )}
    </AuthContext.Provider>
  );
};
