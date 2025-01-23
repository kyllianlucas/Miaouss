import { Account, Client, Databases, Storage, ID } from "appwrite";

export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
export const USERS_COLLECTION_ID = import.meta.env.VITE_USERS_COLLECTION_ID;
export const POSTS_COLLECTION_ID = import.meta.env.VITE_POSTS_COLLECTION_ID;
export const MESSAGES_COLLECTION_ID = import.meta.env
  .VITE_MESSAGES_COLLECTION_ID;
export const LIKES_COLLECTION_ID = import.meta.env.VITE_LIKES_COLLECTION_ID;

export const client = new Client();
client
  .setEndpoint("http://172.27.74.113:7777/v1")
  .setProject("6792466000195ecf0f8f");

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const getUniqueId = () => ID.unique();
