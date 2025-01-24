import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/AuthProvider";
import { useNavigate } from "react-router-dom";

export function LoginForm({ className, ...props }) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userInfos = {
      email: formData.get("email"),
      password: formData.get("pass"),
    };
    login(userInfos);
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Entrer un pseudo</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={validate}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Adresse mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Bobibob"
                  required
                />
                <Label htmlFor="pseudo">Mot de passe</Label>
                <Input
                  id="pass"
                  name="pass"
                  type="password"
                  placeholder="Votre mot de passe"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <button onClick={handleSignup} className="w-full">
            <span className="text-blue-500">Signup</span>
          </button>
        </CardContent>
      </Card>
    </div>
  );
}
