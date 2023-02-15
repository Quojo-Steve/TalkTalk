import React, { useState } from "react";
import search from "../images/search_50px.png";
import chat from "../images/chat_48px.png";
import people from "../images/person_128px.png";
import picture from "../images/IMG_1600.JPG";
import groups from "../images/user_groups_128px.png";
import plus from "../images/Plus_100px.png";
import message from "../images/chat_48px_green.png";
import "./Chat.css";
import Main from '../Content/Main'


const Chat = () => {
  const [isChat, setischat] = useState(true);
  const [group, setGroup] = useState(1);

  let which = "chatsss", peoples="peoplesssnot", grouping="groupsssnot", link = `home/chat/{1}`

  function grouping1() {
    var a=1
    setGroup(a)
  }
  function grouping2() {
    let a = 2
    setGroup(a)
  }
  function grouping3() {
    let a =3
    setGroup(a)
  }
  function name() {
    console.log("object")
  }
  function names() {
    console.log("object")
  }
  if (group === 1) {
    which = "chatsss"
    peoples = "peoplesssnot"
    grouping="groupsssnot"
  }
  else if (group === 2) {
    which = "chatsssnot"
    peoples = "peoplesss"
    grouping="groupsssnot"
  }
  else if (group === 3) {
    which = "chatsssnot"
    peoples = "peoplesssnot"
    grouping="groupsss"
  }
  console.log(group);
  console.log(which);
  console.log(peoples);
  console.log(grouping);
  return (
    <>
    <div style={{ position: "relative" }}>
      <div className="tops">
        <div className="text">
          <h1>Chats</h1>
          <h4>Start New conversation</h4>
        </div>
        <img src={search} alt="" />
      </div>
      <div className="linkss">
        <button href="/home" onClick={grouping1} className={which}>
          <img src={chat} />
          Chat
        </button>
        <button href="/people" onClick={grouping2} className={peoples}>
          <img src={people} />
          People
        </button>
        <button href="/groups" onClick={grouping3} className={grouping}>
          <img src={groups} />
          Groups
        </button>
      </div>
      <div className="linksss">
        <button
          className={isChat ? "active" : "not"}
          onClick={() => {
            if (isChat === true) {
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
            if (isChat === false) {
              setischat(isChat);
            } else {
              setischat(!isChat);
            }
          }}
        >
          My Groups
        </button>
      </div>
      <div className={isChat ? "chat" : "chatnot"}>
        <a className="chaturl1 selected" href={link}>
          <img src={picture} alt="" className="image" />
          <div className="details">
            <p>Ashafa Ahmed</p>
            <p className="username">@BigD</p>
          </div>
        </a>
        
      </div>
      <div className={isChat ? "groupsnot" : "groups"}>
        <div className="chaturl selected">
        <a href="">
          <img src={picture} alt="" className="image" />
          <div className="details">
            <p>Ashafa </p>
            <p className="username">Memes</p>
          </div>
          </a>
          <img src={plus} alt="" className="join" onClick={names} />
        </div>
        <div className="chaturl ">
          <a href="">
          <img src={picture} alt="" className="image" />
          <div className="details">
            <p>Ashafa </p>
            <p className="username">Memes</p>
          </div>
          </a>
          
          <img src={message} alt="" className="mes" onClick={name} />
        </div>
      </div>
    </div>
          <Main type={group} />
</>
  );
};

export default Chat;
