import React, { useState } from "react";
import search from "../images/search_50px.png";
import chat from "../images/chat_48px.png";
import people from "../images/person_128px.png";
import groups from "../images/user_groups_128px.png";
import "./Chat.css";

const Chat = () => {
  const [isChat, setischat] = useState(true);
  return (
    <div>
      <div className="tops">
        <div className="text">
          <h1>Chats</h1>
          <h4>Start New conversation</h4>
        </div>
        <img src={search} alt="" />
      </div>
      <div className="linkss">
        <a href="/home">
          <img src={chat} />
          Chat
        </a>
        <a href="/people">
          <img src={people} />
          People
        </a>
        <a href="/groups">
          <img src={groups} />
          Groups
        </a>
      </div>
      <div className="linksss">
        <button
          className={isChat ? "active" : "not"}
          onClick={() => {
            if (isChat == true) {
              setischat(isChat);
            } else {
              setischat(!isChat);
            }
          }}
        >
          Messages
        </button>
        <button
          className={isChat ? "not" : "active"}
          onClick={() => {
            if (isChat == false) {
              setischat(isChat);
            } else {
              setischat(!isChat);
            }
          }}
        >
          My Groups
        </button>
      </div>
      <div className={isChat ? "chat" : "chatnot"}>dd</div>
      <div className={isChat ? "groupsnot" : "groups"}>kk</div>
    </div>
  );
};

export default Chat;
