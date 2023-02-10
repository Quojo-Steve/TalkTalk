import React from "react";
import "./Favorites.css";
import picture from "../images/IMG_1600.JPG";

const Favorites = () => {
  
  return (
    <div>
      <div className="wrapper">
        <div className="carousel">
          <img src={picture} alt="" draggable="false" />
          <img src={picture} alt="" draggable="false" />
          <img src={picture} alt="" draggable="false" />
          <img src={picture} alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default Favorites;
