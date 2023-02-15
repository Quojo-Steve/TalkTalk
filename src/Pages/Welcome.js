import React, { useState, useEffect } from "react";
import Sidebar from "../Content/Sidebar";
import Recents from "../Content/Recents";
import loader from "../images/flickr-loading.mp4";

const Welcome = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <video src={loader} autoPlay={true} loop={true} />
      ) : (
        <>
          <Sidebar />
          <Recents />
        </>
      )}
    </div>
  );
};

export default Welcome;
