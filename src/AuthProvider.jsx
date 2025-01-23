import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { account } from "./Db";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkUser().then(() => setIsLoading(false));
  }, []);

  const checkUser = async () => {
    try {
      const res = await account.get();
      res ? setUser(res) : "";
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (userInfos) => {
    try {
      const res = await account.createEmailPasswordSession(
        userInfos.email,
        userInfos.password
      );
      res ? setUser(res) : "";
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const res = await account.deleteSession("current");
      res ? setUser(null) : "";
    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    user: user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isLoading ? "" : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
