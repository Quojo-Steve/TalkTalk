import React, {useState} from "react";
import "./Sidebar.css";
import logo from "../images/logo.png";
import picture from "../images/IMG_1600.JPG";
import favorite from "../images/star_48px.png";
import file from "../images/file_80px.png";
import community from "../images/user_groups_100px.png";
import notification from "../images/doorbell_48px.png";
import settings from "../images/settings_48px.png";
import moon from "../images/moon_man_100px.png";
import logout from "../images/Power Off Button_128px.png";
import close from "../images/close_100px.png";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(true);
  const [theme, settheme] = useState(true);
  
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
    <div>
      <div className="sidebar1">
        <div className="top">
          <img src={logo || <Skeleton circle width={30} height={30} />} id="btn" alt="" />
        </div>
        <div className="user">
          <img src={picture || <Skeleton circle width={30} height={30} />} alt="" className={isOpen ? "user-img" : "user-img1"} onClick={()=>setisOpen(!isOpen)} />
          <p className="name">Status</p>
        </div>
        <ul>
          <li>
            <a href="#">
              <img src={favorite || <Skeleton />} alt="" />
            </a>
            <span className="tooltip">Favorites</span>
          </li>
          <li>
            <a href="#">
              <img src={file} alt="" />
            </a>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <a href="#">
              <img src={community} alt="" />
            </a>
            <span className="tooltip">Community</span>
          </li>
          <li>
            <a href="#">
              <img src={notification} alt="" />
            </a>
            <span className="tooltip">Notifications</span>
          </li>
          <li>
            <a href="#">
              <img src={settings} alt="" />
            </a>
            <span className="tooltip">Settings</span>
          </li>
          <br />
          <br />
          <li>
            <button onClick={()=>settheme(!theme)}>
              <img src={moon} alt="" id={theme ? "theme" : "theme"} />
            </button>
            <span className="tooltip">Theme</span>
          </li>
          <li>
            <a href="#">
              <img src={logout} alt="" />
            </a>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
      <div className={isOpen ? "main-content" : "main-content1"}>
        <div className="main-top">
          <div className="left">
            <img src={picture} alt="Profile picture" loading="lazy" />
            <div className="text">
              <p>My Chat</p>
              <p>Status</p>
            </div>
          </div>
          <img src={close} alt="" id="close" onClick={()=>setisOpen(!isOpen)} />
        </div>
        <hr />
        <div className="link">
          <a href="">Edit Profile</a>
          <a href="">Create Room</a>
          <a href="">Logout</a>
        </div>
      </div>
      
      </div>
      </SkeletonTheme>
  );
};

export default Sidebar;
