import React, { useState, useEffect } from "react";
import Sidebar from "../Content/Sidebar";
import Recents from "../Content/Recents";
import loader from "../images/flickr-loading.mp4";
import { Outlet } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";


const Welcome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <FadeLoader
        size={30}
          color={"dodgerblue"}
      loading={loading}
        />
      ) : (
        <>
          <Sidebar />
          <Recents />
        </>
      )}
<Outlet />
    </div>
  );
};

export default Welcome;
