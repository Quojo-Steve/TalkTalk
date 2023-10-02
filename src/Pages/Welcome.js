import React, { useState, useEffect } from "react";
import Sidebar from "../Content/Sidebar";
import Recents from "../Content/Recents";
import loader from "../images/flickr-loading.mp4";
import { Outlet } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="body">
          <FadeLoader
            className="flex justify-center items-center min-h-full"
            size={30}
            color={"dodgerblue"}
            loading={loading}
          />
        </div>
      ) : (
        <>
          <Sidebar />
          <Recents />
        </>
      )}
      {/* <Outlet /> */}
    </div>
  );
};

export default Welcome;
