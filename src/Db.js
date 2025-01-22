import { Account, Client, Databases, ID, Storage } from "appwrite";

export const DATABASE_ID = "6790b8ab001e4fa44a57";
export const USERS_COLLECTION_ID = "6790b8b00023d36a3d77";
export const client = new Client();

client.setProject("6790b0f000177c3df7f9");

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const getUniqueID = () => ID.unique();
