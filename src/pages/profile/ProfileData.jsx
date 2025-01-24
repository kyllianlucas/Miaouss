import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./Profile.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";

function ProfileData(user) {
  const [showPassword, setShowPassword] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);
  const [validePassword, setValidePassword] = useState(true);
  const [password, setPassword] = useState(["", ""]);
  const [maskedPassword, setMaskedPassword] = useState(["", ""]);

  let data = {
    firstname: user.firstname ?? "user.firstname",
    lastname: user.lastname ?? "user.lastname",
    username: user.username ?? "user.username",
    email: user.email ?? "user.email",
    birthdate: user.birthdate ?? "user.birthdate",
  };
  user = data;

  const maskPassword = (password) => password.replace(/./g, "*");

  const handlePasswordChange = (index, value) => {
    const newPassword = [...password];
    newPassword[index] = value;

    setPassword(newPassword);

    const newMaskedPassword = [...maskedPassword];
    newMaskedPassword[index] = maskPassword(value);
    setMaskedPassword(newMaskedPassword);
  };

  const handleSave = () => {
    password[0] === password[1] && password[0] != "" && password[1] != ""
      ? console.log("Password saved")
      : password[0] == "" && password[1] == ""
      ? console.log("Password not changed")
      : setValidePassword(false);
  };

  return (
    <>
      <h1>Profile</h1>
      <div className="profile-info">
        <button onClick={() => setProfileEdit(!profileEdit)}>
          <SlSettings className="profile-edit" />
        </button>
        <div className="profile-info-item">
          <span>Firstname:</span>
          {profileEdit ? (
            <input
              className="profile-input"
              type="text"
              defaultValue={user.firstname}
            />
          ) : (
            <span>{user.firstname}</span>
          )}
        </div>
        <div className="profile-info-item">
          <span>Lastname:</span>
          {profileEdit ? (
            <input
              className="profile-input"
              type="text"
              defaultValue={user.lastname}
            />
          ) : (
            <span>{user.lastname}</span>
          )}
        </div>
        <div className="profile-info-item">
          <span>Username:</span>
          {profileEdit ? (
            <input
              className="profile-input"
              type="text"
              defaultValue={user.username}
            />
          ) : (
            <span>{user.username}</span>
          )}
        </div>
        <div className="profile-info-item">
          <span>Email:</span>
          <span>{user.email}</span>
        </div>

        {profileEdit && (
          <div className="profile-info-item">
            <span>Password:</span>
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
            <div className="password-container">
              <div>
                <input
                  className="profile-input"
                  type={showPassword ? "text" : "password"}
                  value={password[0]}
                  onChange={(e) => handlePasswordChange(0, e.target.value)}
                />
                <input
                  className="profile-input"
                  type={showPassword ? "text" : "password"}
                  value={password[1]}
                  onChange={(e) => handlePasswordChange(1, e.target.value)}
                />
                {!validePassword && <span>Identical password required !</span>}
              </div>
            </div>
          </div>
        )}

        <div className="profile-info-item">
          <span>Birthdate:</span>
          {profileEdit ? (
            <input
              className="profile-input"
              type="text"
              value={user.birthdate}
            />
          ) : (
            <span>{user.birthdate}</span>
          )}
        </div>

        {profileEdit && (
          <Button className="profile-save" onClick={handleSave}>
            Save
          </Button>
        )}
      </div>
    </>
  );
}

export default ProfileData;
