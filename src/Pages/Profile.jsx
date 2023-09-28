import React, { useState, useEffect } from "react";
import { AuthData } from "../auth/AuthWrapper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const { profile, user, authTokens } = AuthData();
  const [data, setData] = useState();
  const [fullname, setFullName] = useState("");
  const [newbio, setNewBio] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const profilefunc = async (e) => {
    const profileData = await profile();
    let image = "http://127.0.0.1:8000/" + profileData.image;
    let full_name = profileData.full_name;
    setFullName(full_name);
    let biogra = profileData.bio;
    setNewBio(biogra);
    setData(image); 
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file); 
  };
//dont forget to verify image
  const profileUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (selectedImage) {
      if(selectedImage.type === "image/jpeg"){
        formData.append("image", selectedImage);
      }else{
        toast.error("Not an image selected", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return
      }
    }
    formData.append("full_name", fullname);
    formData.append("bio", newbio);
    try {
      const response = await fetch("http://localhost:8000/api/profile/", {
        method: "PUT",
        headers: {
          Authorization: "Bearer " + authTokens.access,
        },
        body: formData,
      });

      if (response.status === 200) {
        // Handle success
        toast.success("Profile updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/')
      } else {
        // Handle error
        toast.error("Failed to update profile", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    profilefunc();
  }, []);

  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <div className="min-h-screen flex items-center justify-center overflow-auto">
        <div className="flex items-center justify-center flex-col p-2">
          <div className="bg-gray-100 px-11 py-7 mb-5 rounded">
            <a href="/" className="text-white bg-blue-400 px-5 py-3 rounded-md">
              Go Back
            </a>
          </div>
          <div className="bg-gray-100 flex flex-col p-4 w-96 rounded">
            <div className="flex justify-center items-center flex-col">
              {data ? (
                <img
                  src={data}
                  alt="Profile"
                  className="w-20 h-20 rounded-full"
                />
              ) : (
                <Skeleton circle width={30} height={30} />
              )}
              <h2>Hello there 👋</h2>
              <p>Let's edit your profile</p>
            </div>
            <label>Username</label>
            <input
              type="text"
              disabled
              className="border border-gray-300 bg-gray-300 outline-none p-1 mb-3"
              value={user.username}
            />
            <label>Email</label>
            <input
              type="text"
              disabled
              className="border border-gray-300 bg-gray-300 outline-none p-1 mb-3"
              value={user.email}
            />
            <label>Full Name</label>
            <input
              type="text"
              className="border border-gray-300 outline-none p-1 mb-3"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label>Bio</label>
            <input
              type="text"
              className="border border-gray-300 outline-none p-1 mb-3"
              value={newbio}
              onChange={(e) => setNewBio(e.target.value)}
            />
            <label>Image</label>
            <input
              type="file"
              name="image"
              className="mb-2"
              onChange={handleImageChange}
            />
            <button
              className="bg-blue-400 text-white p-1 rounded"
              onClick={profileUpdate}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default Profile;
