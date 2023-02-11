import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import picture from "../images/IMG_1600.JPG";
import rick from "../images/rick.jpeg";
import "./Trial.css";

const Trial = () => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div ref={carousel} className="wrapper1" whileTap={{ cursor: "grabbing"}}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="carousel1"
        >
          <motion.div className="item1">
            <img src={picture} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={picture} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
            <img src={rick} alt="" draggable="false" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Trial;
