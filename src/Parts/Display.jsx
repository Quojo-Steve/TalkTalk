import React from 'react'
import { useParams } from "react-router-dom";
import { Dummy } from '../Dummy';

const Display = () => {
    const { id } = useParams();

  return (
    <div>
      <div className="bg-slate-700 text-yellow-300 h-full w-full p-5">
        <h1>{Dummy[id - 1].name}</h1>{" "}
        <p>{Dummy[id - 1].username}</p>{" "}
    </div>
    </div>
  )
}

export default Display
