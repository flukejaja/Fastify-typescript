import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017";
const Client = new MongoClient(url);
Client.connect();
export const db = Client.db("local");
export const dbPrame = db.collection("dbPrame");
export const dbTop = db.collection("dbTop");
export const dbFluke = db.collection("dbFluke");
