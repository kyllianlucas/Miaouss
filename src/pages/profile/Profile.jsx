import "./Profile.css";
import ProfileData from "./ProfileData";

function Profile() {
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <ProfileData />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full"></div>
    </div>
  );
}

export default Profile;
