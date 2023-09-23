import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthData } from "../auth/AuthWrapper";
import { nav } from "../navigation/navigation";
import { useEffect } from "react";

export const RenderRoutes = () => {
  const { isAuthenticated } = AuthData();
  const navigate = useNavigate();

  // Use a useEffect to handle navigation
  useEffect(() => {
    nav.forEach((r, i) => {
      if (r.isPrivate) {
        if (!isAuthenticated) {
          // Redirect unauthenticated user to a login page (customize the path)
          navigate("/login");
        }
      }
    });
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      {nav.map((r, i) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};
