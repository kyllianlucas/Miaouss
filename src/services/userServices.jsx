import { database, DATABASE_ID, getUniqueId, USERS_COLLECTION_ID } from "@/db";

export const userServices = {

  create : async (userInfo) =>{
    try {
      
      const res  = await database.createDocument(
        DATABASE_ID,
        USERS_COLLECTION_ID,
        getUniqueId(),
        userInfo
      )
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
}