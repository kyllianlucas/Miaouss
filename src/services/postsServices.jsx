import {
  client,
  database,
  DATABASE_ID,
  POSTS_COLLECTION_ID,
  getUniqueId,
} from "@/db";
import { Query } from "appwrite";

export const postsServices = {
  getAll: async () => {
    return await database.listDocuments(DATABASE_ID, POSTS_COLLECTION_ID);
  },
  listen: (setPosts) => {
    return client.subscribe(
      [`databases.${DATABASE_ID}.collections.${POSTS_COLLECTION_ID}.documents`],
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
  post: async (postJSON) => {
    return await database.createDocument(
      DATABASE_ID,
      POSTS_COLLECTION_ID,
      getUniqueId(),
      postJSON
    );
  },
  delete: async (postId) => {
    return await database.deleteDocument(
      DATABASE_ID,
      POSTS_COLLECTION_ID,
      postId
    );
  },
  modify: async (postId, updates) => {
    return await database.updateDocument(
      DATABASE_ID,
      POSTS_COLLECTION_ID,
      postId,
      updates
    );
  },
  getAllFromId: async (userId) => {
    return await database.listDocuments(DATABASE_ID, POSTS_COLLECTION_ID, [
      Query.equal("userId", userId),
    ]);
  },
  putALike: async (userId, postId) => {
    const isLikedByUser = await database.getDocument(
      DATABASE_ID,
      LIKES_COLLECTION_ID,
      Query.and([
        Query.equal("collectionId", postId),
        Query.equal("userId", userId),
      ])
    );
    if (isLikedByUser !== null) {
      const sendLike = await database.createDocument(
        DATABASE_ID,
        LIKES_COLLECTION_ID,
        Query.and([
          Query.equal("collectionId", postId),
          Query.equal("userId", userId),
        ])
      );
      return sendLike;
    }
    return;
  },
};
