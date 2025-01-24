import { useAuth } from "@/AuthProvider";
import { LoginForm } from "./LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { user } = useAuth();

  const navigate = useNavigate();
  useEffect(() => {
    user ? navigate("/chat") : "";
  }, [user]);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
