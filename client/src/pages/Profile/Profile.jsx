import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import InfoCardForm from "../../components/InfoCard/InfoCardForm";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
import { Button } from "@mantine/core";
const Profile = () => {
  return (
    <div className="Profile w-full h-full p-10 bg-white m-3">
      <ProfileLeft />
      <div className="Profile-center">

      <InfoCardForm />
      {/* <PostSide/> */}
      </div>
      <div className="flex flex-col gap-4 ">
        <ProfileCard  location = 'profilePage'/>
      </div>
      {/* <RightSide/> */}
    </div>
  );
};

export default Profile;




