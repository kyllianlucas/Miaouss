import { useAuth } from "@/authProvider";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    user ? "" : navigate("/login");
  });

  return user ? <Outlet /> : "";
}
