import React from "react";
import "./Main.css";
import picture from "../images/IMG_1600.JPG";
import message from "../images/chat_48px_green.png";

const Main = (props) => {
  let main = "main",
    people = "mainpeoplenot",
    groups = "maingroupnot";

  if (props.type === 1) {
    main = "main";
    people = "mainpeoplenot";
    groups = "maingroupnot";
  } else if (props.type === 2) {
    main = "mainnot";
    people = "mainpeople";
    groups = "maingroupnot";
  } else if (props.type === 3) {
    main = "mainnot";
    people = "mainpeoplenot";
    groups = "maingroup";
  }
  return (
    <div>
      <div className={main}>{props.type}</div>
      <div className={people}>
        <a href="" className="single p-4">
          <img
            src={picture}
            alt=""
            className="h-14 w-14 rounded-full object-cover "
          />
          <div>
            <p className="text-center text-xl">Ashafa Ahmed</p>
            <p className="text-xs text-center">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={message}
              alt=""
              className="w-10 h-10 bg-green-500 rounded-full p-2"
            />
            <b className="text-green-500">Message</b>
          </div>
        </a>
        <a href="" className="single p-4">
          <img
            src={picture}
            alt=""
            className="h-14 w-14 rounded-full object-cover "
          />
          <div>
            <p className="text-center text-xl">Ashafa Ahmed</p>
            <p className="text-xs text-center">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={message}
              alt=""
              className="w-10 h-10 bg-green-500 rounded-full p-2"
            />
            <b className="text-green-500">Message</b>
          </div>
        </a>
        <a href="" className="single p-4">
          <img
            src={picture}
            alt=""
            className="h-14 w-14 rounded-full object-cover "
          />
          <div>
            <p className="text-center text-xl">Ashafa Ahmed</p>
            <p className="text-xs text-center">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={message}
              alt=""
              className="w-10 h-10 bg-green-500 rounded-full p-2"
            />
            <b className="text-green-500">Message</b>
          </div>
        </a>
        <a href="" className="single p-4">
          <img
            src={picture}
            alt=""
            className="h-14 w-14 rounded-full object-cover "
          />
          <div>
            <p className="text-center text-xl">Ashafa Ahmed</p>
            <p className="text-xs text-center">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={message}
              alt=""
              className="w-10 h-10 bg-green-500 rounded-full p-2"
            />
            <b className="text-green-500">Message</b>
          </div>
        </a>
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
  );
};

export default Main;
