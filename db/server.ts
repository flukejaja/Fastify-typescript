import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017";
const Client = new MongoClient(url);
export const connect = Client.connect();
export const db = Client.db("local");
export const dbCollection = db.collection("dbTest");
