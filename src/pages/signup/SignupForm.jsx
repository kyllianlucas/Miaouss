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
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupForm({ className, ...props }) {
  const [validePassword, setValidePassword] = useState(true);
  const navigate = useNavigate();

  const { createAccount } = useAuth();
  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("pass") === formData.get("passBis")) {
      const userInfos = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        userName: formData.get("userName"),
        email: formData.get("email"),
        birthdate: formData.get("birthdate"),
        password: formData.get("pass"),
      };
      createAccount(userInfos);
      navigate("/login");
    } else {
      setValidePassword(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>Création de votre compte</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={validate}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  placeholder="Donald"
                  required
                />
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  placeholder="Trump"
                  required
                />
                <Label htmlFor="userName">Pseudo</Label>
                <Input
                  id="userName"
                  name="userName"
                  type="userName"
                  placeholder="Trumpy"
                  required
                />
                <Label htmlFor="birthdate">Date de naissance</Label>
                <Input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  placeholder="Bobibob"
                  required
                />
                <Label htmlFor="email">Adresse mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="donald.trump@gmail.com"
                  required
                />
                <Label htmlFor="pass">Mot de passe</Label>
                <Input
                  id="pass"
                  name="pass"
                  type="password"
                  placeholder="Votre mot de passe"
                  required
                />
                <Label htmlFor="passBis">
                  Entrez à nouveau votre mot de passe
                </Label>
                <Input
                  id="passBis"
                  name="passBis"
                  type="password"
                  placeholder="Votre mot de passe"
                  required
                />

                {!validePassword && (
                  <Label htmlFor="errorPassword" className="text-red-500">
                    Les mots de passe ne sont pas identiques
                  </Label>
                )}
              </div>

              <Button type="submit" className="w-full">
                Signup
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
