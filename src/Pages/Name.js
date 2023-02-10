import React from 'react'
import { useLoaderData, useNavigation } from "react-router-dom"
import video from "../images/flickr-loading.mp4"


const Name = () => {
    const nameurl = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        // return <video loop >
        //     <source src={video} type='video/mp4'  />
        // </video>
        return <h2>loading..</h2>
    }
    
  return (
    <div>
          <h2>{ nameurl.name }</h2>
          <h2>{ nameurl.meaning }</h2>
    </div>
  )
}

export const dataLoader = async () => {
    const res = await fetch("http://127.0.0.1:1000/");
    const name = await res.json();
    return name ;

}

export default Name
