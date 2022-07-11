import { userMock } from "../db/Mockup";
import { dbCollection } from "../db/server";

export const dashboard = async (body: any) => {
  const db = await dbCollection.find({}).toArray();
  body = { ...db };
  console.log("db =>", db);
  return body;
};
