import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Dummy } from "../Dummy";
import { FakeMessage } from "../FakeMessage";
import { GrFormClose,GrFacebookOption,GrLinkedinOption } from "react-icons/gr"
import "./Display.css";
import {
  BsFillVolumeUpFill,
  BsSearch,
  BsTelephone,
  BsCameraVideo,
  BsGrid,
  BsThreeDotsVertical,
  BsEmojiLaughing,
  BsPlusLg,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import {BiMicrophone} from "react-icons/bi";
import {FiSend} from "react-icons/fi";
import {AiFillPicture} from "react-icons/ai";
import Incoming from "./Incoming";
import Sending from "./Sending";

const Display = () => {
  const { id } = useParams();
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
    
   
    <div className="mother">
      <div className="topside">
      
        <img src={Dummy[id - 1].image} alt="" onClick={()=>setisOpen(!isOpen)} />
        <div className="detailss">
          <h1>{Dummy[id - 1].name}</h1> <p>{Dummy[id - 1].username}</p>{" "}
        </div>
        <span></span>
        <div className="middleparts">
          <BsFillVolumeUpFill className="svgs" />
          <BsSearch className="svgs" />
        </div>

        <BsTelephone className="svgs" />
        <BsCameraVideo className="svgs" />
        <BsGrid className="svgs" />
        <BsThreeDotsVertical className="svgs" />
      </div>
      {/* Ask Eugene */}
      <div className="chatside flex justify-between overflow-y-auto flex-col">
        {FakeMessage.map((messages) =>
          // console.log(messages.message);
          messages.name === "incoming" ? (
            <Incoming message={messages.message} />
          ) : (
            <Sending message={messages.message} />
          )
        )}
      </div>
      <div className="send-message">
            <AiFillPicture className="icons"/>
            <BsEmojiLaughing className="icons"/>
            <BsPlusLg className="icons" />
            <input type="text" className="input" placeholder="Write a message..."/>
        <BiMicrophone className="icons"/>
        <FiSend className="icon-send"/>
      </div>

      </div>
      <div className={isOpen ? "profile" : "profilenot"}>
          <div className="headings">
              <div className="t">
                  <h1>Profile</h1>
                  <h5>Personal information</h5>
              </div>
              <GrFormClose className="clos" onClick={()=>setisOpen(!isOpen)} />
        </div>
        
        <div className="infoo">
        <img src={Dummy[id - 1].image} alt="" className="rounded-2xl shadow-md shadow-black h-64 object-cover w-full" />
          <h1 className="font-bold mt-3">{Dummy[id - 1].name}</h1>
          <p>{Dummy[id - 1].username}</p>{" "}
        </div>
        <div className="socials">
          <BsInstagram className="insta" />
          <BsTwitter className="twitter" />
          <GrFacebookOption className="facebook" />
          <GrLinkedinOption className="linked" />
        </div>
          
        
      
    </div>

      </>
  );
};

export default Display;
