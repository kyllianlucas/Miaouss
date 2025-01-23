import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasklist from "./components/tasklist/tasklist";
import Incrementeur from "./components/incrementeur";
import MyApps from "./pages/MyApps";
import MainLayout from "./pages/layouts/MainLayout";
import LoggedRoutes from "./pages/routes/LoggedRoutes";
import AdminRoutes from "./pages/routes/AdminRoutes";
import Login from "./pages/Login";

export default function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<LoggedRoutes />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-apps" element={<MyApps />}>
            <Route path="/my-apps/tasklist" element={<Tasklist />} />
            <Route element={<AdminRoutes />}>
              <Route path="/my-apps/inc" element={<Incrementeur />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
