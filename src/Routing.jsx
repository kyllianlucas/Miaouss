import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/LoginPage";
import Signup from "./pages/signup/SignupPage";
import Profile from "./pages/profile/Profile";

export default function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
