import React from "react";
import search from "../images/search_50px.png";
import "./Chat.css";

const Chat = () => {
  return (
    <div>
      <div className="tops">
        <div className="text">
          <h1>Chats</h1>
          <h4>Start New conversation</h4>
        </div>
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default Chat;
