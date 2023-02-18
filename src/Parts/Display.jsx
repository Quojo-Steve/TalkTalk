import React from 'react'
import { useParams } from "react-router-dom";
import { Dummy } from '../Dummy';
import "./Display.css";
import { BsFillVolumeUpFill, BsSearch, BsTelephone,BsCameraVideo, BsGrid, BsThreeDotsVertical } from 'react-icons/bs';

const Display = () => {
    const { id } = useParams();

  return (
    <div className='mother'>
      <div className="topside">
        <img src={Dummy[id - 1].image} alt="" />
        <div className="detailss">
        <h1>{Dummy[id - 1].name}</h1>{" "}
        <p>{Dummy[id - 1].username}</p>{" "}
        </div>
        <span></span>
        <div className="middleparts">
        <BsFillVolumeUpFill className='svgs'/>
        <BsSearch className='svgs' />
        </div>
        
        <BsTelephone className='svgs' />
        <BsCameraVideo className='svgs' />
        <BsGrid className='svgs' />
        <BsThreeDotsVertical className='svgs' />
      </div>
      <div className="chatside">
        re
      </div>
    </div>
  )
}

export default Display
