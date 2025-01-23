import { database, DATABASE_ID, USERS_COLLECTION_ID } from "@/db";
import React from "react";

const userServices = {
  //Créer un utilisateur
  createUser: async (id, userInfos) => {
    try {
      const res = await database.createDocument(
        DATABASE_ID,
        USERS_COLLECTION_ID,
        id,
        userInfos
      );
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  },

  //Récup un user avec son id
  getUser: async (id) => {
    try {
      return await database.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [
        Query.equal("id", [id]),
      ]);
    } catch (error) {
      console.log(error);
      const notify = () => toast("Une erreur est survenue");
    }
  },
};

export default userServices;
