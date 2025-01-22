import { database, DATABASE_ID, getUniqueID, USERS_COLLECTION_ID } from "@/Db";

export const userServices = {
  create: async (userInfos) => {
    try {
      const res = await database.createDocument(
        DATABASE_ID,
        USERS_COLLECTION_ID,
        getUniqueID(),
        userInfos
      );
    } catch (e) {
      console.log(e);
    }
  },
  getAll: async () => {
    return await database.listDocuments(DATABASE_ID, USERS_COLLECTION_ID);
  },
};
