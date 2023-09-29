import { createContext, useContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = ({children }) => {
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
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = async (userName, password) => {
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
      return "Login Sucessful";
    } else if (response.status === 401) {
      return "Login failed. Please check your credentials and try again.";
    }
    updateToken();
  };

  const logout = async () => {
    setAuthTokens(null);
    setUser(null);
    setisAuthenticated(false);
    localStorage.removeItem("authTokens");
  };

  let updateToken = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
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
    } else {
      logout();
    }
    if (loading) {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      let res = await fetch("http://localhost:8000/api/friends/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access), // Added a space after "Bearer"
        },
      });
      let data = await res.json();
      if (res.status === 200) {
        return data;
      }else{
        throw new Error(`Error fetching data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  let profile = async () => {
    let res = await fetch("http://127.0.0.1:8000/api/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access), // Added a space after "Bearer"
      },
    });
    let data = await res.json();
    if(res.status === 200){
     return data
    }else if(res.statusText === 'Unauthorized'){
     logout()
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
      value={{ user, isAuthenticated, login, logout, authTokens, profile, fetchData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
