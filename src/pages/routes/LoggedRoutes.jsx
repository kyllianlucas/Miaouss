import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

export default function LoggedRoutes() {
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    user ? "" : navigate("/login");
  });

  return user ? <Outlet /> : "";
}
