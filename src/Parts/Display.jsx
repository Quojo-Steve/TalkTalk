import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom"; // Import useHistory
import {
  GrFormClose,
  GrFacebookOption,
  GrLinkedinOption,
} from "react-icons/gr";
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
import { BiMicrophone } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { AiFillPicture } from "react-icons/ai";
import Incoming from "./Incoming";
import Sending from "./Sending";
import { AuthData } from "../auth/AuthWrapper";
import FadeLoader from "react-spinners/FadeLoader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchData } from "../utils/Dummy";

const Display = () => {
  const { id } = useParams();
  const [isOpen, setisOpen] = useState(false);
  const { authTokens, user } = AuthData();
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mess, setMess] = useState();

  const messagesContainerRef = useRef(null);
  // const history = useHistory(); // Get the history object

  const getUserData = async (a) => {
    try {
      let res = await fetch(`http://localhost:8000/api/person/${a}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      let data = await res.json();
      if (res.status === 200) {
        setUserData(data);
      } else {
        throw new Error(`Error fetching data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const getMessages = async (a) => {
    try {
      let res = await fetch(`http://localhost:8000/api/sendmessage/${a}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      let data = await res.json();
      if (res.status === 200) {
        // Sort messages by message ID in ascending order
        data.sort((a, b) => a.id - b.id);

        // Set the sorted messages in the state
        setMessages(data);
        setLoading(false);
      } else {
        throw new Error(`Error fetching data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const sendmessage = async (a) => {
    try {
      if (!mess || mess.trim() === "") {
        toast.error("No message inputted", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return; // Don't send empty messages
      }

      const formData = new FormData();
      formData.append("body", mess);
      let res = await fetch(`http://localhost:8000/api/sendmessage/${a}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({ body: mess }),
      });
      let data = await res.json();
      if (res.status === 200) {
        // Sort messages by message ID in ascending order
        data.sort((a, b) => a.id - b.id);

        // Set the sorted messages in the state
        setMessages(data);
        setMess(""); // Clear the input field after sending
      } else {
        throw new Error(`Error fetching data: ${res.statusText}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const sender = async () => {
    await sendmessage(id);
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUserData(id);
        const mess1 = await getMessages(id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchUserData();
  }, [id]);

  useEffect(() => {
    // Scroll to the bottom of the messages container
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Listen to changes in the "id" parameter
  useEffect(() => {
    // Reset messages to an empty array when the parameter changes
    setMessages([]);
    setLoading(true);
    // Fetch new messages for the updated "id"
    async function fetchNewData() {
      try {
        const data = await getUserData(id);
        const mess1 = await getMessages(id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchNewData();
  }, [id]);

  // useEffect(() => {
  //   async function fetchNewData() {
  //     try {
  //       const data = await getUserData(id);
  //       const mess1 = await getMessages(id);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   }
  //   let interval = setInterval(() => {
  //     fetchNewData();
  //     console.log("fect")
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [id]);

  //make loading animation
  return (
    <>
      {loading ? ( // Render loading spinner based on the loading state
        <div className="body">
          <FadeLoader
            className="flex justify-center items-center min-h-full"
            size={30}
            color={"dodgerblue"}
            loading={loading}
          />
        </div>
      ) : (
        <div>
          <div className="mother">
            <div className="topside">
              <img
                src={"http://127.0.0.1:8000/" + userData.profile.image}
                alt=""
                onClick={() => setisOpen(!isOpen)}
              />
              <div className="detailss">
                <h1>{userData.profile.full_name}</h1>{" "}
                <p>{userData.user.username}</p>{" "}
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
            <div
              className="chatside flex justify-between overflow-y-auto flex-col scroll-container"
              ref={messagesContainerRef}
            >
              {messages.map((m) =>
                m.msg_sender == user.user_id ? (
                  <div key={m.id}>
                    <Sending message={m.body} />
                  </div>
                ) : (
                  <div key={m.id}>
                    <Incoming message={m.body} />
                  </div>
                )
              )}
            </div>
            <div className="send-message">
              <AiFillPicture className="icons" />
              <BsEmojiLaughing className="icons" />
              <BsPlusLg className="icons" />
              <input
                type="text"
                className="input"
                placeholder="Write a message..."
                onChange={(e) => setMess(e.target.value)}
              />
              <BiMicrophone className="icons" />
              <FiSend className="icon-send" onClick={sender} />
            </div>
          </div>

          <div className={isOpen ? "profile" : "profilenot"}>
            <div className="headings">
              <div className="t">
                <h1>Profile</h1>
                <h5>Personal information</h5>
              </div>
              <GrFormClose
                className="clos"
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              />
            </div>

            <div className="infoo">
              <img
                src={"http://127.0.0.1:8000/" + userData.profile.image}
                alt=""
                className="rounded-2xl shadow-md shadow-black h-64 object-cover w-full"
              />
              <h1 className="font-bold mt-3">{userData.profile.full_name}</h1>
              <p>{userData.user.username}</p>{" "}
            </div>
            <div className="socials">
              <BsInstagram className="insta" />
              <BsTwitter className="twitter" />
              <GrFacebookOption className="facebook" />
              <GrLinkedinOption className="linked" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
