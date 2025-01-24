// import { useAuth } from "@/AuthProvider";
import { useState } from "react";
import "./Profile.css";
import ProfileData from "./ProfileData";

function Profile({ children }) {
  //   const { user } = useAuth();
  return (
    <div className="main-profile">
      <div className="panel">
        <ProfileData />
      </div>
      <div className="panel">{children}</div>
    </div>
  );
}

export default Profile;
