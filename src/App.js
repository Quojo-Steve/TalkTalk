import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { dataLoader } from "./Pages/Name";
import Name from "./Pages/Name";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Main from "./Content/Main";
import Page404 from "./Pages/Page404";
import PrivateRoutes from "./utils/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthWrapper } from "./auth/AuthWrapper"; // Import the AuthWrapper
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="">
      <Router>
        <AuthWrapper>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Welcome />}>
                <Route path=":id" element={<Main />} />
                <Route path="/*" element={<Page404 />} />
              </Route>
              <Route path="*" element={<Page404 />} />
              <Route path="/viewprofile" element={<Profile />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/name" element={<Name />} loader={dataLoader} />
          </Routes>
        </AuthWrapper>
      </Router>
      <ToastContainer />

    </div>
  );
}

export default App;
