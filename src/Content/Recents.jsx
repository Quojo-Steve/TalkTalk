import React from "react";
import "./Sidebar.css";
import Favorites from "../Parts/Favorites";
import Chat from "../Parts/Chat";

const Recents = () => {
  return (
    <div>
      <div className="panel">
        <div className="main-top">
          <div className="left">
            <p>Recents</p>
            <p>Starred Friends 🤩</p>
          </div>
              </div>
              <Favorites />
              <Chat />
      </div>
    </div>
  );
};

export default Recents;
