import { Query } from "appwrite";
import {
  client,
  database,
  DATABASE_ID,
  MESSAGES_COLLECTION_ID,
  LIKES_COLLECTION_ID,
  getUniqueId,
} from "../../../Littler/src/db";

export const messagesServices = {
  getAll: async () => {
    return await database.listDocuments(DATABASE_ID, MESSAGES_COLLECTION_ID);
  },
  listen: (setPosts) => {
    return client.subscribe(
      [
        `databases.${DATABASE_ID}.collections.${MESSAGES_COLLECTION_ID}.documents`,
      ],
      (res) => {
        if (
          res.events.includes("databases.*.collections.*.documents.*.create")
        ) {
          setPosts((prev) => [...prev, res.payload]);
          console.log("element cree :", res.payload);
        }
        if (
          res.events.includes("databases.*.collections.*.documents.*.delete")
        ) {
          setPosts((prev) =>
            prev.filter((post) => post.$id !== res.payload.$id)
          );
          console.log("element supprime :", res.payload);
        }
        if (
          res.events.includes("databases.*.collections.*.documents.*.update")
        ) {
          console.log("element modifie :", res.payload);
        }
      }
    );
  },
  post: async (messageJSON) => {
    return await database.createDocument(
      DATABASE_ID,
      MESSAGES_COLLECTION_ID,
      getUniqueId(),
      messageJSON
    );
  },
  delete: async (messageId) => {
    return await database.deleteDocument(
      DATABASE_ID,
      MESSAGES_COLLECTION_ID,
      messageId
    );
  },
  modify: async (messageId, updatesJSON) => {
    return await database.updateDocument(
      DATABASE_ID,
      MESSAGES_COLLECTION_ID,
      messageId,
      updatesJSON
    );
  },
  getAllFromId: async (userId) => {
    return await database.listDocuments(
      DATABASE_ID,
      MESSAGES_COLLECTION_ID,
      Query.equal("userId", userId)
    );
  },
  putALike: async (userId, messageId) => {
    const isLikedByUser = await database.getDocument(
      DATABASE_ID,
      LIKES_COLLECTION_ID,
      Query.and([
        Query.equal("collectionId", messageId),
        Query.equal("userId", userId),
      ])
    );
    if (isLikedByUser !== null) {
      const sendLike = await database.createDocument(
        DATABASE_ID,
        LIKES_COLLECTION_ID,
        Query.and([
          Query.equal("collectionId", messageId),
          Query.equal("userId", userId),
        ])
      );
      return sendLike;
    } else {
      return await database.deleteDocument(
        DATABASE_ID,
        LIKES_COLLECTION_ID,
        Query.and([
          Query.equal("collectionId", messageId),
          Query.equal("userId", userId),
        ])
      );
    }
  },
};
