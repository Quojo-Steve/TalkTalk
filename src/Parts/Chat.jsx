import React, { useState, useEffect } from "react";
import search from "../images/search_50px.png";
import chat from "../images/chat_48px.png";
import peopless from "../images/person_128px.png";
import picture from "../images/IMG_1600.JPG";
import groupss from "../images/user_groups_128px.png";
import plus from "../images/Plus_100px.png";
import message from "../images/chat_48px_green.png";
import "./Chat.css";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import Display from "./Display";
import { AuthData } from "../auth/AuthWrapper";
import { GrFormClose } from "react-icons/gr";

const Chat = () => {
  const [isChat, setischat] = useState(true);
  const [group, setGroup] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const [param, setParam] = useState(false);
  const [data, setData] = useState([]);
  const [d, setId] = useState();
  const { fetchData } = AuthData();
  const [searchOpen, setSearchOpen] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  function renderer() {
    setParam(true);
  }
  useEffect(() => {
    if (id !== undefined) {
      setParam(true);
    } else {
      setParam(false);
    }
  }, []);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  let main = "main",
    people = "mainpeoplenot",
    groups = "maingroupnot";

  if (group === 1) {
    main = "main";
    people = "mainpeoplenot";
    groups = "maingroupnot";
  } else if (group === 2) {
    main = "mainnot";
    people = "mainpeople";
    groups = "maingroupnot";
  } else if (group === 3) {
    main = "mainnot";
    people = "mainpeoplenot";
    groups = "maingroup";
  }
  let which = "chatsss",
    peoples = "peoplesssnot",
    grouping = "groupsssnot";

  function grouping1() {
    var a = 1;
    setGroup(a);
  }
  function grouping2() {
    let a = 2;
    setGroup(a);
  }
  function grouping3() {
    let a = 3;
    setGroup(a);
  }
  function name() {
    console.log("object");
  }
  function names() {
    console.log("object");
  }
  if (group === 1) {
    which = "chatsss";
    peoples = "peoplesssnot";
    grouping = "groupsssnot";
  } else if (group === 2) {
    which = "chatsssnot";
    peoples = "peoplesss";
    grouping = "groupsssnot";
  } else if (group === 3) {
    which = "chatsssnot";
    peoples = "peoplesssnot";
    grouping = "groupsss";
  }

  const filteredData = data.filter((perso) => {
    const fullName = perso.full_name.toLowerCase();
    const username = perso.user.username.toLowerCase();
    const search = searchInput.toLowerCase();

    // Check if either the full name or username includes the search input
    return fullName.includes(search) || username.includes(search);
  });

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className="tops">
          <div className="text">
            <h1>Chats</h1>
            <h4>Start New conversation</h4>
          </div>
          <img
            src={search}
            alt=""
            onClick={() => setSearchOpen(!searchOpen)}
            className={`${searchOpen ? "block" : "hidden"} duration-200`}
          />

          <GrFormClose
            className={`${
              searchOpen ? "hidden" : "block"
            } new duration-200 text-lg`}
            onClick={() => {setSearchOpen(!searchOpen); setSearchInput("")}}
          />

          <input
            type="search"
            placeholder="Search..."
            className={`input ${
              searchOpen ? "hidden" : "block"
            } border-b-2 outline-none`}
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="linkss">
          <button href="/home" onClick={grouping1} className={which}>
            <img src={chat} />
            Chat
          </button>
          <button href="/people" onClick={grouping2} className={peoples}>
            <img src={peopless} />
            People
          </button>
          <button href="/groups" onClick={grouping3} className={grouping}>
            <img src={groupss} />
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
          {filteredData.map((perso) => {
            return (
              <Link
                to={`/${perso.user.id}`} // Use Link to navigate to the profile page
                key={perso.id}
                className="chaturl1 selected cursor-pointer"
                onClick={() => {
                  renderer();
                  grouping1();
                }}
              >
                <img
                  src={"http://127.0.0.1:8000/" + perso.image}
                  alt=""
                  className="image"
                />
                <div className="details">
                  <p>{perso.user.username}</p>
                  <p className="username">{perso.full_name}</p>
                </div>
              </Link>
            );
          })}
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

      <div>
        <div className={main}>{param ? <Display /> : <div>{group}</div>}</div>
        <div className={people}>
          {data.map((perso) => {
            return (
              <Link
                to={`/${perso.user.id}`} // Use Link to navigate to the profile page
                key={perso.id}
                className="chaturl1 selected cursor-pointer"
              >
                <img
                  src={"http://127.0.0.1:8000/" + perso.image}
                  alt=""
                  className="image"
                />
                <div className="details">
                  <p>{perso.user.username}</p>
                  <p className="username">{perso.full_name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={groups}>
          <div href="" className="single p-4">
            <img
              src={picture}
              alt=""
              className="h-14 w-14 rounded-full object-cover "
            />
            <div>
              <p className="text-center text-xl">Ashafa Ahmed</p>
              <p className="text-xs text-center">Software Engineer</p>
            </div>
            <a href="#" className="flex flex-col items-center justify-center">
              <img
                src={message}
                alt=""
                className="w-10 h-10 bg-green-500 rounded-full p-2"
              />
              <b className="text-green-500">Message</b>
            </a>
          </div>
          <div href="" className="single p-4">
            <img
              src={picture}
              alt=""
              className="h-14 w-14 rounded-full object-cover "
            />
            <div>
              <p className="text-center text-xl">Ashafa Ahmed</p>
              <p className="text-xs text-center">Software Engineer</p>
            </div>
            <a href="#" className="flex flex-col items-center justify-center">
              <img
                src={message}
                alt=""
                className="w-10 h-10 bg-blue-500 rounded-full p-2"
              />
              <b className="text-blue-500">Join</b>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
