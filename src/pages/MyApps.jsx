import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MyApps() {
  return (
    <>
      <h2>Mes applications :</h2>
      <Link to="/my-apps/tasklist">Task list</Link>
      <Link to="/my-apps/inc">Incrementeur</Link>

      <div>
        <Outlet />
      </div>
    </>
  );
}
