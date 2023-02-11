import React from "react";
import "./Favorites.css";
import picture from "../images/IMG_1600.JPG";
import rick from "../images/rick.jpeg";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Favorites = () => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="wrapper" whileTap={{ cursor: "grabbing"}}>
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
