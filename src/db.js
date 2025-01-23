import { Account, Client, Databases, Storage, ID } from "appwrite";

export const DATABASE_ID = import.meta.env.DATABASE_ID;
export const USERS_COLLECTION_ID = import.meta.env.USERS_COLLECTION_ID;
export const POSTS_COLLECTION_ID = import.meta.env.POSTS_COLLECTION_ID;

export const client = new Client();
client.setEndpoint("http://localhost/v1").setProject("6790adfd0030e6953858");

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const getUniqueId = () => ID.unique();
