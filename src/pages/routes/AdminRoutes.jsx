import React from "react";

export default function AdminRoutes() {
  const isAdmin = false;

  return isAdmin ? <Outlet /> : <span>You must be an admin...</span>;
}
