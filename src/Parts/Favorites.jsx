import React from "react";
import "./Favorites.css";
import picture from "../images/IMG_1600.JPG";
import { motion } from "framer-motion";

const Favorites = () => {

  return (
    <div>
      <motion.div className="wrapper" whileTap={{ cursor: "grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -250 }}
          className="carousel"
        >
          <motion.div className="item">
            <img src={picture} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Favorites;
