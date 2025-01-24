import React, { useEffect, useState, useContext, createContext } from "react";
import { account } from "./db";
import { toast } from "react-toastify";
import userServices from "./services/userServices";
import { ID } from "appwrite";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    checkUser().then(() => setLoading(false));
  }, []);

  //Récupérer le user connecté
  const checkUser = async () => {
    try {
      const res = await account.get();
      if (res) {
        const userInfos = await userServices.getUser(res.$id);
        console.log(userInfos);
        setUser(userInfos);
      }
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  };

  //Connexion à l'application
  const login = async (userInfos) => {
    try {
      const res = await account.createEmailPasswordSession(
        userInfos.email,
        userInfos.password
      );
      if (res) {
        const userInfos = await userServices.getUser(res.userId);
        setUser(userInfos);
      }
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  };

  //Deconnexion de l'application
  const logout = async () => {
    try {
      const res = await account.deleteSessions();
      res ? setUser(null) : "";
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  };

  //Creer un compte
  const createAccount = async (userInfos) => {
    try {
      console.log("Données envoyées:", JSON.stringify(userInfos));
      const res = await account.create(
        ID.unique(),
        userInfos.email,
        userInfos.password,
        `${userInfos.lastName} ${userInfos.firstName}`
      );

      if (res) {
        const user = await userServices.createUser(res.$id, {
          email: userInfos.email,
          userName: userInfos.userName,
          birthdate: userInfos.birthdate,
          firstName: userInfos.firstName,
          lastName: userInfos.lastName,
          id: res.$id,
        });
      }
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  };

  const contextData = {
    user: user,
    login,
    logout,
    createAccount,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? "" : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
