import { useAuth } from "@/AuthProvider";
import "./Profile.css";
import ProfileData from "./ProfileData";
import userServices from "../../services/userServices";

function Profile({ children }) {
  const { user } = useAuth();
  // const userData = userServices.getUser().then((res) => res);
  console.log(user);
  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <ProfileData user={user} />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}

export default Profile;
