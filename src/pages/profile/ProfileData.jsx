import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlSettings } from "react-icons/sl";
import { useAuth } from "@/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import userServices from "@/services/userServices";

function ProfileData() {
  const [profileEdit, setProfileEdit] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  let data = {
    firstname: user?.firstName ?? "",
    lastname: user?.lastName ?? "",
    username: user?.userName ?? "",
    email: user?.email ?? "",
    birthdate: formatDate(user?.birthdate) ?? "",
  };

  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const userInfos = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      userName: formData.get("userName"),
      birthdate: formData.get("birthdate"),
    };

    userServices.updateUser(user.$id, userInfos);
    setProfileEdit(!profileEdit);
    navigate(0);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto p-2 font-sans">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Profile
      </h1>
      {!profileEdit ? (
        <div className="space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <button onClick={() => setProfileEdit(!profileEdit)}>
              <SlSettings className="text-xl text-blue-500 transition-transform transform hover:rotate-90" />
            </button>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Firstname:</Label>
            <Label className="text-gray-900">{data.firstname}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Lastname:</Label>
            <Label className="text-gray-900">{data.lastname}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Username:</Label>
            <Label className="text-gray-900">{data.username}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Email:</Label>
            <Label className="text-gray-900">{data.email}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Birthdate:</Label>
            <Label className="text-gray-900">{data.birthdate}</Label>
          </div>
        </div>
      ) : (
        <form onSubmit={validate}>
          <div className="space-y-4">
            <div className="flex justify-center items-center space-x-2">
              <button onClick={() => setProfileEdit(!profileEdit)}>
                <SlSettings className="text-xl text-blue-500 transition-transform transform hover:rotate-90" />
              </button>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Firstname:</Label>
              <Input
                id="firstName"
                name="firstName"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="firstName"
                defaultValue={data.firstname}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Lastname:</Label>
              <Input
                id="lastName"
                name="lastName"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="lastName"
                defaultValue={data.lastname}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Username:</Label>
              <Input
                id="userName"
                name="userName"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="userName"
                defaultValue={data.username}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Email:</Label>
              <Label className="text-gray-900">{data.email}</Label>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Birthdate:</Label>
              <Input
                id="birthdate"
                name="birthdate"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
                defaultValue={data.birthdate}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Save
            </Button>
          </div>
        </form>
      )}
      <Button
        className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
}

export default ProfileData;
