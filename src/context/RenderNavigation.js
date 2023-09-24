import { Route, Routes, useNavigate,useLocation } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { nav } from "../navigation/navigation";
import { useEffect } from "react";


export const RenderRoutes = () => {
  const { isAuthenticated } = AuthData();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Inside the useEffect, handle navigation for private routes
    nav.forEach((r, i) => {
      if (r.isPrivate && !isAuthenticated) {
        if(location.pathname === '/signup'){
          navigate('/signup')
        } else{
          navigate('/login')
        }
      }
    });
  }, [isAuthenticated, navigate,location.pathname]);

  return (
    <Routes>
      {nav.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};
