import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SlSettings } from "react-icons/sl";
import { useAuth } from "@/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";

function ProfileData(user) {
  const [profileEdit, setProfileEdit] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  let data = {
    firstname: user.firstname ?? "user.firstname",
    lastname: user.lastname ?? "user.lastname",
    username: user.username ?? "user.username",
    email: user.email ?? "user.email",
    birthdate: user.birthdate ?? "user.birthdate",
  };
  user = data;

  const handleSave = () => {
    console.log("Save");
    setProfileEdit(!profileEdit);
  };

  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("pass") === formData.get("passBis")) {
      const userInfos = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        userName: formData.get("userName"),
        birthdate: formData.get("birthdate"),
      };
      createAccount(userInfos);
      navigate("/login");
    } else {
      setValidePassword(false);
    }
  };

  const handleLogout = () => {
    console.log("Logout");
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
            <Label className="text-gray-900">{user.firstname}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Lastname:</Label>
            <Label className="text-gray-900">{user.lastname}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Username:</Label>
            <Label className="text-gray-900">{user.username}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Email:</Label>
            <Label className="text-gray-900">{user.email}</Label>
          </div>

          <div className="flex justify-between items-center border-b pb-3">
            <Label className="text-gray-700 font-medium">Birthdate:</Label>
            <Label className="text-gray-900">{user.birthdate}</Label>
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
                defaultValue={user.firstname}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Lastname:</Label>
              <Input
                id="lastname"
                name="lastname"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="lastname"
                defaultValue={user.lastname}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Username:</Label>
              <Input
                id="username"
                name="username"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="username"
                defaultValue={user.username}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Email:</Label>
              <Label className="text-gray-900">{user.email}</Label>
            </div>

            <div className="flex justify-between items-center border-b pb-3">
              <Label className="text-gray-700 font-medium">Birthdate:</Label>
              <Input
                id="birthdate"
                name="birthdate"
                className="w-2/3 p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                type="date"
                defaultValue={user.birthdate}
              />
            </div>
            <Button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              onClick={handleSave}
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
